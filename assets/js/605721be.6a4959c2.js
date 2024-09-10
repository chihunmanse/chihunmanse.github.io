"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[245],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),y=r,u=c["".concat(p,".").concat(y)]||c[y]||g[y]||l;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(8168),r=(t(6540),t(5680));const l={title:"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",description:"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",keywords:["AWS","EKS","TencentCloud","TKE","Jenkins","ArgoCD"],tags:["DevOps","Kubernetes","AWS","EKS","Jenkins","ArgoCD"],sidebar_position:1},o="AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",i={unversionedId:"devops/kubernetes/tencent-tke-migration",id:"devops/kubernetes/tencent-tke-migration",title:"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",description:"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",source:"@site/docs/03-devops/03-kubernetes/01-tencent-tke-migration.md",sourceDirName:"03-devops/03-kubernetes",slug:"/devops/kubernetes/tencent-tke-migration",permalink:"/devops/kubernetes/tencent-tke-migration",draft:!1,tags:[{label:"DevOps",permalink:"/tags/dev-ops"},{label:"Kubernetes",permalink:"/tags/kubernetes"},{label:"AWS",permalink:"/tags/aws"},{label:"EKS",permalink:"/tags/eks"},{label:"Jenkins",permalink:"/tags/jenkins"},{label:"ArgoCD",permalink:"/tags/argo-cd"}],version:"current",sidebarPosition:1,frontMatter:{title:"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",description:"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30",keywords:["AWS","EKS","TencentCloud","TKE","Jenkins","ArgoCD"],tags:["DevOps","Kubernetes","AWS","EKS","Jenkins","ArgoCD"],sidebar_position:1},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/devops/kubernetes/"},next:{title:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc6cc\ucee4\ub178\ub4dc \ub514\uc2a4\ud06c \uad00\ub9ac\ud558\uae30",permalink:"/devops/kubernetes/garbage-collection"}},p={},s=[{value:"TCR \uc138\ud305 (Tencent Container Registry)",id:"tcr-\uc138\ud305-tencent-container-registry",level:2},{value:"\uc820\ud0a8\uc2a4 \uc11c\ubc84 \uc138\ud305",id:"\uc820\ud0a8\uc2a4-\uc11c\ubc84-\uc138\ud305",level:2},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3},{value:"\uc820\ud0a8\uc2a4 \ud30c\uc774\ud504\ub77c\uc778 \uc138\ud305",id:"\uc820\ud0a8\uc2a4-\ud30c\uc774\ud504\ub77c\uc778-\uc138\ud305",level:2},{value:"ArgoCD \uc124\uce58",id:"argocd-\uc124\uce58",level:2},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc-1",level:3},{value:"ArgoCD \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc138\ud305",id:"argocd-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uc138\ud305",level:2},{value:"CI/CD Flow",id:"cicd-flow",level:2},{value:"Jenkins VM",id:"jenkins-vm",level:3},{value:"ArgoCD In TKE",id:"argocd-in-tke",level:3}],m={toc:s},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"aws-eks\ub97c-tencentcloud\uc758-tke\ub85c-\ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30"},"AWS EKS\ub97c TencentCloud\uc758 TKE\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uae30"),(0,r.yg)("h2",{id:"tcr-\uc138\ud305-tencent-container-registry"},"TCR \uc138\ud305 (Tencent Container Registry)"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Access Credential \ud0ed\uc5d0\uc11c \uc678\ubd80\uc5d0\uc11c \uc811\uc18d\ud560 \uc218 \uc788\ub294 \uc5b4\uce74\uc6b4\ud2b8\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,r.yg)("li",{parentName:"ol"},"\ud544\uc694\ud55c Image Repository\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,r.yg)("li",{parentName:"ol"},"Network ACL \ud0ed\uc5d0\uc11c \uc678\ubd80\uc5d0\uc11c \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d Public network\ub97c \uc124\uc815\ud55c\ub2e4.")),(0,r.yg)("h2",{id:"\uc820\ud0a8\uc2a4-\uc11c\ubc84-\uc138\ud305"},"\uc820\ud0a8\uc2a4 \uc11c\ubc84 \uc138\ud305"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\uc820\ud0a8\uc2a4 \uc11c\ubc84\ub85c \uc0ac\uc6a9\ud560 VM \uc778\ubc14\uc6b4\ub4dc \uaddc\uce59\uc5d0\uc11c 8080 \ud3ec\ud2b8\ub97c \ud5c8\uc6a9\ud55c\ub2e4."),(0,r.yg)("li",{parentName:"ol"},"VM \uc138\ud305",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\ub3c4\ucee4 \uc124\uce58"),(0,r.yg)("li",{parentName:"ol"},"\uc820\ud0a8\uc2a4 \uc774\ubbf8\uc9c0 pull",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"docker pull jenkins/jenkins:latest\n"))),(0,r.yg)("li",{parentName:"ol"},"\uc820\ud0a8\uc2a4 \ucee8\ud14c\uc774\ub108 \uc2e4\ud589",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"docker run -d --name jenkins --restart=on-failure \\\n-p 8080:8080 \\\n-v /var/jenkins_home:/var/jenkins_home \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n-e TZ=Asia/Seoul \\\n-u root \\\njenkins/jenkins:latest\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"--restart=on-failure : on-failure \uc635\uc158\uc740 \ube44\uc815\uc0c1 \uc885\ub8cc\uc2dc \ucee8\ud14c\uc774\ub108\ub97c \uc7ac\uc2e4\ud589\ud55c\ub2e4."),(0,r.yg)("li",{parentName:"ul"},"-p 8080:8080 : \uc678\ubd80 \uc811\uc18d\uc744 \uc704\ud574 \ud638\uc2a4\ud2b8\uc758 8080 \ud3ec\ud2b8\ub97c \ubc14\uc778\ub529"),(0,r.yg)("li",{parentName:"ul"},"-v /var/jenkins_home:/var/jenkins_home : \ud638\uc2a4\ud2b8\uc758 var/jenkins \ub514\ub809\ud1a0\ub9ac\ub97c \ud638\uc2a4\ud2b8 \ubcfc\ub968\uc73c\ub85c \uc124\uc815\ud558\uc5ec jenkins \ucee8\ud14c\uc774\ub108\uc758 home \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub9c8\uc6b4\ud2b8"),(0,r.yg)("li",{parentName:"ul"},"-v /var/run/docker.sock:/var/run/docker.sock : docker.sock \ud30c\uc77c\uc740 \ub3c4\ucee4 \ub370\ubaac\uacfc \ud1b5\uc2e0\ud560 \uc218 \uc788\ub294 \uc18c\ucf13 \ud30c\uc77c\ub85c, \ud574\ub2f9 \ud30c\uc77c\uc744 \ucee8\ud14c\uc774\ub108\uc5d0 \ub9c8\uc6b4\ud2b8\uc2dc\ucf1c\uc11c \ub3c4\ucee4 \uba85\ub839\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uac8c \ud574\uc900\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc744 dood(docker out of docker)\ub77c\uace0 \ud55c\ub2e4."))),(0,r.yg)("li",{parentName:"ol"},"\ucd08\uae30 \ube44\ubc00\ubc88\ud638 \uc870\ud68c",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\ucd08\uae30 \ube44\ubc00\ubc88\ud638\ub294 /var/jenkins_home/secretes/initialAdminPassword\uc5d0 \uc800\uc7a5 \ub428",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"cat /var/jenkins_home/secrets/initialAdminPassword\n"))))))),(0,r.yg)("li",{parentName:"ol"},"\uc820\ud0a8\uc2a4 \ucee8\ud14c\uc774\ub108\uc5d0 \uc811\uc18d\ud558\uc5ec docker CLI \uc124\uce58",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"docker exec -it jenkins bash\napt-get update && apt-get install -y curl\ncurl -fsSL https://get.docker.com -o get-docker.sh\nsh get-docker.sh\n")))),(0,r.yg)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=isc0304&logNo=222274955992"},"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \uc548\uc5d0\uc11c \ub3c4\ucee4 \uc2e4\ud589\ud558\uae30")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://seosh817.tistory.com/287#google_vignette"},"Jenkins \uc124\uce58")),(0,r.yg)("h2",{id:"\uc820\ud0a8\uc2a4-\ud30c\uc774\ud504\ub77c\uc778-\uc138\ud305"},"\uc820\ud0a8\uc2a4 \ud30c\uc774\ud504\ub77c\uc778 \uc138\ud305"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Credentials \uc0dd\uc131"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"TCR \uc811\uc18d\uc744 \uc704\ud55c Credentials \uc0dd\uc131 (TCR\uc5d0\uc11c \uc0dd\uc131\ud588\ub358 \uc5b4\uce74\uc6b4\ud2b8 \uc815\ubcf4 \uc785\ub825)"),(0,r.yg)("li",{parentName:"ul"},"GitHub \uc811\uc18d\uc744 \uc704\ud55c Credentials \uc0dd\uc131"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\uac01 \ud504\ub85c\uc81d\ud2b8 GitHub Repository \uc548\uc5d0 \uc820\ud0a8\uc2a4 \uc2a4\ud06c\ub9bd\ud2b8 \uc0dd\uc131"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},'   node {\n    def app\n    def project = "project-name"\n    def builder = "${currentBuild.getBuildCauses()[0].shortDescription} / ${currentBuild.getBuildCauses()[0].userId}"\n    echo "PROJECT: ${project}"\n    echo "BUILDER: ${builder}"\n    echo "VERSION: ${env.VERSION}"\n\n    stage(\'Clone repository\') {\n        checkout scm\n    }\n\n    // \uc820\ud0a8\uc2a4 \ucee8\ud14c\uc774\ub108 \uc2e4\ud589\uc2dc \ud638\uc2a4\ud2b8\uc758 /var/jenkins_home\uacfc \ub9c8\uc6b4\ud2b8 \uc2dc\ucf30\uae30 \ub54c\ubb38\uc5d0 env \ud30c\uc77c \uacbd\ub85c \ub3d9\uc77c\ud568 - env \ud30c\uc77c\uc740 jenkins VM \uc548\uc5d0\uc11c \uad00\ub9ac\n    stage(\'Build image\') {\n        String currentDirectory = pwd()\n        sh "sed -i \'s+VERSION=.*+VERSION=${env.VERSION}+g\' /var/jenkins_home/env/${project}/env.dev"\n        sh "echo current directory = ${currentDirectory}"\n        sh "cp /var/jenkins_home/env/${project}/env.dev ${currentDirectory}/"\n        // \uc774\ubbf8\uc9c0 \ube4c\ub4dc - \ub3c4\ucee4\ud30c\uc77c\uc5d0\uc11c NODE_ENV \uc778\uc790\ub85c \uc0ac\uc6a9\n      app = docker.build("ow-tcr.tencentcloudcr.com/tcr-namespace-name/image-repository-name", "--build-arg NODE_ENV=dev .")\n    }\n\n    stage(\'Push image\') {\n        // \uc820\ud0a8\uc2a4\uc5d0 \uc124\uc815\ud574\ub454 Credential\uc744 \ud1b5\ud574 TCR\uc5d0 env.VERSION\uc744 \ud0dc\uadf8\ub85c \uc774\ubbf8\uc9c0 \ud478\uc2dc\n        docker.withRegistry(\'http://ow-tcr.tencentcloudcr.com\', \'credential-id\') {\n            app.push("${env.VERSION}")\n        }\n    }\n\n    // update-manifest \ud30c\uc774\ud504\ub77c\uc778 \uc2e4\ud589\n    stage(\'Trigger ManifestUpdate\') {\n        echo "triggering update-manifest job"\n        build job: \'update-manifest\', parameters: [string(name: \'VERSION\', value: env.VERSION), string(name: \'BUILDER\', value: builder)]\n    }\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\ud504\ub85c\uc81d\ud2b8 \ubcc4 \uc820\ud0a8\uc2a4 deploy \ud30c\uc774\ud504\ub77c\uc778 \uc0dd\uc131"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\ud30c\ub77c\ubbf8\ud130 \uc124\uc815",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"VERSION - \uc774\ubbf8\uc9c0 \ud0dc\uadf8\uac12\uc73c\ub85c \uc0ac\uc6a9"))),(0,r.yg)("li",{parentName:"ul"},"SCM \ud30c\uc774\ud504\ub77c\uc778 \uc124\uc815",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8 Repository \uc5f0\uacb0"),(0,r.yg)("li",{parentName:"ul"},"GitHub Credentials \uc5f0\uacb0"),(0,r.yg)("li",{parentName:"ul"},"\ube0c\ub79c\uce58 \uc124\uc815"),(0,r.yg)("li",{parentName:"ul"},"Repository \uc548\uc5d0 \uc0dd\uc131\ud574\ub450\uc5c8\ub358 \uc820\ud0a8\uc2a4 \uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c \uacbd\ub85c \uc785\ub825"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"manifest Repository\uc5d0 \ud504\ub85c\uc81d\ud2b8 \ubcc4 \uc820\ud0a8\uc2a4 \uc2a4\ud06c\ub9bd\ud2b8 \uc791\uc131"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},'import java.text.DateFormat;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\nimport java.util.TimeZone;\n\nnode {\n    def app\n    echo "BUILDER: ${env.BUILDER}"\n    echo "VERSION: ${env.VERSION}"\n    def TARGET = "image-repository-name"\n\n    stage(\'Clone repository\') {\n        checkout scm\n    }\n\n    stage(\'Update GIT\') {\n        script {\n            try {\n                def date = new Date()\n                def dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss (z Z)")\n                def time = TimeZone.getTimeZone("Asia/Seoul")\n                dateFormat.setTimeZone(time)\n                today = dateFormat.format(date)\n                echo today\n\n                                // deploy repository\uc758 deployment.yaml \ud30c\uc77c\uc758 \uc774\ubbf8\uc9c0 \ud0dc\uadf8(\ubc84\uc804)\uac12, history.text \ud30c\uc77c\uc5d0 \ub85c\uadf8 \uc5c5\ub370\uc774\ud2b8\n                withCredentials([usernamePassword(credentialsId: \'jenkins-github-credential-id\', passwordVariable: \'GIT_PASSWORD\', usernameVariable: \'GIT_USERNAME\')]) {\n                    sh "git config user.email github@email"\n                    sh "git config user.name github-user-name"\n                    sh "cat \'./${TARGET}/deployment.yaml\'"\n                    sh "sed -i \'s+${TARGET}:.*+${TARGET}:${VERSION}+g\' \'./${TARGET}/deployment.yaml\'"\n                    sh "cat \'./${TARGET}/deployment.yaml\'"\n                    sh "echo \'TIMESTAMP: ${today}, VERSION: ${VERSION}, BUILD_NUMBER: ${env.BUILD_NUMBER}, BUILDER: ${BUILDER}\' >> \'./${TARGET}/history.txt\'"\n                    sh "git add ."\n                    sh "git commit -m \'Deploy Complete [${TARGET}]: ${env.BUILD_NUMBER}\'"\n                                        // \uc544\ub798 \ubd80\ubd84 \ub54c\ubb38\uc5d0 credential\uc758 \uc774\ub984\uc774 \uc774\uba54\uc77c \uc8fc\uc18c\uac00 \uc544\ub2cc ID\uac00 \ub418\uc5b4\uc57c \ud568\n                    sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/manifest-repository.git HEAD:master"\n                }\n            } catch (err) {\n                def errMsg = err.toString()\n                echo errMsg\n                throw err\n            }\n        }\n    }\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\ud504\ub85c\uc81d\ud2b8 \ubcc4 \uc820\ud0a8\uc2a4 update-manifest \ud30c\uc774\ud504\ub77c\uc778 \uc0dd\uc131"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\ud30c\ub77c\ubbf8\ud130 \uc124\uc815",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"VERSION - deploy \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc778\uc790\ub85c \uc804\ub2ec \ubc1b\uc74c"),(0,r.yg)("li",{parentName:"ul"},"BUILDER - deploy \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc778\uc790\ub85c \uc804\ub2ec \ubc1b\uc74c"))),(0,r.yg)("li",{parentName:"ul"},"SCM \ud30c\uc774\ud504\ub77c\uc778 \uc124\uc815",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"manifest Repository \uc5f0\uacb0"),(0,r.yg)("li",{parentName:"ul"},"GitHub Credentials \uc5f0\uacb0"),(0,r.yg)("li",{parentName:"ul"},"\ube0c\ub79c\uce58 \uc124\uc815"),(0,r.yg)("li",{parentName:"ul"},"Repository \uc548\uc5d0 \uc788\ub294 \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc758 \uc820\ud0a8\uc2a4 \uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c \uacbd\ub85c \uc124\uc815")))))),(0,r.yg)("h2",{id:"argocd-\uc124\uce58"},"ArgoCD \uc124\uce58"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"TKE \ud074\ub7ec\uc2a4\ud130 API \uc11c\ubc84 \uc811\uc18d \uc124\uc815",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\ud074\ub7ec\uc2a4\ud130 API \uc11c\ubc84\uc5d0 Jenkins VM(Jenkins VM\uc5d0 kubectl \uc124\uce58 \uc608\uc815)\uc774 \uc811\uc18d\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815 \ubc0f Private network \ud65c\uc131\ud654"),(0,r.yg)("li",{parentName:"ul"},"KubeConfig \ud30c\uc77c \ubcf5\uc0ac"))),(0,r.yg)("li",{parentName:"ol"},"\uc820\ud0a8\uc2a4 VM \uc811\uc18d \ud6c4 Kubectl \uc124\uce58",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"kubectl \ubc14\uc774\ub108\ub9ac \uc124\uce58",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n'))),(0,r.yg)("li",{parentName:"ul"},"kubectl \uc124\uce58",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n"))),(0,r.yg)("li",{parentName:"ul"},"~/.kube/config \ud30c\uc77c\uc5d0 TKE KubeConfig \ub0b4\uc6a9 \ubd99\uc5ec\ub123\uae30"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"kubectl get node")," \ub4f1\uc758 \uba85\ub839\uc5b4\ub85c \uc5f0\uacb0 \ud655\uc778"))),(0,r.yg)("li",{parentName:"ol"},"ArgoCD \uc124\uce58",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\ub124\uc784\uc2a4\ud398\uc774\uc2a4 \uc0dd\uc131",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"kubectl create namespace argocd\n"))),(0,r.yg)("li",{parentName:"ul"},"ArgoCD \uc124\uce58",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n"))),(0,r.yg)("li",{parentName:"ul"},"ArgoCD \uc11c\ubc84 UI\uc5d0 \uc811\uc18d\ud558\uae30 \uc704\ud574 LoadBalancer Service\ub85c \uc218\uc815",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'kubectl patch svc argocd-server -n argocd -p \'{"spec": {"type": "LoadBalancer"}}\'\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"kubectl get svc argocd-server -n argocd\n"))),(0,r.yg)("li",{parentName:"ul"},"\ucd08\uae30 \ube44\ubc00\ubc88\ud638 \uc870\ud68c",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d\n'))))),(0,r.yg)("li",{parentName:"ol"},"kubectl\uc744 \ud1b5\ud574 \ud074\ub7ec\uc2a4\ud130\uc5d0 TCR \uc790\uaca9 \uc99d\uba85 \uc0dd\uba85",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"kubectl create secret docker-registry secret-name \\\n  --docker-server=ow-tcr.tencentcloudcr.com \\\n  --docker-username=tcr-user-name \\\n  --docker-password=tcr-user-password \\\n  --docker-email=tencent-account-email\n")))),(0,r.yg)("h3",{id:"\ucc38\uace0-\uc790\ub8cc-1"},"\ucc38\uace0 \uc790\ub8cc"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/"},"\ub9ac\ub205\uc2a4\uc5d0 kubectl \uc124\uce58 \ubc0f \uc124\uc815")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/tasks/configure-pod-container/pull-image-private-registry/"},"\ud504\ub77c\uc774\ube57 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ubc1b\uc544\uc624\uae30")),(0,r.yg)("h2",{id:"argocd-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uc138\ud305"},"ArgoCD \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc138\ud305"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Settings \ud0ed\uc5d0\uc11c manifest Repository \uc5f0\uacb0"),(0,r.yg)("li",{parentName:"ol"},"\ud504\ub85c\uc81d\ud2b8 \ubcc4 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc0dd\uc131",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"manifest Repository\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud574\ub2f9\ud558\ub294 \ud3f4\ub354 \uacbd\ub85c\ub85c \uc124\uc815\ud558\uc5ec \uc0dd\uc131"))),(0,r.yg)("li",{parentName:"ol"},"manifest Repository\uc5d0 \ud504\ub85c\uc81d\ud2b8 \ubcc4 deployment.yaml \uc791\uc131",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: project-name\n  name: project-name\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: project-name\n  strategy: {}\n  template:\n    metadata:\n      labels:\n        app: project-name\n    spec:\n            # tcr \uc774\ubbf8\uc9c0 repository \uacbd\ub85c \uc791\uc131, tag \ubd80\ubd84\uc740 \uc820\ud0a8\uc2a4 \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \uc758\ud574 \uc5c5\ub370\uc774\ud2b8 \ub428\n      containers:\n        - image: ow-tcr.tencentcloudcr.com/tcr-namespace-name/image-repository-name:tag\n          name: project-name\n          resources: {}\n          ports:\n            - containerPort: 8001\n            # \ud074\ub7ec\uc2a4\ud130\uc5d0 \ubbf8\ub9ac \uc0dd\uc131\ud574\ub454 \uc790\uaca9 \uc99d\uba85 \uc0ac\uc6a9\n      imagePullSecrets:\n        - name: secret-name\nstatus: {}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: project-name-service\nspec:\n  ports:\n    - port: 80\n      targetPort: 8001\n  selector:\n    app: project-name\n  type: NodePort\n")))),(0,r.yg)("h2",{id:"cicd-flow"},"CI/CD Flow"),(0,r.yg)("h3",{id:"jenkins-vm"},"Jenkins VM"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Jenkins\uc5d0\uc11c VERSION \ud30c\ub77c\ubbf8\ud130 \uc785\ub825\ud558\uc5ec deploy \ud30c\uc774\ud504\ub77c\uc778 \uc2e4\ud589"),(0,r.yg)("li",{parentName:"ol"},"GitHub \ud504\ub85c\uc81d\ud2b8 Repository\uc5d0 \uc788\ub294 Jenkins \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\ud504\ub85c\uc81d\ud2b8 Repository \ud074\ub860"),(0,r.yg)("li",{parentName:"ol"},"/var/jenkins_home/env/${project} \uacbd\ub85c\uc5d0 \uc788\ub294 env \ud30c\uc77c\uc758 VERSION \uac12\uc744 \ud30c\ub77c\ubbf8\ud130 \uac12\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8"),(0,r.yg)("li",{parentName:"ol"},"/var/jenkins_home/env/${project} \uacbd\ub85c\uc5d0 \uc788\ub294 env \ud30c\uc77c\uc744 \ud604\uc7ac \ud3f4\ub354 (\ud504\ub85c\uc81d\ud2b8 \ub8e8\ud2b8 \ud3f4\ub354)\ub85c \ubcf5\uc0ac"),(0,r.yg)("li",{parentName:"ol"},"NODE_ENV \uac12\uc744 \uc778\uc790\ub85c \ub3c4\ucee4 \uc774\ubbf8\uc9c0 \ube4c\ub4dc"),(0,r.yg)("li",{parentName:"ol"},"VERSION \ud30c\ub77c\ubbf8\ud130 \uac12\uc744 \uc774\ubbf8\uc9c0 \ud0dc\uadf8\ub85c \uc9c0\uc815\ud558\uc5ec TCR\uc5d0 \uc774\ubbf8\uc9c0 \ud478\uc2dc"),(0,r.yg)("li",{parentName:"ol"},"update-manifest \ud30c\uc774\ud504\ub77c\uc778\uc744 VERSION\uacfc BUILDER \ud30c\ub77c\ubbf8\ud130\ub97c \ub123\uc5b4 \uc2e4\ud589"))),(0,r.yg)("li",{parentName:"ol"},"Jenkins \uc11c\ubc84\uc5d0\uc11c update-manifest \ud30c\uc774\ud504\ub77c\uc778 \uc2e4\ud589"),(0,r.yg)("li",{parentName:"ol"},"manifest Repository\uc758 \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8 \ud3f4\ub354 \uc548\uc5d0 \uc788\ub294 Jenkins \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"manifest Repository \ud074\ub860"),(0,r.yg)("li",{parentName:"ol"},"deployment.yaml \ud30c\uc77c \uc548\uc5d0 \uc774\ubbf8\uc9c0\uc758 \ud0dc\uadf8 \ubd80\ubd84\uc744 VERSION \ud30c\ub77c\ubbf8\ud130 \uac12\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8"),(0,r.yg)("li",{parentName:"ol"},"history.txt \ud30c\uc77c \uc548\uc5d0 \ub85c\uadf8 \uc785\ub825"),(0,r.yg)("li",{parentName:"ol"},"\ubcc0\uacbd \uc0ac\ud56d \ucee4\ubc0b \ud6c4 \ud478\uc2dc")))),(0,r.yg)("h3",{id:"argocd-in-tke"},"ArgoCD In TKE"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\uc820\ud0a8\uc2a4\uc5d0\uc11c \ube4c\ub4dc\ud55c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud574\ub2f9\ud558\ub294 ArgoCD \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 Sync \uc5c5\ub370\uc774\ud2b8"),(0,r.yg)("li",{parentName:"ol"},"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\ub3d9\ub41c GitHub Repository\uc640 Path \uacbd\ub85c\uc758 manifest \ud30c\uc77c \ubcc0\ub3d9 \uc0ac\ud56d \ucd94\uc801"),(0,r.yg)("li",{parentName:"ol"},"deployment.yaml \ud30c\uc77c \uc548\uc5d0 \uc774\ubbf8\uc9c0 \ud0dc\uadf8(\ubc84\uc804) \uac12\uc774 \uc5c5\ub370\uc774\ud2b8 \ub410\uae30 \ub54c\ubb38\uc5d0 \ud074\ub7ec\uc2a4\ud130\uc5d0 manifest apply",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Deployment \uc624\ube0c\uc81d\ud2b8 \uc815\ubcf4\uc5d0 \ub530\ub77c TCR\uc5d0\uc11c \uc5c5\ub370\uc774\ud2b8\ub41c image\ub97c pull \ubc1b\uc544\uc640\uc11c \ubc30\ud3ec \uc2e4\ud589")))))}g.isMDXComponent=!0}}]);