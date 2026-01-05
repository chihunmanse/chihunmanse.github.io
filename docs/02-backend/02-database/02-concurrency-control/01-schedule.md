---
title: 1. Schedule
tags: [Backend, DataBase, ConcurrencyControl, Schedule]
sidebar_position: 1
---

# 1. Schedule

**스케줄(Schedule)**은 여러 트랜잭션이 동시에 실행될 때, 각 트랜잭션이 속한 작업들의 실행 순서이다. 각 트랜잭션 내 작업들의 순서는 바뀌지 않는다.

한 명의 사용자만 DBMS에 하나의 트랜잭션을 수행하는 경우 문제가 없지만, 여러 트랜잭션이 동시에 실행되는 경우 동시성 문제가 발생할 수 있으므로 이러한 트랜잭션을 관리할 방법이 필요하기 때문에 스케줄이 필요하다.

- **직렬 스케줄 (Serial Schedule)**

  트랜잭션은 순서대로 실행되며, 하나의 트랜잭션은 다른 트랜잭션이 완료되어야만 실행되기 시작한다. 데이터 일관성을 보장하지만 성능상 비효율적이다.

  ```
  Transaction Ti    |    Transaction Tj
  --------------         --------------
      Read(A)       |
      Write(A)      |
      Commit        |
                    |       Read(B)
                    |       Write(B)
                    |       Commit
  ```

- **비직렬 스케줄 (Nonserial Schedule)**

  직렬 스케줄과 달리 비직렬 스케줄의 트랜잭션은 이전 트랜잭션이 완료될 때까지 기다리지 않고 진행할 수 있다. 성능을 높일 수 있지만 데이터 일관성을 해칠 수 있다.

  ```
  Transaction Ti    |    Transaction Tj
  --------------         --------------
     Read(A)        |
     Write(B)       |
                    |       Read(B)
                    |       Read(A)
      Commit        |
                    |       Commit
  ```

## **Serializable Schedule**

트랜잭션들이 병렬로 실행되지만, 그 결과가 어떤 Serial 스케줄과 동일한 경우를 의미한다. 즉, 병렬 실행에 따른 성능 이점을 살리면서도 결과적으로는 순차 실행과 동일한 결과를 얻을 수 있다.

```
Schedule S1 (Serial Schedule)
-------------------------------------
Transaction Ti    |    Transaction Tj
--------------         --------------
   Read(A)        |
   Write(A)       |
   Commit         |
                  |        Read(B)
                  |        Write(B)
                  |        Commit
```

```
Schedule S2 (Non-Serial Schedule)
-------------------------------------
Transaction Ti    |    Transaction Tj
--------------         --------------
   Read(A)        |
                  |        Read(B)
                  |        Write(B)
   Write(A)       |
                  |        Commit
    Commit        |
```

### Conflict Serializable

Conflict Serializable은 트랜잭션 간의 충돌(Conflict)을 고려했을 때, 그 스케줄이 어떤 Serial 스케줄과 동일한 결과를 만들어내는지를 평가하는 방법이다.

**Conflict의 정의**

두 개의 연산이 다음 조건들을 모두 충족할 때, 그 연산들을 충돌(Conflict)한다고 볼 수 있다.

1. 두 연산이 서로 다른 트랜잭션에 속함.
2. 두 연산이 같은 데이터에 접근.
3. 두 연산 중 적어도 하나가 데이터 항목에 쓰기 연산(Write)을 수행.

**Conflict Equivalent의 정의**

두 스케줄 S1과 S2가 Conflict Equivalent하기 위해서는 다음 조건을 충족해야 한다.

1. **동일한 트랜잭션 집합**: S1과 S2가 동일한 트랜잭션 집합을 포함해야 한다. 즉, 두 스케줄 모두 동일한 트랜잭션들이 동일한 작업(읽기, 쓰기 등)을 수행해야 한다.
2. **동일한 충돌 순서**: S1과 S2에서 각각의 충돌하는 연산 쌍(같은 데이터 항목에 접근하며 하나가 쓰기 연산을 포함하는 경우)의 순서가 동일해야 한다. 즉, S1에서 트랜잭션 Ti가 Tj의 연산을 선행하면, S2에서도 Ti가 Tj의 연산을 선행해야 한다.

**Conflict Equivalent의 예**

예를 들어, 두 개의 스케줄 S1과 S2가 있다고 가정했을 때

- S1:
  - T1:Read(A)
  - T2:Write(A)
  - T1:Write(B)
  - T2:Read(B)
- S2:
  - T1:Read(A)
  - T1:Write(B)
  - T2:Write(A)
  - T2:Read(B)

이 두 스케줄에서 각 트랜잭션이 동일한 연산 집합을 수행하고 있지만, 연산의 순서가 다르다.

- S1에서 T1의 Read(A)와 T2의 Write(A)는 충돌하며, T1이 먼저 실행된다.
- S2에서도 동일한 연산들이 존재하지만, T2의 Write(A)가 T1의 Read(A) 후에 실행된다.

따라서, 이 두 스케줄은 충돌 순서가 다르므로 Conflict Equivalent하지 않다.

**어느 한 스케줄이 Serial 스케줄과 Conflict Equivalent하다면, 이 스케줄은 Conflict Serializable하다라고 볼 수 있다.**

### View Serializable

View Serializable은 Conflict Serializable보다 더 일반적인 개념으로, 트랜잭션 간의 충돌뿐만 아니라 트랜잭션들이 데이터를 보는 방법을 고려하여, 스케줄이 어떤 Serial 스케줄과 동일한 결과를 만들어내는지를 평가하는 방법이다.

**View의 정의**

View는 각 트랜잭션이 데이터를 보는 방식에 따라 정의된다. 특정 트랜잭션이 다른 트랜잭션의 결과에 어떻게 의존하는지를 평가한다. 두 스케줄이 View Equivalent하려면 아래의 조건을 충족해야한다.

1. 처음 읽은 값이 두 스케줄에서 동일해야 한다.
2. 한 트랜잭션이 다른 트랜잭션의 쓰기 연산 후 그 데이터를 읽었다면, 다른 스케줄에서도 그 읽기와 쓰기 순서가 동일하게 유지되어야 한다.
3. 스케줄의 끝에서 각 데이터 항목의 최종 쓰기 연산은 두 스케줄에서 동일한 트랜잭션에 의해 수행되어야 한다.

**모든 Conflict Serializable 스케줄은 View Serializable이지만, 모든 View Serializable 스케줄이 Conflict Serializable인 것은 아니다.**

## Recoverable Schedule

트랜잭션들이 동시에 실행될 때 데이터의 무결성을 보장하면서도, 트랜잭션이 실패하더라도 데이터를 안전하게 복구할 수 있는지를 평가하는 개념이다. Recoverable 스케줄은 하나의 트랜잭션이 읽은 데이터가 다른 트랜잭션에 의해 쓰여진 것이라면, 읽은 트랜잭션이 커밋(commit)되기 전에 그 쓰기 연산을 한 트랜잭션이 반드시 커밋되어야 한다는 원칙을 따른다. 이 원칙을 지키지 않으면, 트랜잭션이 실패했을 때 데이터의 일관성을 보장할 수 없게 된다.

```
 T1      T2
------  ------
R(A)
W(A)
         W(A)
         R(A)
commit
        commit
```

T2는 T1이 쓴 데이터 A를 읽고 T2가 T1 이후에 커밋하는 경우, 이 스케줄을 Recoverable 스케줄이라고 할 수 있다.

**Unrecoverable Schedule**

스케줄 내에서 커밋된 트랜잭션이 롤백된 다른 트랜잭션에서 write 했던 데이터를 읽은 경우 (T1이 write 했던 데이터를 T2에서 읽고 T2가 커밋되었는데, 이후에 T1이 롤백되는 경우)
T1의 작업은 더 이상 유효하지 않으므로 T1이 write 했던 데이터를 읽은 T2도 롤백되어야 하지만 T2는 이미 커밋된 상황으로 ACID 중 Durability 속성에 따라서 롤백할 수가 없다.

```
    T1    |    T2
----------  --------
    R(A)  |
    W(A)  |
          |    W(A)
          |    R(A)
          |   Commit
   Abort  |
```

### Cascading Schedule

**Cascading Schedule**은 트랜잭션이 다른 트랜잭션의 커밋되지 않은 쓰기 연산 결과를 읽는 것이 허용되는 스케줄이다. 이로 인해 특정 트랜잭션의 실패가 다른 트랜잭션의 결과에 영향을 미칠 수 있다. 스케줄에서 한 트랜잭션이 실패하면 다른 여러 종속 트랜잭션이 롤백되거나 중단되어야 한다.

```
T1    |    T2    |    T3
------  --------   --------
R(A)  |          |
W(A)  |          |
      |   R(A)   |
      |   W(A)   |
      |          |   R(A)
      |          |   W(A)
Failure|         |
```

T1이 실패하면 T2, T3도 롤백되어야 한다.

### Cascadeless Schedule

**Cascadeless Schedule**은 트랜잭션이 다른 트랜잭션의 커밋되지 않은 쓰기 연산 결과를 읽지 못하도록 제한하여, 트랜잭션 실패로부터의 복구를 단순화하는 스케줄이다.

```
  T1    |    T2    |    T3
-------   --------   -------
  R(A)  |          |
  W(A)  |          |
 Commit |          |
        |   R(A)   |
        |   W(A)   |
        |  Commit  |
        |          |   R(A)
        |          |   W(A)
        |          |  Commit
```

Cascadeless Schedule에서도 발생할 수 있는 문제가 있다.

```
  T1    |    T2    |
-------   --------
  W(A)  |          |
        |   W(A)   |
        |  Commit  |
 Abort  |          |
        |          |
        |          |
```

T2가 커밋되지 않은 T1 데이터에 대해서 쓰기 작업을 수행했을 때, T1이 롤백되면 T2의 쓰기 연산 결과도 사라지게 된다.

### Strict Schedule

**Strict Schedule**은 가장 강력한 조건을 가진 Recoverable Schedule이다. 이 스케줄에서는 트랜잭션이 다른 트랜잭션의 커밋되지 않은 쓰기 연산 결과를 읽거나 쓸 수 없다. 즉, 트랜잭션이 수정한 데이터는 해당 트랜잭션이 커밋될 때까지 다른 트랜잭션이 접근할 수 없다.

```
    T1    |    T2
----------  ---------
    R(A)  |
          |    R(B)
    W(A)  |
   Commit |
          |    W(A)
          |    R(A)
          |   Commit
```

---

**참조**

https://levelup.gitconnected.com/the-schedule-in-the-dbms-2d8c6f19720d

https://www.youtube.com/watch?v=DwRN24nWbEc&list=PLcXyemr8ZeoREWGhhZi5FZs6cvymjIBVe&index=15

https://www.youtube.com/watch?v=89TZbhmo8zk&list=PLcXyemr8ZeoREWGhhZi5FZs6cvymjIBVe&index=16
