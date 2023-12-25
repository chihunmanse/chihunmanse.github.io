---
title: MySQL Master/Slave Replication
tags: [DataBase, MySQL, TypeORM]
sidebar_position: 1
---

## Master/Slave Replication이란?

Master/Slave Replication은 MySQL 및 MariaDB 등과 같은 DBMS에서 주로 사용되는 복제 방식 중 하나이다. 이 방식은 주로 데이터 가용성을 향상시키고, 데이터베이스의 부하 분산을 위해 사용된다.

Master와 Slave라는 용어는 데이터베이스 서버 간의 역할을 나타낸다.

- **Master**
    - Master는 읽기 및 쓰기 작업을 처리하는 주 데이터베이스 서버이다.
    - 모든 쓰기 작업(INSERT, UPDATE, DELETE 등)은 주로 Master 서버에서 이루어진다.
- **Slave**
    - Slave는 Master의 데이터를 복제하여 저장하는 서버이다.
    - 읽기 작업(SELECT 등)은 주로 Slave 서버에서 이루어진다.
    - Slave 서버는 Master 서버의 데이터를 주기적으로 동기화하여 최신 데이터로 유지된다.

### Master/Slave Replication의 장점

- **부하 분산**
    - 읽기 작업이 주로 Slave에서 처리되므로, Master는 쓰기 작업에 집중할 수 있다. 이로 인해 전체 시스템의 부하가 분산되어 성능을 향상시킬 수 있다.
- **가용성 및 장애 대응**
    - Master 서버에 문제가 생긴 경우에도 Slave 서버에서 읽기 작업을 수행할 수 있기 때문의 시스템의 가용성을 향상시키고 Master 서버의 장애를 대비할 수 있다.
- **데이터 백업**
    - Slave는 Master의 데이터를 복제하므로, Slave에는 Master의 데이터 백업이 포함되어있다. 따라서 데이터 손실을 최소화하고 복구가 용이할 수 있게 해준다.

<!--truncate-->

### MySQL 동기화 프로세스

1. **Master에 데이터 쓰기**

    - 쓰기 작업(INSERT, UPDATE, DELETE)은 Master 서버에서 된다.

2. **바이너리 로그 기록**

    - Master 서버는 쓰기 작업의 세부 정보를 바이너리 로그에 기록한다. 바이너리 로그에는 데이터 변경 사항을 나타내는 일련의 이벤트가 포함되어있다.

    - 바이너리 로그란?
      - MySQL의 바이너리 로그는 MySQL 데이터베이스에 대한 모든 변경 사항(쓰기 작업)에 대한 기록을 포함하는 파일이다. 이는 MySQL 복제 메커니즘의 중요한 구성 요소이며 데이터베이스의 데이터를 수정하는 SQL 문 시퀀스를 캡처하고 저장하는 데 사용된다. 바이너리 로그를 사용하면 데이터 복제, 특정 시점 복구 및 기타 기능을 사용할 수 있다.

3. **슬레이브의 I/O 스레드**

    - 슬레이브 서버의 I/O(Input/Output) 스레드는 마스터의 바이너리 로그에서 새로운 이벤트를 지속적으로 확인한다. I/O 스레드는 마스터로부터 복제 이벤트를 입력하는 역할을 담당한다.

4. **복제 이벤트 전송**

    - 슬레이브의 I/O 스레드는 마스터에 연결하고 마지막으로 알려진 위치(슬레이브의 릴레이 로그에 기록됨)부터 시작하는 복제 이벤트를 요청한다. 마스터는 슬레이브에 이벤트를 전송하여 응답한다.

5. **슬레이브의 릴레이 로그**

    - I/O 스레드는 수신된 복제 이벤트를 슬레이브의 릴레이 로그에 기록한다. 릴레이 로그는 복제 이벤트의 중간 저장소 역할을 한다.

6. **슬레이브의 SQL 스레드**

    - 슬레이브의 SQL 스레드는 릴레이 로그에서 복제 이벤트를 읽고 슬레이브의 로컬 데이터베이스에서 이러한 이벤트에 포함된 SQL 문을 실행함으로써 슬레이브의 데이터에 변경 사항을 적용하여 마스터의 데이터와 일치하게 만든다.

7. **복제 위치 업데이트:**

    - 복제 이벤트를 적용한 후 SQL 스레드는 슬레이브의 현재 복제 위치를 업데이트한다. 이 정보는 릴레이 로그에 저장되며 다음 복제 라운드 동안 I/O 스레드에서 사용된다.

MySQL에서 기본 복제 프로세스는 한 서버가 소스 역할을 하고 하나 이상의 다른 서버가 복제본 역할을 하는 단방향 비동기 복제이다. 따라서 쓰기 작업이 마스터에서 발생한 시간과 슬레이브에 적용되는 시간 사이에 약간의 지연이 있을 수 있다는 점을 유의해야 한다.

MySQL에서는 내장된 비동기 복제 외에도 반동기(semisynchronous) 복제가 지원된다. 반동기 복제를 사용하면 소스는 하나 이상의 복제본이 이벤트를 수신하고 기록할 때까지 기다린 다음(필요한 복제본 수는 구성 가능) 트랜잭션을 커밋한다.

```
MySQL 복제는 기본적으로 비동기식입니다. 소스는 이벤트를 바이너리 로그에 기록하고 복제본은 준비가 되면 이를 요청합니다. 소스는 복제본이 트랜잭션을 검색하고 처리했는지 여부와 시기를 알지 못하며 이벤트가 복제본에 도달한다는 보장도 없습니다. 
비동기 복제를 사용하면 소스가 충돌하는 경우 커밋된 트랜잭션이 복제본으로 전송되지 않았을 수 있습니다. 이 경우 원본에서 복제본으로 장애 조치를 수행하면 원본과 관련된 트랜잭션이 누락된 서버로 장애 조치가 발생할 수 있습니다.
완전 동기식 복제를 사용하면 소스가 트랜잭션을 커밋할 때 소스가 트랜잭션을 수행한 세션으로 돌아오기 전에 모든 복제본도 트랜잭션을 커밋해야 합니다. 완전 동기식 복제는 소스에서 모든 복제본으로 언제든지 장애 조치가 가능함을 의미합니다. 
완전 동기 복제의 단점은 트랜잭션을 완료하는 데 많은 지연이 있을 수 있다는 것입니다.
반동기식 복제는 비동기식 복제와 완전 동기식 복제 사이에 속합니다. 소스는 하나 이상의 복제본이 이벤트를 수신하고 기록할 때까지 기다린 다음(필요한 복제본 수는 구성 가능) 트랜잭션을 커밋합니다. 
소스는 모든 복제본이 수신을 확인할 때까지 기다리지 않으며 복제본의 확인만 필요하며 이벤트가 복제본 측에서 완전히 실행되고 커밋되었는지는 필요하지 않습니다. 따라서 반동기 복제는 소스가 충돌하는 경우 커밋된 모든 트랜잭션이 최소한 하나의 복제본으로 전송되었음을 보장합니다.
비동기식 복제와 비교하여 반동기식 복제는 향상된 데이터 무결성을 제공합니다. 왜냐하면 커밋이 성공적으로 반환되면 데이터가 적어도 두 곳에 존재한다는 것을 알 수 있기 때문입니다. 반동기 소스가 필요한 수의 복제본으로부터 승인을 받을 때까지 트랜잭션은 보류되고 커밋되지 않습니다.
완전 동기식 복제에 비해 반동기식 복제는 데이터 무결성에 대한 요구 사항(트랜잭션 수신을 확인하는 복제본 수)과 커밋 속도(트랜잭션을 기다려야 하기 때문에 느린 커밋 속도)의 균형을 맞추도록 구성할 수 있기 때문에 더 빠릅니다.
```

### MySQL 복제 형식

바이너리 로그에 기록된 이벤트를 마스터 서버에서 읽은 후 복제본에서 처리하기 때문에 복제가 작동한다. 이 때 복제 형식이란 마스터 서버에서 슬레이브 서버로 데이터베이스의 변경 사항을 기록하고 전송하는 데 사용되는 방식을 말한다. 복제 형식에 따라 마스터의 바이너리 로그에 기록되는 방식과 슬레이브에 적용되는 방식에 영향을 준다.

- **Statement-Based Replication (SBR)**
    - 명령문 기반 복제에서는 마스터에 대한 변경 사항이 바이너리 로그에 SQL 문으로 기록된다.
    - 데이터를 수정하는 실제 SQL문 (INSERT, UPDATE, DELETE)은 슬레이브에 복제된다.
    - 장점
        - 바이너리 로그를 사람이 읽을 수 있다.
        - 일반적으로 행 기반 복제에 비해 바이너리 로그 크기가 작다.
    - 유의사항
        - 비결정적 SQL문(NOW(), RAND())은 마스터와 슬레이브에서 서로 다른 결과를 초래할 수 있다.
        - 비결정적 기능을 복제하면 불일치가 발생할 수 있다.
- **Row-Based Replication (RBR)**
    - 행 기반 복제에서는 마스터에 대한 변경 사항이 행 변경 사항(삽입, 업데이트 또는 삭제된 행) 집합으로 바이너리 로그에 기록된다.
    - 변경의 영향을 받은 실제 행은 슬레이브에 복제된다.
    - 장점
        - 마스터에 적용된 정확한 변경 사항을 복제한다.
        - 때문에 명령문 기반 복제보다 더 결정적이다.
    - 유의사항
        - 일반적으로 명령문 기반 복제보다 바이너리 로그가 크다.
        - 바이너리 로그의 가독성이 좋지 않다.
- **Mixed-Based Replication (MBR)**
    - 혼합 기반 복제는 SQL문 유형에 따라 명령문 기반 복제와 행 기반 복제를 조합하여 사용하는 하이브리드 방식이다.
    - 장점
        - 명령문 기반 복제와 행 기반 복제의 이점을 결합한다.
        - 바이너리 로그 크기와 결정성 간의 균형을 제공한다.
    - 유의사항
        - 복제의 혼합 특성으로 인해 복잡도가 증가한다.

MySQL 5.7.7 이전에는 명령문 기반 형식이 기본값이며 MySQL 5.7.7 이상에서는 행 기반 형식이 기본값이다.

참조 : [MySQL(5.7) 공식문서](https://dev.mysql.com/doc/refman/5.7/en/replication.html)

## TypeORM에서 Master/Slave Replication 적용하기

사용 중인 데이터베이스에 Master/Slave 복제가 적용되었다는 가정하에 TypeORM을 통해 레플리케이션을 적용하는 방법을 알아보자.

```typescript
{
    type: "mysql",
        logging: true,
        replication: {
        master: {
            host: "server1",
                port: 3306,
                username: "test",
                password: "test",
                database: "test"
        },
        slaves: [{
            host: "server2",
            port: 3306,
            username: "test",
            password: "test",
            database: "test"
        }, {
            host: "server3",
            port: 3306,
            username: "test",
            password: "test",
            database: "test"
        }]
    }
}
```

레플리케이션 인스턴스와 관련하여 설정할 수 있는 옵션들은 아래와 같다.

- **canRetry**
    - true이면 연결이 실패할 때 풀클러스터가 재연결을 시도한다. 기본값 : true
- **removeNodeErrorCount**
    - 연결이 실패하면 노드의 errorCount가 증가한다. errorCount가 removeNodeErrorCount보다 크면 풀클러스터에서 노드를 제거한다. 기본값 : 5
- **restoreNodeTimeout**
    - 연결에 실패하면 다른 연결을 시도가 이루어지기 전까지 걸리는 시간(밀리초)을 지정한다. 0으로 설정시 대신 노드가 제거되고 다시 사용되지 않는다. 기본값 : 0
- **selector**
    - 슬레이브 선택 방식을 결정한다.
        - RR : 교대로 하나씩 선택 (Round-Robin)
        - RANDOM : 랜덤 함수로 선택
        - ORDER : 사용 가능한 첫 번째 노드를 선택

```typescript
{
  replication: {
    master: {...},
    slaves: [...],

    canRetry: true,
    removeNodeErrorCount: 5,
    restoreNodeTimeout: 0,
    selector: "RR"
  }
}
```

레플리케이션 설정시, 스키마 업데이트 및 쓰기 작업 및 query 함수에 의해 수행되는 모든 쿼리는 마스터 인스턴스를 사용하여 수행된다. 그리고 find 함수나 SELECT 쿼리빌더로 수행되는 모든 단순 쿼리는 랜덤한 슬레이브 인스턴스를 사용한다.

만약, 쿼리빌더로 생성된 SELECT에서 마스터를 명시적으로 사용하려면 아래와 같이 사용하면 된다.

```typescript
const masterQueryRunner = dataSource.createQueryRunner("master")
try {
    const postsFromMaster = await dataSource
        .createQueryBuilder(Post, "post", masterQueryRunner) // you can either pass QueryRunner as an optional argument with query builder
        .setQueryRunner(masterQueryRunner) // or use setQueryRunner which sets or overrides query builder's QueryRunner
        .getMany()
} finally {
    await masterQueryRunner.release()
}
```

반대로 원시쿼리(query 함수)에서 슬레이브를 사용하려면 아래처럼 쿼리러너를 명시적으로 지정하여 사용할 수 있다.

```typescript
const slaveQueryRunner = dataSource.createQueryRunner("slave")
try {
    const userFromSlave = await slaveQueryRunner.query(
        "SELECT * FROM users WHERE id = $1",
        [userId],
        slaveQueryRunner,
    )
} finally {
    return slaveQueryRunner.release()
}
```

참조 : [TypeORM 공식문서](https://typeorm.io/multiple-data-sources)