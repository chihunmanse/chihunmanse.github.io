---
title: 네트워크 응용 계층
tags: [BackEnd, CS, Network, DNS, HTTP, HTTPS]
sidebar_position: 12
---

# 네트워크 응용 계층

## DNS와 자원

### 도메인 네임 (Domain Name)

메시지를 주고받고자 하는 대상을 파악하기 위해서는 IP 주소 이외에 도메인 네임을 사용할 수 있다. 통신하고자 하는 모든 호스트의 IP 주소를 기억하고 있기 어려울뿐더러, 호스트의 IP 주소는 바뀔 수 있기 때문에 일반적으로 사용자는 상대 호스트를 특정하기 위해 IP 주소보다는 도메인 네임을 많이 사용한다. 도메인 네임은 호스트의 IP 주소와 대응되는 문자열 형태의 호스트 특정 정보이다.

도메인 네임과 IP 주소는 네임 서버에서 관리한다. 도메인 네임을 관리하는 네임 서버는 DNS 서버라고도 부른다. 도메인 네임을 네임 서버에 질의하면 해당 도메인 네임에 대한 IP 주소를 알려 주는 방식으로 도메인 네임을 통해 IP 주소를 알아낼 수 있다. (반대로 IP 주소를 통해 도메인 네임을 알아내는 것도 가능하다.)

도메인 네임은 점(.)을 기준으로 계층적으로 분류된다.

- 루트 도메인(Root Domain) : 점(.)으로 표현되며 도메인 네임의 마지막에 점이 찍힌 형태로 표기된다. 일반적으로 루트 도메인을 생략해서 표기하기에 대개 최상위 도메인을 도메인 네임의 마지막 부분으로 간주한다.
- 최상위 도메인(TLD, Top-Level Domain) : 도메인 네임의 마지막 부분 (.com, .kr, .net, ...)
- 2단계 도메인(Second-Level Domain) : 최상위 도메인의 하부 도메인. 예를 들어 `www.example.com`에서 `example`이 2단계 도메인이다. 나아가 `www`는 3단계 도메인이다. 도메인의 단계는 이보다 더 늘어날 수도 있지만, 일반적으로는 3-5 단계 정도로 구성된다.

도메인 네임을 모두 포함하는 도메인 네임을 전체 주소 도메인 네임(FQDN, Fully Qualified Domain Name)이라고 한다.

**서브 도메인**

서브 도메인은 다른 도메인이 포함된 도메인을 의미한다. (예: google.com의 서브 도메인인 mail.google.com)

### 계층적 네임 서버

계층적인 도메인 네임을 효율적으로 관리하기 위해 네임 서버 또한 계층적인 형태를 이룬다. 또 네임 서버는 여러 개 존재하며 전 세계 여러 군데에 위치해 있다. 계층적이고 분산된 도메인 네임에 대한 관리 체계를 도메인 네임 시스템(Domain Name System), 줄여서 DNS라고 부른다. DNS는 호스트가 이러한 도메인 네임 시스템을 이용할 수 있도록 하는 애플리케이션 계층 프로토콜을 의미하기도 한다.

- 로컬 네임 서버(Local Name Server) : 클라이언트와 맞닿아 있는 네임 서버로, 클라이언트가 도메인 네임을 통해 IP 주소를 알아내고자 할 때 가장 먼저 찾게 되는 네임 서버이다. 클라이언트가 로컬 네임 서버를 찾을 수 있으려면 로컬 네임 서버의 주소를 알고 있어야한다. 로컬 네임 서버의 주소는 일반적으로 ISP에서 할당해 주는 경우가 많다.
- 공개 DNS 서버(Public DNS Server) : ISP에서 할당해 주는 로컬 네임 서버 주소가 아닌, 인터넷에 공개된 DNS 서버이다. (예: 8.8.8.8, 1.1.1.1)
- 루트 네임 서버(Root Name Server) : 루트 도메인을 관장하는 네임 서버로 질의에 대해 TLD 네임 서버의 IP 주소를 반환할 수 있다.
- TLD 네임 서버 : TLD를 관리하는 네임 서버로 질의에 대해 TLD의 하위 도메인 네임을 관리하는 네임 서버 주소를 반환할 수 있다.
- 책임 네임 서버(Authoritative Name Server) : 특정 도메인 영역(zone)을 관리하는 네임 서버로, 질의에 대한 IP 주소를 곧바로 답할 수 있는 네임 서버이다. 책임 네임 서버는 로컬 네임 서버가 마지막으로 질의하는 네임 서버이다. 일반적으로 로컬 네임 서버는 책임 네임 서버로부터 원하는 IP 주소를 얻어낸다.

#### 도메인 네임 리졸빙

로컬 네임 서버가 네임 서버들에게 질의하는 방법에는 크게 재귀적 질의와 반복적 질의라는 두 가지 방법이 있다.

- 재귀적 질의 : 클라이언트가 로컬 네임 서버에게 도메인 네임을 질의하면, 로컬 네임 서버가 루트 네임 서버에게 질의하고, 루트 네임 서버가 TLD 네임 서버에게 질의하고, TLD 네임 서버가 다음 단계에 질의하는 과정을 반복하며 최종 응답 결과(IP 주소)를 역순으로 전달하는 방식이다.
- 반복적 질의 : 클라이언트가 로컬 네임 서버에게 IP 주소를 알고 싶은 도메인 네임을 질의하면, 로컬 네임 서버는 루트 도메인 서버에게 질의해서 다음으로 질의할 네임 서버의 주소를 응답받고, 다음으로 TLD 네임 서버에게 질의해서 다음으로 질의할 네임 서버의 주소를 응답받는 과정을 반복하다가 최종 응답 결과(IP 주소)를 클라이언트에게 알려 주는 방식이다.

네임 서버들은 기존에 응답받은 결과를 임시로 저장했다가 추후 같은 질의에 이를 활용하는 경우가 많다. (DNS 캐시)

#### DNS 자원 레코드

네임 서버는 도메인 네임과 IP 주소의 대응 관계를 나타내는, DNS 자원 레코드라 불리는 정보를 저장하고 관리한다. 각 레코드에는 유형이 정해져 있기에 레코드의 유형이 달라지면 레코드의 이름과 값의 의미가 달라진다.

| 레코드 유형 | 설명                                                     |
| ----------- | -------------------------------------------------------- |
| A           | 특정 호스트에 대한 도메인 네임과 IPv4 주소와의 대응 관계 |
| AAAA        | 특정 호스트에 대한 도메인 네임과 IPv6 주소와의 대응 관계 |
| CNAME       | 호스트 네임에 대한 별칭 지정                             |
| NS          | 특정 호스트의 IP 주소를 찾을 수 있는 네임 서버           |
| MX          | 해당 도메인과 연동되어 있는 메일 서버                    |

### 자원

자원이란 네트워크상의 메시지를 통해 주고받는 대상을 의미한다. 이는 HTML 파일이 될 수도 있고, 이미지나 동영상 파일이 될 수도 있으며, 텍스트 파일이 될 수도 있다.

네트워크상에서 자원을 주고받으려면 자원을 식별할 수 있어야 한다. 자원을 식별할 수 있는 정보를 URI(Uniform Resource Identifier)라고 부른다. URI는 식별에 사용되는 정보에 따라 위치 기반 식별자인 URL(Uniform Resource Locator)과 이름 기반 식별자인 URN(Uniform Resource Name)으로 나뉜다.

#### URL

오늘날 인터넷 환경에서 자원 식별에 더 많이 사용되는 방법은 URL이다.

![url](https://csnote.net/assets/img/net/url.png)

- scheme : 자원에 접근하는 방법을 의미한다. 일반적으로 사용할 프로토콜이 명시된다. HTTP를 사용하여 자원에 접근할 때는 http://를 사용하고, https를 사용하여 자원에 접근할 때는 https://를 사용한다.
- authority : 호스트를 특정할 수 있는 정보로 이를테면 IP 주소 혹은 도메인 네임이 명시된다. 콜론(:) 뒤에 포트 번호를 덧붙일 수도 있다.
- path : 자원이 위치한 경로가 명시된다. 자원의 위치는 슬래시(/)를 기준으로 계층적으로 표현되고, 최상위 경로 또한 슬래시로 표현된다.
- query (query string) : URL을 통해 서버에 전송 가능한 물음표(?)로 시작되는 <키=값> 형태의 데이터로, 쿼리 파라미터(query parameter)라고도 부르며 앰퍼샌드(&)로 여러 쿼리 문자열을 연결할 수 있다.
- fragment : 자원의 한 조각을 가리키기 위한 정보이다. 흔히 HTML 파일과 같은 자원에서 특정 부분을 가리키기 위해 사용된다.

## HTTP (Hypertext Transfer Protocol)

HTTP는 응용 계층에서 다양한 정보를 주고받는 데 사용되는 프로토콜로 클라이언트-서버 구조 기반의 요청-응답 프로토콜이자 주고받을 미디어 타입에 특별히 제한을 두지 않고 독립적으로 동작이 가능한 미디어 독립적인 프로토콜이다.

### 특징

#### 요청-응답 기반 프로토콜

HTTP는 클라이언트-서버 구조 기반의 요청-응답 프로토콜이다. 따라서 같은 HTTP 메시지일지라도 HTTP 요청 메시지와 HTTP 응답 메시지는 메시지 형태가 다르다.

#### 미디어 독립적 프로토콜

HTTP는 자원의 특성을 제한하지 않으며, 단지 자원과 상호 작용하는 데 사용할 수 있는 인터페이스를 정의할 뿐이다. 즉 HTTP는 주고받을 자원의 특성과 무관하게 그저 자원을 주고받을 수단의 역할만을 수행한다. HTTP에서 메시지로 주고받는 자원의 종류를 미디어 타입이라 부른다. 미디어 타입은 기본적으로 슬래시를 기준으로 하는 '타입/서브타입(type/subtype)' 형식으로 구성되며, 타입은 데이터의 유형을 나타내고, 서브타입은 주어진 타입에 대한 세부 유형을 나타낸다.

#### 스테이트리스 프로토콜

HTTP는 상태를 유지하지 않는 스테이트리스(stateless) 프로토콜이다. 이는 서버가 HTTP 요청을 보낸 클라이언트와 관련된 상태를 기억하지 않는다는 의미이다. 때문에 클라이언트의 모든 HTTP 요청은 기본적으로 독립적인 요청으로 간주된다. 상태를 유지하지 않고 모든 요청을 독립적인 요청으로 처리하는 것은 특정 클라이언트가 특정 서버에 종속되지 않도록 하며, 서버의 추가나 문제 발생 시 대처가 용이하도록 한다. 즉, 상태를 유지하지 않는 특성은 필요하다면 쉽게 서버를 추가할 수 있기 때문에 확장성이 높고, 서버 중 하나에 문제가 생겨도 쉽게 다른 서버로 대체가 가능하기 때문에 견고성이 높다.

#### 지속 연결(Persistent Connection) 프로토콜

기본적으로 HTTP는 TCP 상에서 동작하는데, HTTP는 비연결형 프로토콜이지만, TCP는 연결형 프로토콜이다. 따라서 초기의 HTTP 버전(HTTP 1.0 이하)은 쓰리 웨이 핸드셰이크를 통해 TCP 연결을 수립한 후, 요청에 대한 응답을 받으면 연결을 종료하는 방식으로 동작했다. 추가적인 요청-응답을 하기 위해서는 다시 TCP 연결을 수립해야 했다. 이러한 방식을 비지속 연결이라고 한다. 하지만 최근 대중적으로 사용되는 HTTP 버전(HTTP 1.1 이상)은 지속 연결이라는 기술을 제공한다. 이는 하나의 TCP 연결상에서 여러 개의 요청-응답을 주고받을 수 있는 기술이다. 킵 얼라이브(keep-alive)라고도 부른다.

![keep_alive](https://csnote.net/assets/img/net/keep_alive.png)

### HTTP 메시지 구조

HTTP 메시지는 시작 라인, 필드 라인, 메시지 본문으로 이루어져 있다. 필드 라인은 없거나 여러 개 있을 수 있고, 메시지 본문은 없을 수 있다. 또한 필드 라인과 메시지 본문 사이에는 빈 줄바꿈이 있다.

```
시작 라인 (줄바꿈)
필드 라인 (줄바꿈) - 0개 이상
(줄바꿈)
메시지 본문 - 선택적
```

#### 시작 라인

HTTP 메시지가 요청 메시지일 경우 시작 라인은 '요청 라인'이 되고, 응답 메시지일 경우 시작 라인은 '상태 라인'이 된다.

**요청 라인**

`메서드 (공백) 요청 대상 (공백) HTTP 버전 (줄바꿈)`

- 메서드 : 클라이언트가 서버의 자원(요청 대상)에 대해 수행할 작업의 종류이다. (GET, HEAD, POST, PUT, DELETE 등)
- 요청 대상 : HTTP 요청을 보낼 서버의 자원을 의미한다. 보통 이곳에는 쿼리가 포함된 URI의 경로가 명시된다.
- HTTP 버전 : 사용된 HTTP 버전을 의미한다. 'HTTP/<버전>' 표기 방식을 따른다.

**상태 라인**

`HTTP 버전 (공백) 상태 코드 (공백) 이유 구문 - 선택적 (줄바꿈)`

- HTTP 버전 : 사용된 HTTP 버전
- 상태 코드(Status Code) : 요청에 대한 결과를 나타내는 세 자리 정수
- 이유 구문(Reason Phrase) : 상태 코드에 대한 문자열 형태의 설명

#### 필드 라인

필드 라인에는 0개 이상의 HTTP 헤더가 명시된다. 따라서 이를 헤더 라인이라고도 부른다. HTTP 헤더란 HTTP 통신에 필요한 부가 정보를 의미한다. 필드 라인에 명시되는 각 HTTP 헤더는 콜론(:)을 기준으로 헤더 이름과 하나 이상의 헤더 값으로 구성된다.

#### 메시지 본문 (Message-Body)

HTTP 요청 혹은 응답 메시지에서 본문이 필요한 경우 이는 메시지 본문에 명시된다. 메시지 본문은 존재하지 않을 수도 있고, 다양한 콘텐츠 타입이 사용될 수도 있다.

### HTTP 메서드

| HTTP 메서드 | 설명                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET         | 자원을 조회 및 습득하기 위해 사용하는 메서드. GET 메서드에 요청 메시지 본문을 포함시키는 것은 바람직하지 않다. 대신 쿼리 문자열이 사용되는 경우가 많다. |
| HEAD        | GET과 동일하나, 헤더만을 응답받는 메서드                                                                                                                |
| POST        | 서버로 하여금 특정 작업을 처리하도록 요청하는 메서드. 일반적으로 클라이언트가 서버에 새로운 자원을 생성하고자 할 때 사용된다.                           |
| PUT         | 자원을 대체하기 위한 메서드. 요청 자원이 없다면 메시지 본문으로 자원을 새롭게 생성하거나, 이미 자원이 존재한다면 메시지 본문으로 자원을 대체한다.       |
| PATCH       | 자원에 대한 부분적 수정을 위한 메서드                                                                                                                   |
| DELETE      | 특정 자원을 삭제하고 싶을 때 사용하는 메서드                                                                                                            |

### HTTP 상태 코드

상태 코드는 요청에 대한 결과를 나타내는 세 자리 정수이다.

| 상태 코드           | 설명                      |
| ------------------- | ------------------------- |
| 100번대 (100 - 199) | 정보성 상태 코드          |
| 200번대 (200 - 299) | 성공 상태 코드            |
| 300번대 (300 - 399) | 리다이렉션 상태 코드      |
| 400번대 (400 - 499) | 클라이언트 에러 상태 코드 |
| 500번대 (500 - 599) | 서버 에러 상태 코드       |

리다이렉션(Redirection)이란 클라이언트가 요청한 자원이 다른 곳에 있을 때, 클라이언트의 요청을 다른 곳으로 이동시키는 것을 의미한다.

#### 200번대

| 상태 코드 | 이유 구문  | 설명                                                    |
| --------- | ---------- | ------------------------------------------------------- |
| 200       | OK         | 요청이 성공했음                                         |
| 201       | Created    | 요청이 성공했으며, 새로운 자원이 생성되었음             |
| 202       | Accepted   | 요청은 잘 받았으나, 아직 요청한 작업을 끝내지 않았음    |
| 204       | No Content | 요청이 성공했지만, 메시지 본문으로 표시할 데이터가 없음 |

#### 400번대

| 상태 코드 | 이유 구문          | 설명                                                  |
| --------- | ------------------ | ----------------------------------------------------- |
| 400       | Bad Request        | 클라이언트의 요청이 잘못되었음                        |
| 401       | Unauthorized       | 요청한 자원에 대한 유효한 인증이 없음                 |
| 403       | Forbidden          | 요청이 서버에 의해 거부됨 (예: 접근 권한이 없는 경우) |
| 404       | Not Found          | 요청받은 자원을 찾을 수 없음                          |
| 405       | Method Not Allowed | 요청한 메서드를 지원하지 않음                         |

상태 코드 401과 403을 혼동하기 쉬운데, 인증(Authentication) 여부와 인가(Authorization) 여부는 다른 개념이다. 인증이란 자신이 누구인지 증명하는 것을 의미하고, 인가(권한 부여)는 인증된 주체에게 작업을 허용하는 것을 의미한다.

#### 500번대

| 상태 코드 | 이유 구문             | 설명                                                 |
| --------- | --------------------- | ---------------------------------------------------- |
| 500       | Internal Server Error | 요청을 처리할 수 없음                                |
| 502       | Bad Gateway           | 중간 서버의 통신 오류                                |
| 503       | Service Unavailable   | 현재는 요청을 처리할 수 없으나 추후 가능할 수도 있음 |

### HTTP 헤더

#### 요청 시 활용되는 HTTP 헤더

- Host : 요청을 보낼 호스트를 나타내는 헤더이다. 주로 도메인 네임으로 명시되며, 포트 번호가 포함되어 있을 수 있다.
- User-Agent : 요청 메시지 생성에 관여한 클라이언트 프로그램과 관련된 운영체제, 브라우저 종류 및 버전, 렌더링 엔진과 같은 다양한 정보가 명시된다. 서버 입장에서는 User-Agent 헤더를 통해 클라이언트의 접속 환경을 유추할 수 있다.
- Referer : 클라이언트가 요청을 보낼 때 머무르고 있던 URL이 명시된다. Referer를 통해 클라이언트의 유입 경로를 파악해 볼 수 있다. 초기 개발 당시의 오타로 인해 Referer라는 표기가 오늘날까지 사용되고 있다.
- Authorization : 클라이언트의 인증 정보를 담는 헤더이다. 인증 타입과 인증을 위한 정보가 차례로 명시된다.

#### 응답 시 활용되는 HTTP 헤더

- Server : 요청을 처리하는 서버 측의 소프트웨어와 관련된 정보가 명시되는 헤더이다.
- Allow : 클라이언트에게 허용된 HTTP 메서드 목록을 알려주기 위해 사용되는 헤더이다.
- Retry-After : 자원을 사용할 수 있는 날짜 혹은 시각을 나타내는 헤더이다.
- Location : 클라이언트에게 자원의 위치를 알려주기 위해 사용되는 헤더이다. 주로 리다이렉션이 발생했을 때나 새로운 자원이 생성되었을 때 사용된다.
- WWW-Authenticate : 자원에 접근하기 위한 인증 방식을 설명하는 헤더이다.

#### 공통적으로 활용되는 HTTP 헤더

- Date : 메시지가 생성된 날짜와 시각에 관련된 정보가 명시되는 헤더이다.
- Connection : 클라이언트의 요청과 응답 간의 연결 방식을 설정하는 헤더이다. 'Connection: keep-alive' 헤더를 통해 상대방에게 지속 연결을 희망함을 알릴 수 있다. 또한 서버나 클라이언트가 연결을 종료하고 싶을 때는 'Connection: close'를 통해 알릴 수 있다.
- Content-Length : 본문의 바이트 크기(길이)를 나타내는 헤더이다.
- Content-Type : 메시지 본문에서 사용된 미디어 타입을 명시하는 헤더이다.

### 쿠키 (Cookie)

쿠키란 서버에서 생성되어 클라이언트 측에 저장되는 데이터로, 상태를 유지하지 않는 HTTP의 특성을 보완하기 위한 수단이다. 즉 서버가 클라이언트의 상태를 알 수 있게끔 하는 데이터이다. 쿠키를 이루는 정보는 기본적으로 <이름, 값> 쌍의 형태를 띠고 있고, 추가로 적용 범위와 만료 기간 등 다양한 속성을 가질 수 있다.

응답 메시지의 Set-Cookie 헤더를 통해 쿠키의 이름, 값과 더불어 세미콜론(;)으로 구분되는 속성들을 전달할 수 있다. 요청 메시지의 Cookie 헤더 값은 서버에 전달할 쿠키의 이름과 값을 나타내는 헤더이다.

#### 웹 스토리지 : 로컬 스토리지와 세션 스토리지

쿠키 이외에도 클라이언트가 저장하고 클라이언트의 상태를 추측할 수 있는 <키-값> 쌍 형태의 정보로 웹 스토리지가 있다. 웹 스토리지는 웹 브라우저 내의 저장 공간으로, 일반적으로 쿠키보다 더 큰 데이터를 저장할 수 있다. 또 쿠키는 서버로 자동 전송되지만, 웹 스토리지의 정보는 서버로 자동 전송되지 않고 필요할 때 조회할 수 있다. 웹 스토리지에는 크게 로컬 스토리지와 세션 스토리지가 있다. 세션 스토리지는 세션이 유지되는 동안(브라우저가 열려 있는 동안) 유지되는 정보이고, 로컬 스토리지는 별도로 삭제하지 않는 한 영구적으로 저장이 가능한 정보이다.

### HTTP 버전

- HTTP/0.9 : 초창기 HTTP 버전으로 사용 가능한 메서드가 GET뿐이었고, 요청 메시지는 한 줄로 구성되었다.
- HTTP/1.0 : HEAD, POST와 같은 GET 이외의 메서드가 도입된 HTTP 버전. 헤더가 지원되기 시작해 훨씬 더 다양한 정보를 주고 받을 수 있게 되었다. 공식적으로 지속 연결을 지원하지는 않았다.
- HTTP/1.1 : 지속 연결이 공식적으로 지원된 HTTP 버전. 특정 요청에 대한 응답이 수신되기 전에 다음 요청을 보낼 수 있는 파이프라이닝 기능과 콘텐츠 협상 기능 등 다양한 편의 기능 및 사용 가능한 헤더가 추가되었다.
- HTTP/2.0 : HTTP/1.1의 효율과 성능을 높이기 위한 버전. 송수신 효율을 높이기 위해 헤더를 압축하여 전송하고, (텍스트 기반의 메시지를 송수신한 이전 버전과는 달리) 바이너리 데이터 기반의 메시지를 송수신한다. 또 클라이언트가 요청하지 않았더라도 미래에 필요할 것으로 예상되는 자원을 미리 전송해 주는 서버 푸시(Server Push)라는 기능을 제공하기도 한다. 그리고 HTTP/1.1의 고질적인 문제였던 HOL 블로킹(Head-Of-Line Blocking)이라는 문제를 완화한 버전이기도 하다. HOL 블로킹이란 같은 큐에 대기하며 순차적으로 처리되는 여러 패킷이 있을 때, 첫 번째 패킷의 처리 지연으로 인해 나머지 패킷들의 처리도 모두 지연되는 문제 상황을 의미한다. HTTP/2.0에서는 이를 멀티플렉싱(Multiplexing) 기법을 도입해 완화했다. HTTP 멀티플렉싱이란 여러 스트림을 이용해 병렬적으로 메시지를 주고받는 기술을 의미한다.
- HTTP/3.0 : 이전까지의 HTTP 버전과는 달리 UDP를 기반으로 동작하는 버전. UDP를 기반으로 구현된 QUIC(Quick UDP Internet Connections) 프로토콜을 기반으로 동작한다. 연결형 프로토콜인 TCP에 비해 비연결형 프로토콜인 UDP는 상대적으로 더 빠르기 때문에, HTTP/3.0은 속도 측면에서 큰 개선이 이루어졌다.

### HTTPS (HTTP over TLS)

#### 인증서와 디지털 서명

네트워크에서 사용되는 인증서라는 용어는 일반적으로 공개 키 인증서를 일컫는다. 공개키 인증서란 공개 키와 공개 키의 유효성을 입증하기 위한 전자문서이다. 이러한 인증서는 인증 기관(CA, Certification Authority)에서 발급한다. 인증 기관은 인증서의 발급, 검증, 저장과 같은 역할을 수행할 수 있는 공인기관이다. CA가 발급한 인증서에는 공개 키 인증서를 보증하는 내용을 담은 서명값이 있다. 클라이언트는 이 서명 값을 바탕으로 인증서를 검증할 수 있다.

서명 값은 인증서 내용에 대한 해시 값을 CA의 개인 키로 암호화하는 방식으로 만들어진다. CA는 이렇게 얻어낸 정보를 서명 값으로 삼아 클라이언트에게 인증서와 함께 전송한다.

CA의 공개 키는 공개되어 있기에, 서명 값은 CA의 공개 키로 복호화할 수 있다. 서명 값을 CA의 공개 키로 복호화하면 인증서 내용에 대한 해시 값을 얻을 수 있다. 다음으로 인증서 데이터에 대한 해시 값을 직접 구한 뒤 이를 복호화한 값과 비교한다. 만일 값이 일치한다면 전달받은 인증서는 CA의 개인 키로 만들어졌다고 보장할 수 있다. 따라서 인증서에 포함된 공개 키를 안심하고 사용할 수 있게 된다. 개인 키로 암호화된 메시지를 공개 키로 복호화함으로써 신원을 증명하는 이러한 절차를 디지털 서명이라 부른다.

#### SSL(Secure Sockets Layer)과 TLS(Transport Layer Security)

SSL과 TLS는 인증과 암호화를 수행하는 프로토콜이며, TLS는 SSL을 계승한 프로토콜이다. SSL/TLS를 사용하는 대표적인 프로토콜이 HTTPS이다. HTTPS는 HTTP 메시지의 안전한 송수신을 위해 개발된 프로토콜이다.

오늘날 주로 사용되는 TLS 1.3 기반 HTTPS의 동작 과정은 아래와 같다.

1. TCP 쓰리 웨이 핸드셰이크

2. TLS 핸드셰이크

   ![tls](https://csnote.net/assets/img/net/tls.png)

   클라이언트 ClientHello 메시지를 보낸다. 이 메시지는 암호화된 통신을 위해 서로 맞춰 봐야 할 정보들을 제시하는 메시지이다. 지원되는 TLS 버전, 사용 가능한 암호화 방식과 해시 함수, 키를 만들기 위해 사용할 클라이언트의 난수 등이 포함되어 있다. 이때, 사용 가능한 암호화 방식과 해시 함수를 담은 정보를 암호 스위트(cipher suite)라고 한다. 서버는 ClientHello 메시지에 대한 응답으로 ServerHello 메시지를 전송한다. ServerHello 메시지는 제시된 정보들을 선택하는 메시지이다. 따라서 이 메시지에는 선택된 TLS 버전, 암호 스위트 등의 정보, 키를 만들기 위해 사용할 서버의 난수 등이 포함되어 있다. ClientHello 메시지와 ServerHello 메시지를 주고받으면 암호화된 통신을 위해 사전 협의해야 할 정보들이 결정된다. 이렇게 결정된 정보를 토대로 서버와 클라이언트는 암호화에 사용할 키를 만들어낼 수 있다. 이것이 TLS 핸드셰이크에서의 키 교환이다. 이 단계 이후부터 클라이언트와 서버는 키로 암호화된 암호문을 주고받을 수 있게 된다.

3. 암호화된 메시지 송수신