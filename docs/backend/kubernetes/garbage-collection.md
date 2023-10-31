---
title: 워커노드 디스크 관리하기
description: 워커노드 디스크 관리하기
keywords: [docker, container, kubernetes, garbage-collection]
sidebar_position: 1
---

# 워커노드 디스크 관리하기

최근 젠킨스 서버의 디스크 용량이 그동안 쌓인 도커 이미지 및 빌드 캐시 데이터들로 가득 차서 젠킨스에서 빌드가 제대로 되지 않는 문제를 겪었다.

해당 문제를 겪고 나서, 현재 사용 중인 텐센트 클라우드 TKE 클러스터의 워커 노드들의 디스크 용량도 확인해보았다. 

현재 서비스에서는 2개의 워커노드를 사용하고 있는데 그 중 하나의 노드 디스크 용량이 81% 가량 차 있었다. 자세한 사용량을 파악하기 위해 해당 워커노드에 접속하여 `df-h` 명령어를 실행해보았다.

![dfh](https://p.ipic.vip/d1deym.png)

77GB를 사용하고 있는 경로가 `/run/containerd/io.containerd.runtime.v2.task/k8s.io/` 인 것을 봤을 때, 젠킨스 서버와 마찬가지로 이미지 및 컨테이너 데이터가 많은 용량을 차지하고 있다는 것을 추측할 수 있었다.

여기서 많은 용량을 차지하고 있는 디렉토리의 경로가 `/var/lib/docker/overlay2/` 가 아닌 `/run/containerd/io.containerd.runtime.v2.task/k8s.io/` 인 이유는 [쿠버네티스에서는 1.24 버전부터 컨테이너 런타임으로 Dockershim이 아닌 containerd를 사용하기 때문이다.](https://kubernetes.io/ko/docs/setup/production-environment/container-runtimes)

쿠버네티스가 Docker 지원을 중단하고 containerd를 사용하게 된 이유와 맥락은 [이 글](https://www.linkedin.com/pulse/containerd%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%99%9C-%EC%A4%91%EC%9A%94%ED%95%A0%EA%B9%8C-sean-lee/?originalSubdomain=kr)에 잘 설명되어있다.

워커노드에서는 containerd를 사용하고 있기 때문에, 만약 해당 VM에 접속해서 직접 커맨드를 실행하여 사용하지 않는 이미지 및 컨테이너 데이터를 제거하려면 docker cli가 아닌 ctr 혹은 nerdctl cli를 사용해야만 한다.

ctr cli를 통해 접속 중인 워커노드의 이미지를 조회하려면 k8s.io 네임스페이스의 이미지를 조회하여야 한다.

```shell
# ctr namespaces ls 
NAME   LABELS
k8s.io

# ctr -n k8s.io images ls 실행
```

## Kubernetes Garbage Collection