---
title: AWS EKS를 TencentCloud의 TKE로 마이그레이션하기
description: AWS EKS를 TencentCloud의 TKE로 마이그레이션하기
keywords: [AWS, EKS, TencentCloud, TKE, Jenkins, ArgoCD]
tags: [DevOps, Kubernetes, AWS, EKS, Jenkins, ArgoCD]
sidebar_position: 1
---

# AWS EKS를 TencentCloud의 TKE로 마이그레이션하기

## TCR 세팅 (Tencent Container Registry)

- Access Credential 탭에서 외부에서 접속할 수 있는 어카운트를 생성한다.
- 필요한 Image Repository를 생성한다.
- Network ACL 탭에서 외부에서 접근할 수 있도록 Public network를 설정한다.

## 젠킨스 서버 세팅

- 젠킨스 서버로 사용할 VM 인바운드 규칙에서 8080 포트를 허용한다.
- VM 세팅
  - 도커 설치
  - 젠킨스 이미지 pull
    ```
    docker pull jenkins/jenkins:latest
    ```
  - 젠킨스 컨테이너 실행
    ```
    docker run -d --name jenkins --restart=on-failure \
    -p 8080:8080 \
    -v /var/jenkins_home:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -e TZ=Asia/Seoul \
    -u root \
    jenkins/jenkins:latest
    ```
    - --restart=on-failure : on-failure 옵션은 비정상 종료시 컨테이너를 재실행한다.
    - -p 8080:8080 : 외부 접속을 위해 호스트의 8080 포트를 바인딩
    - -v /var/jenkins_home:/var/jenkins_home : 호스트의 var/jenkins 디렉토리를 호스트 볼륨으로 설정하여 jenkins 컨테이너의 home 디렉토리에 마운트
    - -v /var/run/docker.sock:/var/run/docker.sock : docker.sock 파일은 도커 데몬과 통신할 수 있는 소켓 파일로, 해당 파일을 컨테이너에 마운트시켜서 도커 명령을 실행할 수 있게 해준다. 이러한 방식을 dood(docker out of docker)라고 한다.
  - 초기 비밀번호 조회
    - 초기 비밀번호는 /var/jenkins_home/secretes/initialAdminPassword에 저장 됨
      ```
      cat /var/jenkins_home/secrets/initialAdminPassword
      ```
  - 젠킨스 컨테이너에 접속하여 docker CLI 설치
    ```
    docker exec -it jenkins bash
    apt-get update && apt-get install -y curl
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    ```

#### 참고 자료

[도커 컨테이너 안에서 도커 실행하기](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=isc0304&logNo=222274955992)

[Jenkins 설치](https://seosh817.tistory.com/287#google_vignette)

## 젠킨스 파이프라인 세팅

- Credentials 생성
  - TCR 접속을 위한 Credentials 생성 (TCR에서 생성했던 어카운트 정보 입력)
  - GitHub 접속을 위한 Credentials 생성
- 각 프로젝트 GitHub Repository 안에 젠킨스 스크립트 생성

  ```groovy
    node {
      def app
      def project = "project-name"
      def builder = "${currentBuild.getBuildCauses()[0].shortDescription} / ${currentBuild.getBuildCauses()[0].userId}"
      echo "PROJECT: ${project}"
      echo "BUILDER: ${builder}"
      echo "VERSION: ${env.VERSION}"

      stage('Clone repository') {
          checkout scm
      }

  		// 젠킨스 컨테이너 실행시 호스트의 /var/jenkins_home과 마운트 시켰기 때문에 env 파일 경로 동일함 - env 파일은 jenkins VM 안에서 관리
      stage('Build image') {
          String currentDirectory = pwd()
          sh "sed -i 's+VERSION=.*+VERSION=${env.VERSION}+g' /var/jenkins_home/env/${project}/env.dev"
          sh "echo current directory = ${currentDirectory}"
          sh "cp /var/jenkins_home/env/${project}/env.dev ${currentDirectory}/"
  				// 이미지 빌드 - 도커파일에서 NODE_ENV 인자로 사용
        app = docker.build("ow-tcr.tencentcloudcr.com/tcr-namespace-name/image-repository-name", "--build-arg NODE_ENV=dev .")
      }

      stage('Push image') {
  				// 젠킨스에 설정해둔 Credential을 통해 TCR에 env.VERSION을 태그로 이미지 푸시
          docker.withRegistry('http://ow-tcr.tencentcloudcr.com', 'credential-id') {
              app.push("${env.VERSION}")
          }
      }

  		// update-manifest 파이프라인 실행
      stage('Trigger ManifestUpdate') {
          echo "triggering update-manifest job"
          build job: 'update-manifest', parameters: [string(name: 'VERSION', value: env.VERSION), string(name: 'BUILDER', value: builder)]
      }
  }
  ```

- 프로젝트 별 젠킨스 deploy 파이프라인 생성
  - 파라미터 설정
    - VERSION - 이미지 태그값으로 사용
  - SCM 파이프라인 설정
    - 프로젝트 Repository 연결
    - GitHub Credentials 연결
    - 브랜치 설정
    - Repository 안에 생성해두었던 젠킨스 스크립트 파일 경로 입력
- manifest 관리 Repository에 프로젝트 별 젠킨스 스크립트 작성

  ```groovy
  import java.text.DateFormat;
  import java.text.SimpleDateFormat;
  import java.util.Date;
  import java.util.TimeZone;

  node {
    def app
    echo "BUILDER: ${env.BUILDER}"
    echo "VERSION: ${env.VERSION}"
    def TARGET = "image-repository-name"

    stage('Clone repository') {
        checkout scm
    }

    stage('Update GIT') {
        script {
            try {
                def date = new Date()
                def dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss (z Z)")
                def time = TimeZone.getTimeZone("Asia/Seoul")
                dateFormat.setTimeZone(time)
                today = dateFormat.format(date)
                echo today

  								// deploy repository의 deployment.yaml 파일의 이미지 태그(버전)값, history.text 파일에 로그 업데이트
                withCredentials([usernamePassword(credentialsId: 'jenkins-github-credential-id', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    sh "git config user.email github@email"
                    sh "git config user.name github-user-name"
                    sh "cat './${TARGET}/deployment.yaml'"
                    sh "sed -i 's+${TARGET}:.*+${TARGET}:${VERSION}+g' './${TARGET}/deployment.yaml'"
                    sh "cat './${TARGET}/deployment.yaml'"
                    sh "echo 'TIMESTAMP: ${today}, VERSION: ${VERSION}, BUILD_NUMBER: ${env.BUILD_NUMBER}, BUILDER: ${BUILDER}' >> './${TARGET}/history.txt'"
                    sh "git add ."
                    sh "git commit -m 'Deploy Complete [${TARGET}]: ${env.BUILD_NUMBER}'"
  										// 아래 부분 때문에 credential의 이름이 이메일 주소가 아닌 ID가 되어야 함
                    sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/manifest-repository.git HEAD:master"
                }
            } catch (err) {
                def errMsg = err.toString()
                echo errMsg
                throw err
            }
        }
    }
  }
  ```

- 프로젝트 별 젠킨스 update-manifest 파이프라인 생성
  - 파라미터 설정
    - VERSION - deploy 파이프라인에서 인자로 전달 받음
    - BUILDER - deploy 파이프라인에서 인자로 전달 받음
  - SCM 파이프라인 설정
    - manifest(deploy) Repository 연결
    - GitHub Credentials 연결
    - 브랜치 설정
    - Repository 안에 있는 해당 프로젝트의 젠킨스 스크립트 파일 경로 설정

## ArgoCD 설치

- TKE 클러스터 API 서버 접속 설정
  - 클러스터 API 서버에 Jenkins VM(Jenkins VM에 kubectl 설치 예정)이 접속할 수 있도록 설정 및 Private network 활성화
  - KubeConfig 파일 복사
- 젠킨스 VM 접속 후 Kubectl 설치
  - kubectl 바이너리 설치
    ```
    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
    ```
  - kubectl 설치
    ```
    sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
    ```
  - ~/.kube/config 파일에 TKE KubeConfig 내용 붙여넣기
  - `kubectl get node` 등의 명령어로 연결 확인
- ArgoCD 설치
  - 네임스페이스 생성
    ```
    kubectl create namespace argocd
    ```
  - ArgoCD 설치
    ```
    kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
    ```
  - ArgoCD 서버 UI에 접속하기 위해 LoadBalancer Service로 수정
    ```
    kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
    ```
    ```
    kubectl get svc argocd-server -n argocd
    ```
  - 초기 비밀번호 조회
    ```
    kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
    ```
- kubectl을 통해 클러스터에 TCR 자격 증명 생명
  ```
  kubectl create secret docker-registry secret-name \
  --docker-server=ow-tcr.tencentcloudcr.com \
  --docker-username=tcr-user-name \
  --docker-password=tcr-user-password \
  --docker-email=tencent-account-email
  ```

#### 참고 자료

[리눅스에 kubectl 설치 및 설정](https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/)

[프라이빗 레지스트리에서 이미지 받아오기](https://kubernetes.io/ko/docs/tasks/configure-pod-container/pull-image-private-registry/)

## ArgoCD 어플리케이션 세팅

- Settings 탭에서 manifest deploy Repository 연결
- 프로젝트 별 어플리케이션 생성
- manifest deploy repository에서 프로젝트에 해당하는 폴더 경로로 설정하여 생성
- manifest deploy repository에 프로젝트 별 deployment.yaml 작성

  ```yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
  labels:
  app: project-name
  name: project-name
  spec:
  replicas: 1
  selector:
  matchLabels:
    app: project-name
  strategy: {}
  template:
  metadata:
    labels:
      app: project-name
  spec:
  			# tcr 이미지 repository 경로 작성, tag 부분은 젠킨스 파이프라인에 의해 업데이트 됨
    containers:
      - image: ow-tcr.tencentcloudcr.com/tcr-namespace-name/image-repository-name:tag
        name: project-name
        resources: {}
        ports:
          - containerPort: 8001
  			# 클러스터에 미리 생성해둔 자격 증명 사용
    imagePullSecrets:
      - name: secret-name
  status: {}
  ---

  apiVersion: v1
  kind: Service
  metadata:
  name: project-name-service
  spec:
  ports:

  - port: 80
    targetPort: 8001
    selector:
    app: project-name
    type: NodePort
  ```

## CI/CD Flow

#### Jenkins VM

1. Jenkins에서 VERSION 파라미터 입력하여 deploy 파이프라인 실행
2. GitHub 프로젝트 Repository에 있는 Jenkins 스크립트 실행
   1. 프로젝트 Repository 클론
   2. /var/jenkins_home/env/${project} 경로에 있는 env 파일의 VERSION 값을 파라미터 값으로 업데이트
   3. /var/jenkins_home/env/${project} 경로에 있는 env 파일을 현재 폴더 (프로젝트 루트 폴더)로 복사
   4. NODE_ENV 값을 인자로 도커 이미지 빌드
   5. VERSION 파라미터 값을 이미지 태그로 지정하여 TCR에 이미지 푸시
   6. update-manifest 파이프라인을 VERSION과 BUILDER 파라미터를 넣어 실행
3. Jenkins 서버에서 update-manifest 파이프라인 실행
4. GitHub Deploy Repository의 해당 프로젝트 폴더 안에 있는 Jenkins 스크립트 실행
   1. Deploy Repository 클론
   2. deployment.yaml 파일 안에 이미지의 태그 부분을 VERSION 파라미터 값으로 업데이트
   3. history.txt 파일 안에 로그 입력
   4. 변경 사항 커밋 후 푸시

#### ArgoCD In TKE

1. 젠킨스에서 빌드한 프로젝트에 해당하는 ArgoCD 어플리케이션 Sync 업데이트
2. 어플리케이션에 연동된 GitHub Repository와 Path 경로의 메니페스트 파일 변동 사항 추적
3. deployment.yaml 파일 안에 이미지 태그(버전) 값이 업데이트 됐기 때문에 클러스터에 메니페스트 apply
   - Deployment 오브젝트 정보에 따라 TCR에서 업데이트된 image를 pull 받아와서 배포 실행
