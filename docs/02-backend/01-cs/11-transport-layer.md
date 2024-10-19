---
title: 네트워크 전송 계층
tags: [BackEnd, CS, Network, TCP, UDP]
sidebar_position: 11
---

# 네트워크 전송 계층

### IP의 한계

- 신뢰할 수 없는 통신

  IP 프로토콜은 패킷이 수신지까지 제대로 전송되었다는 보장을 하지 않는다. 이는 통신 과정에서 패킷의 데이터가 손상되거나 중복된 패킷이 전송되었더라도 이를 확인하지 않고, 재전송도 하지 않으며, 순서대로 패킷이 도착할 것이라는 보장도 하지 않는다는 의미이다.

- 비연결형 통신

  송수신 호스트 간에 사전 연결 수립 작업을 거치지 않는다.

IP가 이런 방식의 통신을 하는 주요한 이유는 성능 때문이다. 모든 패킷이 제대로 전송되었는지 확인하고, 호스트 간에 연결을 수립하는 작업은 일반적으로 패킷의 빠른 송수신과는 배치되는 작업이다. 인터넷상에서 돌아다니는 패킷의 종류와 개수는 매우 다양하다. 그중에는 금융 서비스처럼 반드시 신뢰성 있는 전송을 보장해야 하는 경우도 있지만, 동영상 스트리밍 서비스나 실시간 영상 통화처럼 한 두 개의 패킷 손실은 감수하더라도 빠른 전송이 우선시되는 경우도 있다. 이처럼 신뢰성 있는 전송이 모든 경우에 필요한 것은 아니다.

전송 계층은 신뢰할 수 있는 연결형 통신이 가능한 프로토콜(TCP)을 제공하기에 네트워크 계층의 한계를 보완할 수 있고, 포트를 통해 응용 계층의 애플리케이션을 식별함으로써 응용 계층과의 연결 다리 역할을 수행한다.

## 포트 (Port)

패킷이 수신지 호스트의 주소까지 전달했다고 해서 전송이 끝난 것이 아니고, 실행 중인 특정 애플리케이션 프로세스까지 전달되어야 한다. 결국 패킷의 최종 수신 대상은 특정 애플리케이션 프로세스이다. 패킷이 실행 중인 특정 애플리케이션까지 전달되려면 패킷에 특정 애플리케이션을 식별할 수 있는 정보가 포함되어 있어야 한다. 이러한 정보를 포트라고 한다.

### 포트 번호

전송 계층에서는 포트 번호를 통해 특정 애플리케이션을 식별한다. 전송 계층의 핵심 프로토콜인 TCP와 UDP는 모두 포트 번호 필드인 송신지 포트 번호와 수신지 포트 번호를 포함한다. 포트 번호는 16비트로 표현 가능하며, 사용 가능한 포트의 수는 2^16(65536)개이다. 할당 가능한 포트 번호는 0번부터 65535번까지, 총 65536개가 존재한다.

| 포트 종류      | 포트 번호 범위 |
| -------------- | -------------- |
| 잘 알려진 포트 | 0 - 1023       |
| 등록된 포트    | 1024 - 49151   |
| 동적 포트      | 49152 - 65535  |

0번부터 1023번까지의 포트 번호는 잘 알려진 포트이다. 잘 알려진 포트는 범용적으로 사용되는 애플리케이션 프로토콜이 일반적으로 사용하는 포트 번호를 의미한다.

| 포트 번호 | 설명   |
| --------- | ------ |
| 20, 21    | FTP    |
| 22        | SSH    |
| 23        | TELNET |
| 53        | DNS    |
| 67, 68    | DHCP   |
| 80        | HTTP   |
| 443       | HTTPS  |

1024번부터 49151번까지는 등록된 포트 번호이다. 잘 알려진 포트에 비해서는 덜 범용적이지만, 흔히 사용되는 애플리케이션 프로토콜에 할당하기 위해 사용된다.

| 포트 번호 | 설명                              |
| --------- | --------------------------------- |
| 1194      | OpenVPN                           |
| 1433      | Microsoft SQL Server 데이터베이스 |
| 3306      | MySQL 데이터베이스                |
| 6379      | Redis                             |
| 8080      | HTTP 대체                         |

잘 알려진 포트와 등록된 포트는 인터넷 할당 번호 관리 기관(IANA)이라는 국제 단체에 의해 할당되어 있다.

49152번부터 65535번까지는 동적 포트, 사설 포트, 임시 포트라고 부른다. 인터넷 할당 번호 관리 기관에 의해 할당된 애플리케이션 프로토콜이 없고, 특별히 관리되지 않는 포트 번호인 만큼 자유롭게 사용할 수 있다.

### 포트 기반 NAT

NAT란 IP 주소를 변환하는 기술이며, 주로 네트워크 내부에서 사용되는 사설 IP 주소와 네트워크 외부에서 사용되는 공인 IP 주소를 변환하는 데 사용된다. NAT 테이블에서 사설 IP 주소와 공인 IP 주소를 일대일로 대응하여 사용하게 되면 네트워크 내부에서 사용되는 사설 IP 주소의 수만큼 공인 IP 주소가 필요하기 때문에 변환에 문제가 생긴다.

#### NAPT (Network Address Port Translation)

포트 기반의 NAT를 NAPT라 한다. APT(Address Port Translation)라고 부르기도 한다. NAPT는 포트를 활용해 하나의 공인 IP 주소를 여러 사설 IP 주소가 공유할 수 있도록 하는 NAT의 일종이다.

| 네트워크 외부 | 네트워크 내부    |
| ------------- | ---------------- |
| 1.2.3.4:6200  | 192.168.0.5:1025 |
| 1.2.3.4:6201  | 192.168.0.5:1026 |
| ...           | ...              |

위처럼 네트워크 외부에서 사용할 IP 주소가 같더라도 포트 번호가 다르면 네트워크 내부의 호스트를 특정할 수 있기 때문에, 다수의 사설 IP 주소를 그보다 적은 수의 공인 IP 주소로 변환할 수 있게 된다. 즉, NAPT를 이용하면 네트워크 내부에서 사용할 IP 주소와 네트워크 외부에서 사용할 IP 주소를 N:1로 관리할 수 있다.

#### 포트 포워딩 (Port Forwarding)

포트 포워딩이란 네트워크 내 특정 호스트에 IP 주소와 포트 번호를 미리 할당하고, 해당 IP주소:포트 번호로써 해당 호스트에게 패킷을 전달하는 기능이다. 네트워크 내부의 여러 호스트가 공인 IP 주소를 공유하는 상황에서, 처음 패킷을 보내는 네트워크 외부 호스트 입장에서는 어떤 IP 주소(및 포트)를 수신지 주소로 삼을지 결정하기 어려울 수 있다. 이때 주로 사용되는 것이 포트 포워딩이다. 포트 포워딩은 주로 네트워크 외부에서 내트워크 내부로 통신을 시작할 때, 네트워크 내부의 서버를 외부에서 접속할 수 있도록 접속 정보를 공개하기 위해 자주 사용된다.

## TCP (Transmission Control Protocol)

TCP는 신뢰할 수 있는 통신을 위한 연결형 프로토콜이다.

### TCP 통신 단계와 세그먼트 구조

TCP는 통신(데이터 송수신)하기 전에 연결을 수립하고 통신이 끝나면 연결을 종료한다. 그리고 데이터 송수신 과정에서 재전송을 통한 오류 제어, 흐름 제어, 혼잡 제어 등의 기능을 제공한다.

#### MSS (Maximum Sement Size)

MSS는 TCP로 전송할 수 있는 최대 페이로드 크기를 의미한다. MSS의 크기를 고려할 때 TCP 헤더 크기는 제외한다. 헤더의 크기까지 포함했던 IP의 MTU 단위와는 대조적이다.

#### TCP 세그먼트

![tcp](https://csnote.net/assets/img/net/tcp.png)

- 송신지 포트와 수신지 포트 : 송수신지의 포트 번호가 담긴다.
- 순서 번호 (Sequence Number) : 순서 번호란 송수신되는 세그먼트의 올바른 순서를 보장하기 위해 세그먼트 데이터의 첫 바이트에 부여되는 번호이다.
- 확인 응답 번호 (Acknowledgment Number) : 상대 호스트가 보낸 세그먼트에 대한 응답으로, 다음으로 수신하기를 기대하는 순서 번호가 명시된다.
- 제어 비트 (Control Bits) : 플래그 비트라고도 부르며, 현재 세그먼트에 대한 부가 정보를 나타낸다.
- 윈도우 (Window) : 수신 윈도우의 크기가 명시된다. 수신 윈도우란 한 번에 수신하고자 하는 데이터의 양을 나타낸다.

**제어 비트**

제어 비트 필드는 기본적으로 8비트로 구성된다. 각 자리의 비트는 각기 다른 의미를 가지는데, TCP의 기본 동작을 논할 때 가장 자주 언급되는 세 개의 제어 비트는 아래와 같다.

- ACK : 세그먼트의 승인을 나타내기 위한 비트
- SYN : 연결을 수립하기 위한 비트
- FIN : 연결을 종료하기 위한 비트

ACK 비트가 1로 설정된 세그먼트, SYN 비트가 1로 설정된 세그먼트, FIN 비트가 1로 설정된 세그먼트는 편의상 ACK 세그먼트, SYN 세그먼트, FIN 세그먼트라 줄여서 칭하는 경우가 많다.

**순서 번호와 확인 응답 번호**

처음 통신을 위해 연결을 수립한 경우, 즉 제어 비트의 SYN 플래그가 1로 설정된 세그먼트의 경우 순서 번호는 무작위 값이 된다. 이를 초기 순서 번호라고 한다. 초기 순서 번호가 100이라면 가장 먼저 보내게 될 세그먼트 A의 순서 번호가 초기 순서 번호인 100이 되는 것이다. 연결 수립 이후 데이터를 송신하는 동안 순서 번호는 송신한 바이트를 더해 가는 형태로 누적값을 가진다. 즉, 순서 번호는 초기 순서 번호 + 송신한 바이트 수가 된다.

확인 응답 번호는 수신자가 다음으로 받기를 기대하는 순서 번호이다. 일반적으로 수신한 순서 번호 + 1로 설정된다. 확인 응답 번호 값을 보내기 위해서는 제어 비트의 ACK 플래그를 1로 설정해야 한다. 예를 들어 호스트가 순서 번호가 8000인 세그먼트를 수신한 뒤, 다음으로 8001번 세그먼트를 받기를 원한다고 했을 때 해당 호스트는 ACK 플래그를 1로 설정하고 확인 응답 번호로 8001을 명시한 세그먼트를 전송하게 된다.

#### TCP 연결 수립 : Three-way Handshake

TCP의 연결 수립은 쓰리 웨이 핸드셰이크를 통해 이루어진다. 쓰리 웨이 핸드셰이크는 이름처럼 세 개의 단계로 이루어진 TCP의 연결 수립 과정을 의미한다.

![three_way_handshake](https://csnote.net/assets/img/net/three_way_handshake.png)

| 송수신 방향 | 세그먼트           | 세그먼트 주요 정보                                                                                                                        | 의미                |
| ----------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| A -> B      | SYN 세그먼트       | - 호스트 A의 초기 순서 번호<br />- 1로 설정된 SYN 비트                                                                                    | 연결 시작 요청      |
| B -> A      | SYN + ACK 세그먼트 | - 호스트 B의 초기 순서 번호<br />- 호스트 A가 전송한 세그먼트에 대한 확인 응답 번호<br />- 1로 설정된 SYN 비트<br />- 1로 설정된 ACK 비트 | 연결 시작 요청 확인 |
| A -> B      | ACK 세그먼트       | - 호스트 A의 다음 순서 번호<br />- 호스트 B가 전송한 세그먼트에 대한 확인 응답 번호<br />- 1로 설정된 ACK 비트                            | 확인                |

처음 연결을 시작하는 호스트의 연결 수립 과정을 액티브 오픈이라 한다. 반대로 연결 요청을 받고 나서 요청에 따라 연결을 수립해 주는 호스트의 연결 수립 과정을 패시브 오픈이라 한다.

#### TCP 연결 종료 : Four-way Handshake

TCP가 연결을 종료하는 과정은 송수신 호스트가 각자 한 번씩 FIN과 ACK를 주고받으며 이루어진다. 네 단계로 연결을 종료한다는 점에서 포 웨이 핸드셰이크라고 부르기도 한다.

![four_way_handshake](https://csnote.net/assets/img/net/four_way_handshake.png)

| 송수신 방향 | 세그먼트     | 세그먼트 주요 정보                                                            | 의미                |
| ----------- | ------------ | ----------------------------------------------------------------------------- | ------------------- |
| A -> B      | FIN 세그먼트 | - 1로 설정된 FIN 비트                                                         | 연결 종료 요청      |
| B -> A      | ACK 세그먼트 | - 호스트 A가 전송한 세그먼트에 대한 확인 응답 번호<br />- 1로 설정된 ACK 비트 | 연결 종료 요청 확인 |
| B -> A      | FIN 세그먼트 | - 1로 설정된 FIN 비트                                                         | 연결 종료 요청      |
| A -> B      | ACK 세그먼트 | - 호스트 B가 전송한 세그먼트에 대한 확인 응답 번호<br />- 1로 설정된 ACK 비트 | 연결 종료 요청 확인 |

액티브 클로즈는 먼저 연결을 종료하려는 호스트에 의해 수행된다. 패시브 클로즈는 연결 종료 요청을 받아들이는 호스트에 의해 수행된다.

### TCP 상태

TCP는 연결형 통신과 신뢰할 수 있는 통신을 유지하기 위해 다양한 상태를 유지한다. 상태는 현재 어떤 통신 과정에 있는지를 나타내는 정보이다. TCP는 상태를 유지하고 활용한다는 점에서 스테이트풀(Stateful) 프로토콜이라고도 부른다.

![tcp_state](https://csnote.net/assets/img/net/tcp_state.png)

#### 연결이 수립되지 않은 상태

- CLOSED : 아무런 연결이 없는 상태
- LISTEN : 일종의 연결 대기 상태로 일반적으로 서버로서 동작하는 패시브 오픈 호스트는 LISTEN 상태를 유지한다. 쓰리 웨이 핸드셰이크의 첫 단계는 액티브 오픈 호스트(클라이언트)의 연결 요청인 SYN 세그먼트이기 때문에 LISTEN 상태는 그 SYN 세그먼트를 기다리는 상태이다. 즉, 액티브 오픈 호스트가 LISTEN 상태인 호스트(서버)에게 SYN 세그먼트를 보내면 쓰리 웨이 핸드셰이크가 시작된다.

#### 연결 수립 상태

- SYN-SENT : 액티브 오픈 호스트가 SYN 세그먼트를 보낸 뒤 그에 대한 응답인 SYN + ACK 세그먼트를 기다리는 상태이다. 연결 요청을 보낸 뒤 대기하는 상태로 볼 수 있다.
- SYN-RECEIVED : 패시브 오픈 호스트가 SYN + ACK 세그먼트를 보낸 뒤 그에 대한 ACK 세그먼트를 기다리는 상태이다.
- ESTABLISHED : 연결이 확립되었음을 나타내는 상태이다. 데이터를 송수신할 수 있는 상태를 의미한다. 쓰리 웨이 핸드셰이크 과정에서 두 호스트가 마지막 ACK 세그먼트를 주고받으면 ESTABLISHED 상태로 접어들게 된다.

#### 연결 종료 상태

- FIN-WAIT-1 : 일반적인 TCP 연결 종료 과정에 있어 FIN-WAIT-1은 연결 종료의 첫 단계가 된다. FIN 세그먼트로서 연결 종료 요청을 보낸 액티브 클로즈 호스트는 FIN-WAIT-1 상태로 접어들게 된다.
- CLOSE-WAIT : 종료 요청인 FIN 세그먼트를 받은 패시브 클로즈 호스트가 그에 대한 응답으로 ACK 세그먼트를 보낸 후 대기하는 상태이다.
- FIN-WAIT-2 : FIN-WAIT-1 상태에서 ACK 세그먼트를 받게 되면 FIN-WAIT-2 상태가 된다. 상대 호스트의 FIN 세그먼트를 기다리는 상태이다.
- LAST-ACK : CLOSW-WAIT 상태에서 FIN 세그먼트를 전송한 뒤 이에 대한 ACK 세그먼트를 기다리는 상태이다.
- TIME-WAIT : 액티브 클로즈 호스트가 FIN 세그먼트를 수신한 뒤, 이에 대한 ACK 세그먼트를 전송한 뒤 접어드는 상태이다. 패시브 클로즈 호스트가 마지막 ACK 세그먼트를 수신하면 CLOSED 상태로 전이하는 반면, TIME-WAIT 상태에 접어든 액티브 클로즈 호스트는 일정 시간을 기다린 뒤 CLOSED 상태로 전이한다. 만약 TIME-WAIT 상태로 일정 시간 대기하지 않고 곧바로 연결을 종료해버리면 상대 호스트 입장에서는 마지막 ACK 세그먼트가 올바르게 전송되지 않았을 때 재전송받을 수 없기 때문이다.

- CLOSING : 동시에 연결을 종료하려 할 때 전이되는 상태이다. 서로가 FIN 세그먼트를 보내고 받은 뒤 각자 그에 대한 ACK 세그먼트를 보냈지만, 아직 자신의 FIN 세그먼트에 대한 ACK 세그먼트를 받지 못했을 때 접어드는 상태이다. 양쪽 모두가 연결 종료를 요청하고, 서로의 종료 응답을 기다리는 경우이다. 이 경우 ACK 세그먼트를 수신한다면 각자 TIME-WAIT 상태로 접어든 뒤 종료하게 된다.

### TCP의 오류, 흐름, 혼잡 제어

TCP는 데이터 송수신 과정에서 재전송을 기반으로 다양한 오류를 제어하고, 흐름 제어를 통해 처리할 수 있을 만큼의 데이터만을 주고받으며, 혼잡 제어를 통해 네트워크가 혼잡한 정보에 따라 전송량을 조절한다.

#### 오류 제어 : 재전송 기법

신뢰성을 보장하기 위해서는 오류를 제어할 수 있어야 한다. 이를 위해 TCP는 잘못된 세그먼트를 재전송하는 방법을 사용한다.

#### 오류 검출과 재전송

TCP 세그먼트에 오류 검출을 위한 체크섬 필드로는 신뢰성을 보장하기 부족하다. 체크섬은 세그먼트의 훼손 여부만 나타낼 뿐이고, 체크섬 값이 잘못되었다면 호스트는 해당 패킷을 읽지 않고 폐기하기 때문이다. 결국 체크섬을 이용한다고 해도 송신 호스트가 세그먼트 전송 과정에 문제가 있다는 것을 인지할 수는 없다.

TCP가 신뢰성을 제대로 보장하려면 우선 송신 호스트가 송신한 세그먼트에 문제가 발생했음을 인지할 수 있어야 하고, 오류를 감지하게 되면 해당 세그먼트를 재전송할 수 있어야 한다.

TCP가 오류를 검출하고 세그먼트를 재전송하는 상황에는 크게 두 가지가 있다.

1. 중복된 ACK 세그먼트를 수신한 경우

   만일 수신 호스트 측이 받은 세그먼트의 순서 번호 중에서 일부가 누락되었다면 중복된 ACK 세그먼트를 전송하게 된다.

2. 타임아웃이 발생한 경우

   TCP는 타임아웃이 발생하면 문제가 생겼음을 인지한다. TCP 세그먼트를 송신하는 호스트는 모두 재전송 타이머 값을 유지한다. 호스트가 세그먼트를 전송할 때마다 재전송 타이머를 시작하게 되는데, 이 타이머의 카운트다운이 끝난 상황을 타임아웃이라고 한다. 타임아웃이 발생할 때까지 ACK 세그먼트를 받지 못하면 세그먼트가 상대 호스트에게 정상적으로 도착하지 않았다고 간주하여 세그먼트를 재전송한다.

**ARQ (Automatic Repeat Request) 재전송 기법**

수신 호스트의 답변(ACK)와 타임아웃 발생을 토대로 문제를 진단하고, 문제가 생긴 메시지를 재전송함으로써 신뢰성을 확보하는 방식을 ARQ(자동 재전송 요구)라고 한다.

- Stop-and-Wait ARQ

  제대로 전달했음을 확인하기 전까지는 새로운 메시지를 보내지 않는 방식이다. 즉, 메시지를 송신하고, 이에 대한 확인 응답을 받고, 다시 메시지를 송신하고, 이에 대한 확인 응답을 받는 것을 반복한다. 높은 신뢰성을 보장하지만 네트워크의 이용 효율이 낮아진다는 단점이 있다.

- Go-Back-N ARQ

  Stop-and-Wait ARQ의 문제를 해결하려면 각 세그먼트에 대한 ACK 세그먼트가 도착하기 전이라도 여러 세그먼트를 보낼 수 있어야 한다. Go-Back-N ARQ와 Selective Repeat ARQ는 이러한 방식으로 동작한다. 이렇게 연속해서 메시지를 전송할 수 있는 기술을 파이프라이닝(Pipelining)이라고 한다. 오늘날 TCP는 이러한 파이프라이닝이 사용되는 Go-Back-N ARQ와 Selective Repeat ARQ를 기반으로 동작한다.

  Go-Back-N ARQ는 파이프라이닝 방식을 활용해 여러 세그먼트를 전송하고, 도중에 잘못 전송된 세그먼트가 발생할 경우 해당 세그먼트부터 전부 다시 전송하는 방식이다. 순서 번호 n번에 대한 ACK 세그먼트는 'n번만의' 확인 응답이 아니라 'n번까지의' 확인 응답이라고 볼 수 있다. 이러한 점에서 Go-Back-N ARQ의 ACK 세그먼트를 누적 확인 응답(CACK, Cumulative Acknowledgement)이라고 한다.

- Selective Repeat ARQ

  Selective Repeat ARQ는 수신 호스트 측에서 제대로 전송받은 각각의 패킷들에 대해 ACK 세그먼트를 보내는 방식이다. Go-Back-N ARQ의 ACK 세그먼트가 누적 확인 응답이라면, Selective Repeat ARQ의 세그먼트는 개별 확인 응답인 셈이다. 송신 호스트는 올바르게 수신받지 못한 ACK 세그먼트가 있는지 검사하고, 만일 응답받지 못한 세그먼트가 존재한다면 해당 세그먼트를 재전송한다. 오늘날 대부분의 호스트는 TCP 통신에서 Selective Repeat ARQ를 지원한다. 두 호스트가 연결을 수립할 때 서로의 Selective Repeat ARQ의 지원 여부를 확인하게 되는데, 만약 Selective Repeat ARQ를 사용하지 않을 경우 Go-Back-N ARQ 방식으로 동작하게 된다.

**빠른 재전송 (Fast Retransmit)**

빠른 재전송은 재전송 타이머가 만료되기 전이라도 세 번의 동일한 ACK 세그먼트가 수신되었다면 해당 세그먼트를 곧바로 재전송하는 기능이다. 타이머가 끝날 때까지 기다리는 시간을 줄일 수 있다.

#### 흐름 제어 : 슬라이딩 윈도우

파이프라이닝 기반의 Go-Back-N ARQ와 Selective Repeat ARQ가 정상적으로 동작하려면 반드시 흐름 제어를 고려해야 한다. 호스트가 한 번에 받아서 처리할 수 있는 세그먼트의 양에는 한계가 있기 때문이다.

수신 버퍼는 수신된 세그먼트가 애플리케이션 프로세스에 의해 읽히기 전에 임시로 저장되는 공간이다. 송신 호스트가 흐름 제어를 고려하지 않고 수신 버퍼의 크기보다 많은 데이터를 전송하면 일부 세그먼트가 처리되지 못할 수 있다. TCP의 흐름 제어란 이러한 문제 상황을 방지하고자 송신 호스트가 수신 호스트의 처리 속도를 고려하며 송수신 속도를 균일하게 유지하는 것을 의미한다.

오늘날 TCP에서는 흐름 제어로 슬라이딩 윈도우(Sliding Window)를 사용한다. 윈도우란 송신 호스트가 파이프라이닝할 수 있는 최대량을 의미한다. 윈도우의 크기만큼 확인 응답을 받지 않고도 한 번에 전송 가능하다는 의미이다. 수신 호스트는 TCP 헤더(윈도우 필드)를 통해 송신 호스트에게 자신이 받아들이고자 하는 데이터의 양을 알리게 된다. 송신 호스트는 이 정보를 바탕으로 수신 호스트의 처리 속도와 발맞춰 균일한 속도를 세그먼트를 전송한다. 파이프라이닝 과정에서 송수신 윈도우는 점차 오른쪽으로 미끄러지듯 움직이게 된다. 그래서 이러한 TCP의 흐름 제어를 슬라이딩 윈도우라고 부른다.

#### 혼잡 제어

혼잡(Congestion)은 많은 트래픽으로 인해 패킷의 처리 속도가 늦어지거나 유실될 우려가 있는 네트워크 상황을 말한다. TCP의 혼잡 제어란 이와 같은 혼잡을 제어하기 위한 기능이다. 흐름 제어의 주체가 수신 호스트라면 혼잡 제어의 주체는 송신 호스트이다. 혼잡 제어를 수행하는 송신 호스트는 네트워크 혼잡도를 판단하고 혼잡한 정도에 맞춰 유동적으로 전송량을 조절하며 전송한다.

혼잡 윈도우는 혼잡 없이 전송할 수 있을 법한 데이터의 양을 의미한다. 혼잡 윈도우가 크면 한 번에 전송할 수 있는 세그먼트 수가 많음을 의미하고, 혼잡 윈도우가 작다면 네트워크가 혼잡한 상황이기에 한 번에 전송할 수 있는 세그먼트 수가 적음을 의미한다.

수신 윈도우 크기는 수신 호스트가 TCP 헤더로 알려 주기에 별도로 고민할 필요가 없지만, 혼잡 윈도우의 크기는 송신 호스트가 어느 정도의 세그먼트를 전송해야 혼잡을 방지할 수 있는지를 직접 계산하여 알아내야 한다. 혼잡 윈도우 크기는 혼잡 제어 알고리즘을 통해 결정할 수 있다. 혼잡 제어를 수행하는 일련의 방법을 혼잡 제어 알고리즘이라고 부른다.

- AIMD(Additive Increase/Multiplicative Decrease)

  가장 기본적인 알고리즘으로, 혼잡이 감지되지 않는다면 혼잡 윈도우를 RTT마다 1씩 선형적으로 증가시키고, 혼잡이 감지되면 혼잡 윈도우를 절반으로 떨어뜨리는 동작을 반복하는 알고리즘이다. 여기서 RTT(Round Trip Time)란 메시지를 전송한 뒤 그에 대한 답변을 받는 데까지 걸리는 시간을 말한다.

- 느린 시작 알고리즘

  혼잡 윈도우를 1부터 시작해 문제없이 수신된 ACK 세그먼트를 하나당 1씩 증가시키는 방식이다. 결과적으로 혼잡 윈도우는 RTT마다 2배씩 지수적으로 증가하게 된다. AIMD 방식은 처음 연결이 수립된 뒤 혼잡 윈도우 크기가 증가되는 속도가 느리다. 하지만 느린 시작을 이용하면 혼잡 윈도우의 지수적인 증가를 활용해 초기 전송 속도를 어느 정도 빠르게 확보할 수 있다.

  느린 시작을 사용할 때 함께 사용하는 값으로 느린 시작 임계치라는 값이 정해져 있다. 혼잡 윈도우 값이 계속 증가하다가 느린 시작 임계치 이상이 되거나, 타임아웃이 발생하거나, 세 번의 중복된 ACK 세그먼트가 발생하여 혼잡이 감지되면 다음 세 가지 방법 중 하나를 선택하게 된다.

  | 상황                            | 방법                                                                                                                   |
  | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
  | 타임아웃 발생                   | 혼잡 윈도우 값을 1로, 느린 시작 임계치를 혼잡이 감지되었을 시점의 혼잡 윈도우 값의 절반으로 초기화한 뒤 느린 시작 재개 |
  | 혼잡 윈도우 >= 느린 시작 임계치 | 느린 시작 종료, 혼잡 윈도우를 절반으로 초기화한 뒤 혼잡 회피 수행                                                      |
  | 세 번의 중복 ACK 발생           | 빠른 재전송 후 빠른 회복 수행                                                                                          |

- 혼잡 회피 알고리즘

  RTT마다 혼잡 윈도우를 1MSS(Maximum Segment Size)씩 증가시키는 알고리즘이다. 느린 시작 임계치를 넘어선 시점부터는 혼잡이 발생할 우려가 있으니 조심해서 혼잡 윈도우를 증가시키는 방식이다. 혼잡 회피 도중 타임아웃이 발생하면 혼잡 윈도우 값을 1로, 느린 시작 임계치는 혼잡이 감지된 시점의 혼잡 윈도우 값의 절반으로 초기화한 뒤 다시 느린 시작을 수행한다. 그리고 혼잡 회피 도중 세 번의 중복 ACK 세그먼트가 발생되었을 때는 혼잡 윈도우 값과 느린 시작 임계치를 대락 절반으로 떨어뜨린 뒤 빠른 회복 알고리즘을 수행한다. 물론 이때 타임아웃이 발생한 세그먼트나 세 번의 중복 ACK 세그먼트가 발생한 세그먼트는 재전송한다.

- 빠른 회복 알고리즘

  세 번의 중복된 ACK 세그먼트를 수신하면 빠른 재전송과 더불어 빠른 회복 알고리즘이 수행된다. 빠른 회복 알고리즘은 느린 시작은 건너뛰고 혼잡 회피를 수행하는 알고리즘으로, 이름처럼 빠르게 전송률을 회복하기 위한 알고리즘이다. 단, 빠른 회복 도중이라도 타임아웃이 발생하면 혼잡 윈도우 크기는 1로, 느린 시작 임계치는 혼잡이 감지된 시점의 절반으로 떨어뜨린 후 다시 느린 시작을 수행한다.

**명시적 혼잡 알림 (ECN, Explicit Congestion Notification)**

혼잡을 회피하기 위해 네트워크 중간 장치 (주로 라우터)의 도움을 받는 방법이다. ECN은 선택적인 기능이기에 이를 지원하는 호스트가 있고, 지원하지 않는 호스트가 있다. ECN을 지원하는 호스트가 TCP/IP 프로토콜로 정보를 주고받을 때, IP 헤더와 TCP 헤더에 ECN 관련 필드가 추가된다. IP(IPv4) 헤더에서는 '서비스 필드' 내 오른쪽 두 비트가 ECN으로 사용되고, TCP 헤더에서는 제어 비트의 CWR 비트, ECE 비트가 ECN으로 사용된다.

라우터 입장에서 네트워크가 혼잡해질 것 같다고 판단할 경우, IP 헤더의 ECN 비트들을 설정한 채 수신지 호스트에게 메시지를 전달한다. 수신지 호스트가 전달받은 IP 패킷 내에 혼잡 표시가 되어 있다면 TCP ACK 세그먼트 내 ECE 비트 세팅을 통해 송신 호스트에게 네트워크가 혼잡함을 알려 준다. 송신 호스트가 응답받은 세그먼트에서 ECE 비트가 설정되어 있을 경우, 송신 호스트는 CWR 비트를 세팅 후 혼잡 윈도우를 반으로 줄인다.

ECN을 이용하면 수신 호스트의 ACK 세그먼트를 통해 더 빠르게 혼잡을 감지할 수 있고, 이는 일반적으로 세 번의 중복된 ACK 세그먼트 수신 이후나 타임아웃 발생 후에 혼잡을 제어하는 방식에 비해 더 빠르다.

## UDP (User Datagram Protocol)

UDP는 TCP와 달리 비연결형 통신을 수행하는 신뢰할 수 없는 프로토콜이다. 따라서 연결 수립 및 해제, 재전송을 통한 오류 제어, 혼잡 제어, 흐름 제어 등을 수행하지 않는다. TCP처럼 상태를 유지하지도 않는다. 상태를 유지하지도, 활용하지도 않는다는 점에서 UDP를 스테이트리스(Stateless) 프로토콜의 일종이라고 볼 수 있다.

### UDP 데이터그램 구조

![udp](https://csnote.net/assets/img/net/udp.png)

- 송신지 포트와 수신지 포트 : 송수신지의 포트 번호가 담긴다.

- 길이 : 헤더를 포함한 UDP 데이터그램의 바이트가 담긴다.
- 체크섬 : 데이터그램 전송 과정에서 오류가 발생했는지 검사하기 위한 필드이다. 수신지는 이 필드의 값을 토대로 데이터그램의 정보가 훼손되었는지를 판단하고, 문제가 있다고 판단한 데이터그램은 폐기한다. 데이터그램이 훼손되었는지를 나타내는 정보라는 점에서 이 필드는 '수신지까지 잘 도달했는지'를 나타내는 신뢰성/비신뢰성과는 관련이 없다.

UDP는 TCP에 비해 적은 오버헤드로 패킷을 빠르게 처리할 수 있다. 그래서 주로 실시간 스트리밍 서비스, 인터넷 전화처럼 실시간성이 강조되는 상황에서 TCP보다 더 많이 쓰인다.

TCP의 전송 방식이 수신지에 '하나씩 확실하게 전달하는' 것과 같다면 UDP의 전송 방식은 수신지에 패킷들을 '빠르게 마구 던지는' 것과 같다. 그 과정에서 패킷이 손실되거나 패킷의 순서가 바뀔 수도 있다.

---

**참조**

https://www.hanbit.co.kr/store/books/look.php?p_code=B3633191758

https://csnote.net