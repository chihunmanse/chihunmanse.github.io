---
title: Chapter 6-8
tags: [BackEnd, DataBase, SQL]
sidebar_position: 2
---

## 6. 데이터베이스 객체 작성과 삭제

### 1. 데이터베이스 객체

데이터베이스 객체란 테이블이나 뷰, 인덱스 등 데이터베이스 내에 정의하는 모든 것을 일컫는 말이다.

객체의 이름을 붙일 때는 아래와 같은 제약 사항이 있다.

- 기존 이름이나 예약어와 중복하지 않는다.
- 숫자로 시작할 수 없다.
- 언더스코어(\_) 이외의 기호는 사용할 수 없다.
- 한글을 사용할 때는 더블쿼트(MySQL에서는 백쿼트)로 둘러싼다.
- 시스템이 허용하는 길이를 초과하지 않는다.

foo라는 이름의 테이블을 한번 만들면, 같은 종류의 테이블은 물론 뷰와 같은 다른 종류의 객체 역시 똑같은 이름으로 작성할 수 없다.

#### 스키마

데이터베이스 객체는 스키마라는 그릇 안에 만들어진다. 따라서 객체의 이름이 같아도 스키마가 서로 다르다면 상관없다. 어떤 것이 스키마가 되는지는 데이터베이스 제품에 따라 달라진다. MySQL에서는 CREATE DATABASE 명령으로 작성한 '데이터베이스'가 스키마가 된다.

### 2. 테이블 작성, 삭제, 변경

DDL은 데이터를 정의하는 명령으로, 스키마 내의 객체를 관리할 때 사용된다.

#### 테이블 작성

```sql
CREATE TABLE 테이블명 (
	열 정의1,
	열 정의2,
	...
)
```

열명은 열에 붙이는 이름이다. 자료형은 INTEGER나 VARCHAR 등을 지정한다. 특히 CHAR나 VARCHAR와 같은 문자열형으로 지정할 때는 최대길이를 괄호로 묶어줘야 한다.

기본값을 설정할 때는 DEFAULT로 지정하되 자료형에 맞는 리터럴로 기술한다. 마지막으로 열이 NULL을 허용할 것인지를 지정한다. NULL을 명시적으로 지정하거나 생략했을 경우는 NULL을 허용한다.

```sql
열명 자료형 [DEFAULT 기본값] [NULL|NOT NULL]
```

```sql
CREATE TABLE sample62(
	no INTEGER NOT NULL,
	a VARCHAR(30),
	b DATE);
```

#### 테이블 삭제

```sql
DROP TABLE 테이블명
```

- 데이터 행 삭제

  DELETE 명령에 WHERE 조건을 지정하지 않으면 테이블의 모든 행을 삭제할 수 있지만 행 단위로 여러 가지 내부처리가 일어나므로 삭제할 행이 많으면 처리속도가 늦어진다. 이런 경우 DDL로 분류되는 TURNCATE TABLE 명령을 사용하면 빠른 속도로 삭제할 수 있다.

  ```sql
  TRUNCATE TABLE 테이블명
  ```

#### 테이블 변경

```sql
ALTER TABLE 테이블명 변경명령
```

- 열 추가

  ```sql
  ALTER TABLE 테이블명 ADD 열 정의

  ALTER TABLE sample62 ADD newcol INTEGER;
  ```

  기존 데이터행이 존재하면 추가한 열의 값이 모두 NULL이 된다. 기본값이 지정되어 있으면 기본값으로 저장된다. NOT NULL 제약을 붙인 열을 추가하고 싶다면 먼저 NOT NULL로 제약을 건 뒤에 NULL 이외의 값으로 기본값을 지정해야한다.

- 열 속성 변경

  ```sql
  ALTER TABLE 테이블명 MODIFY 열 정의

  ALTER TABLE sample62 MODIFY newcol VARCHAR(20);
  ```

  MODIFY로 열 이름을 변경할 수 없지만, 자료형이나 기본값, NOT NULL 제약 등의 속성은 변경할 수 있다. 기존 데이터 행이 존재하는 경우, 속성 변경에 따라 데이터 역시 변환된다. 이때 만약 자료형이 변경되면 테이블에 들어간 데이터의 자료형 역시 바뀐다. 그 처리과정에서 에러가 발생하면 ALTER TABLE 명령은 실행되지 않는다.

- 열 이름 변경

  ```sql
  ALTER TABLE 테이블명 CHANGE [기존 열 이름][신규 열 정의]
  ```

  CHANGE는 열 이름뿐만 아니라 열 속성도 변경할 수 있다.

  ```sql
  ALTER TABLE sample62 CHANGE newcol c VARCHAR(20);
  ```

- 열 삭제

  ```sql
  ALTER TABLE 테이블명 DROP 열명

  ALTER TABLE sample62 DROP c;
  ```

### 3. 제약

테이블에 제약을 설정함으로써 저장될 데이터를 제한할 수 있다.

#### 테이블 작성시 제약 정의

```sql
CREATE TABLE sample631 (
	a INTEGER NOT NULL,
	b INTEGER NOT NULL UNIQUE,
	c VARCHAR(30)
);
```

위처럼 열에 대해 정의하는 제약을 '열 제약'이라 부른다.

```sql
CREATE TABLE smaple632 (
	no INTERGER NOT NULL,
	sub_no INTERGER NOT NULL,
	name VARCHAR(30),
	CONSTRAINT pkey_sample PRIMARY KEY(no, sub_no)
);
```

한 개의 제약으로 복수의 열에 제약을 설명하는 경우를 '테이블 제약'이라 부른다. 제약 이름은 CONSTRAINT 키워드를 사용해서 지정한다.

#### 제약 추가

- 열 제약 추가

  ```sql
  ALTER TABLE sample631 MODIFY c VARCHAR(30) NOT NULL;
  ```

  기존 테이블을 변경할 경우에는 제약을 위반하는 데이터가 있는지 먼저 검사한다. 만약 c 열에 NULL 값이 존재한다면 에러가 발생한다.

- 테이블 제약 추가

  ```sql
  ALTER TABLE smaple631 ADD CONSTRAINT pkey_sample631 PRIMARY KEY(a);
  ```

  단, 기본키는 테이블에 하나만 설정할 수 있다.

- 제약 삭제

  열 제약은 ALTER TABLE을 사용하여 제약을 삭제한다. 테이블 제약은 ALTER TABLE의 DROP 하부명령으로 삭제할 수 있다. (단, 기본키는 테이블당 하나만 설정할 수 있기 때문에 굳이 제약명을 지정하지 않고도 삭제할 수 있다.)

  ```sql
  ALTER TABLE sample631 DROP CONSTRAINT pkey_sample631;
  ```

#### 기본키

기본키는 테이블의 행 한 개를 특정할 수 있는 검색키이다. 기본키 제약이 설정된 테이블에서는 기본키로 검색했을 때 복수의 행이 일치하는 데이터를 작성할 수 없다. 즉, 기본키로 설정된 열이 중복하는 데이터 값을 가지면 제약에 위반된다. 기본키로 지정할 열은 NOT NULL 제약이 설정되어 있어야 한다.

- 복수의 열로 기본키 구성하기

  기본키를 구성하는 열은 복수라도 상관없다. 복수의 열을 기본키로 지정했을 경우, 키를 구성하는 모든 열을 사용해서 중복하는 값이 있는지를 검사한다.

### 4. 인덱스 구조

인덱스는 데이터베이스 객체 중 하나이며 테이블에 붙여진 색인이라 할 수 있다. 인덱스의 역할은 검색속도의 향상이다. 여기서 '검색'이란 SELECT 명령에 WHERE 구로 조건을 지정하고 그에 일치하는 행을 찾는 일련의 과정을 말한다.

인덱스는 테이블과는 별개로 독립된 데이터베이스 객체로 작성된다. 인덱스는 테이블에 의존하는 객체라 할 수 있다. 대부분의 데이터베이스에서 테이블을 삭제하면 인덱스도 같이 삭제된다.

INSERT 명령의 경우에는 인덱스를 최산 상태로 갱신하는 처리가 늘어나므로 처리속도가 떨어진다.

#### 검색에 사용하는 알고리즘

데이터베이스의 인덱스에 쓰이는 대표적인 검색 알고리즘으로는 '이진 트리'가 있으며, 그 다음으로 '해시'가 유명하다. 이진 트리는 탐색 방법이라기보다 데이터 구조에 가깝다.

- 풀 테이블 스캔

  인덱스가 지정되지 않은 테이블을 검색할 때는 풀 테이블 스캔이라 불리는 검색 방법을 사용한다. 행이 1,000건 있다면 최대 1,000번 값을 비교한다.

- 이진 탐색

  이진 탐색은 차례로 나열된 집합에 대해 유효한 검색 방법이다. 집합을 반으로 나누어 조사하는 검색방법이다. 이진 탐색은 데이터 수가 배가 되어도 비교 횟수는 1회밖에 늘어나지 않는다.

- 이진 트리

  이진 탐색은 고속으로 검색할 수 있는 탐색 방법이지만 데이터가 미리 정렬되어있어야 한다. 일반적으로는 테이블에 인덱스를 작성하면 테이블 데이터와 별개로 인덱스용 데이터가 저장장치에 만들어진다. 이때 이진 트리라는 데이터 구조로 작성된다. 검색의 진행 방법은 이진 탐색과 유사하다. 원하는 수치와 비교해서 더 크면 오른쪽 가지를, 작으면 왼쪽의 가지를 조사해 나간다.

### 5. 인덱스 작성과 삭제

인덱스는 DDL을 사용해서 작성하거나 삭제한다.

#### 인덱스 작성

```sql
CREATE INDEX 인덱스명 ON 테이블명(열명1, 열명2, ...)
```

Oracle이나 DB2 등에서 인덱스는 스키마 객체가 된다. 따라서 스키마 내에 이름이 중복하지 않도록 지정해 관리한다. 한편 SQL Server나 MySQL에서 인덱스는 테이블 내의 객체가 된다. 따라서 테이블 내에 이름이 중복되지 않도록 지정해 관리한다.

#### 인덱스 삭제

```sql
DROP INDEX 인덱스명 -- 스키마 객체의 경우

DROP INDEX 인덱스명 ON 테이블명 -- 테이블 객체의 경우
```

#### EXPLAIN

실제로 인덱스를 사용해 검색하는지를 확인하려면 EXPLAIN 명령을 사용한다. 해당 명령은 실제로 실행되지 않고 어떤 상태로 실행되는지를 데이터베이스가 설명해줄 뿐이다.

표준 SQL에는 존재하지 않는, 데이터베이스 제품 의존형 명령이다.

```sql
EXPLAIN SELECT * FROM sample62 WHERE a = 'a';
```

Possible_keys라는 곳에 사용될 수 있는 인덱스가 표시되며, key는 사용된 인덱스가 표시된다.

데이터의 종류가 적으면 적을수록 인데긋의 효율도 떨어진다. 반대로 서로 다른 값으로 여러 종류의 데이터가 존재하면 그만큼 효율이 좋아진다.

### 6. 뷰 작성과 삭제

#### 뷰

뷰는 테이블과 같은 부류의 데이터베이스 객체 중 하나이다. 본래 데이터베이스 객체로 등록할 수 없는 SELECT 명령을, 객체로서 이름을 붙여 관리할 수 있도록 한 것이 뷰이다. 뷰를 참조하면 그에 정의된 SELECT 명령의 실행결과를 테이블처럼 사용할 수 있다.

뷰를 사용함으로써 복잡한 SELECT 명령을 데이터베이스에 등록해 두었다가 나중에 간단히 실행할 수 있다. 즉, 자주 사용하거나 복잡한 SELECT 명령을 뷰로 만들어 편리하게 사용할 수 있다.

뷰는 가상 테이블이라 불리기도 한다. 뷰는 테이블처럼 데이터를 쓰거나 지울 수 있는 저장공간을 가지지 않는다. 따라서 뷰는 테이블과 달리 대량의 저장공간을 필요로 하지 않는다. 데이터베이스에 저장되는 것은 SELECT 명령뿐이기 때문이다. 다만 저장공간을 소비하지 않는 대신 CPU 자원을 사용한다. 뷰를 참조하면 뷰에 등록되어 있는 SELECT 명령이 실행된다. 실행 결과는 일시적으로 보존되며, 뷰를 참조할 때마다 SELECT 명령이 실행된다.

#### 뷰 작성과 삭제

뷰는 데이터베이스 객체이기 때문에 DDL로 작성하거나 삭제한다.

- 뷰의 작성

  ```sql
  CREATE VIEW 뷰명 AS SELECT 명령

  CREATE VIEW 뷰명(열명1, 열명2, ...) AS SELECT 명령
  ```

  CREATE VIEW의 AS 키워드는 별명을 붙일 때 사용하는 AS와는 달리 생략할 수 없다.

​ 뷰의 열 지정을 생략한 경우에는 SELECT 명령의 SELECT 구에서 지정하는 열 정보가 수집되어 자동으로 뷰의 열로 지정된다. 반대로 열을 지정한 경우에는 SELECT 구에 지정한 열보다 우선된다.

- 뷰 삭제

  ```sql
  DROP VIEW 뷰명
  ```

## 7. 복수의 테이블 다루기

### 1. 집합 연산

#### 합집합 - UNION

```sql
SELECT * FROM sample71_a
UNION
SELECT * FROM sample71_b;
```

UNION을 이용하면 여러 개의 SELECT 명령을 하나로 묶을 수 있다. 이때 각각의 SELECT 명령의 열의 내용은 서로 일치해야 한다. SELECT 명령들을 UNION으로 묶을 때 나열 순서는 합집합의 결과에 영향을 주지 않는다.

- UNION을 사용할 때의 ORDER BY

  ORDER BY를 지정할 때는 마지막 SELECT 명령에만 지정한다. ORDER BY 구에 지정하는 열은 별명을 붙여 이름을 일치시킨다.

- UNION ALL

  UNION은 합집합을 구하는 것이므로 두 개의 집합에서 중복된 요소는 제거된다. 중복을 제거하지 않고 합치는 경우에는 UNION ALL을 사용한다.

  ```sql
  SELECT * FROM sample71_a
  UNION ALL
  SELECT * FROM sample71_b;
  ```

  UNION에서는 중복된 요소가 있는지 검사하는 처리가 필요하기 때문에 UNION ALL이 성능적으로 더 유리하다.

#### 교집합과 차집합

MySQL에서는 지원되지 않지만 교집합은 INTERSECT를, 차집합은 EXCEPT를(Oracle의 경우는 MINUS) 사용한다.

### 2. 테이블 결합

테이블의 집합 연산에서는 세로(행) 방향으로 데이터가 늘어나지만 테이블 결합을 통해 가로(열) 방향으로 데이터가 늘어나는 계산을 수행할 수 있다.

#### 교차결합 (Cross Join)

```sql
SELECT * FROM 테이블명1, 테이블명2
```

FROM 구에 복수의 테이블을 지정하면 교차결합을 한다. 교차결합은 두 개의 테이블을 곱집합으로 계산한다.

#### 내부결합 (Inner Join)

```sql
SELECT * FROM 상품, 재고수
	WHERE 상품.상품코드 = 재고수.상품코드;
```

교차결합으로 계산된 곱집합에서 원하는 조합을 검색하는 것을 내부 결합이라 부른다. 최근에는 INNER JOIN 키워드를 사용한 결합방법이 일반적으로 통용된다.

```sql
SELECT * FROM 테이블명1 INNER JOIN 테이블명2 ON 결합조건

SELECT 상품.상품명, 재고수.재고수
	FROM 상품 INNER JOIN 재고수
	ON 상품.상품코드 = 재고수.상품코드;
```

구식 방법에서는 WHERE 구에 결합조건을 지정하였지만 INNER JOIN에서는 ON을 사용하여 결합조건을 지정한다.

SELECT 명령에서 복수의 테이블을 다룰 경우 어느 테이블의 열인지 정확하게 지정해야 한다. 이때 테이블명을 짧게 줄여 별명을 붙이는 경우가 많다.

A 테이블과 B 테이블을 결합했을 때, A와 B 중 어느 쪽이 하나의 행만 가지는지(일대다, 다대일) 아니면 양쪽 모두 하나의 행을 가지는지 (일대일) 등과 같은 테이블 간의 관계가 중요하다. 다른 테이블의 기본키를 참조하는 열은 외부키라 부른다.

#### 외부결합 (Outer Join)

외부결합은 어느 한 쪽에만 존재하는 데이터행을 어떻게 다룰지를 변경할 수 있는 결합 방법이다. 외부결합은 결합하는 테이블 중에 어느 쪽을 기준으로 할지 결정할 수 있다.

```sql
SELECT 상품.상품명, 재고수.재고수
	FROM 상품 LEFT JOIN 재고수
	ON 상품.상품코드 = 재고수.상품코드;
```

| 상품명 | 재고수 |
| ------ | ------ |
| A      | 200    |
| B      | 300    |
| C      | NULL   |

상품 테이블을 오른쪽에 지정하는 경우나 재고 테이블을 기준으로 삼고 싶은 경우에는 RIGHT JOIN을 사용하면 된다.

## 8. 데이터베이스 설계

### 1. 정규화

정규화란 데이터베이스의 테이블을 규정된 올바른 형태로 개선해나가는 것이다. 정규화에서는 중복하거나 반복되는 부분을 찾아내서 테이블을 분할하고 기본키를 작성해 사용하는 것을 기본 개념으로 삼는다. 하나의 데이터가 반드시 한 곳에만 저장되어 있다면 데이터를 변경하더라도 한 곳만 변경하면 되지만 정규화되지 않은 경우에는 중복해서 저장된 데이터를 검색하고 변경해야 한다.

| 주문번호 | 날짜 | 성명   | 연락처  | 주문상품     |
| -------- | ---- | ------ | ------- | ------------ |
| 1        | 1/1  | 박준용 | 010-xxx | A 1개, B 2개 |
| 2        | 1/2  | 김재진 | 016-xxx | A 2개, B 3개 |
| 3        | 2/5  | 박준용 | 010-xxx | A 3개, C 1개 |

#### 제1정규형

관계형 데이터베이스의 테이블에는 하나의 셀에 하나의 값만 저장할 수 있다. 하나의 셀에 하나의 값만 저장할 수 있도록 하고, 반복되는 부분을 세로(행) 방향으로 늘려나가는 것이 제1정규화의 1단계이다. 또 중복을 제거하는 테이블의 분할도 이루어진다.

**주문 테이블**

| 주문번호 | 날짜 | 성명   | 연락처  |
| -------- | ---- | ------ | ------- |
| 1        | 1/1  | 박준용 | 010-xxx |
| 2        | 2/1  | 김재진 | 016-xxx |
| 3        | 2/5  | 박준용 | 010-xxx |

**주문 상품 테이블**

| 주문번호 | 상품코드 | 상품명 | 개수 |
| -------- | -------- | ------ | ---- |
| 1        | 1        | A      | 1    |
| 1        | 2        | B      | 2    |
| 2        | 1        | A      | 2    |
| 2        | 2        | B      | 3    |
| 3        | 1        | A      | 3    |
| 3        | 3        | C      | 1    |

#### 제2정규형

주문 상품 테이블에서 상품명은 주문번호와 관계없이 상품코드만으로 특정할 수 있다. 이처럼 키 값을 이용해 데이터를 특정지을 수 있는 것을 함수종속성이라고 한다. 제2정규화는 부분 함수족송성을 찾아내서 테이블을 분할하는 것이다.

**주문 상품 테이블**

| 주문번호 | 상품코드 | 개수 |
| -------- | -------- | ---- |
| 1        | 1        | 1    |
| 1        | 2        | 2    |
| 2        | 1        | 2    |
| 2        | 2        | 3    |
| 3        | 1        | 3    |
| 3        | 3        | 1    |

**상품 테이블**

| 상품코드 | 상품명 |
| -------- | ------ |
| 1        | A      |
| 2        | B      |
| 3        | C      |

#### 제3정규형

제2정규화의 경우에는 기본키에 중복이 없는지 조사했다면 제3정규화에서는 기본키 이외의 부분에 중복이 없는지를 조사한다. 주문 테이블에서는 같은 사람이 여러 번 주문하는 경우 데이터가 중복된다.

**주문**

| 주문번호 | 날짜 | 고객번호 |
| -------- | ---- | -------- |
| 1        | 1/1  | 1        |
| 2        | 2/1  | 2        |
| 3        | 2/5  | 1        |

**고객**

| 고객번호 | 성명   | 연락처  |
| -------- | ------ | ------- |
| 1        | 박준용 | 010-xxx |
| 2        | 김재진 | 016-xxx |

### 2. 트랜잭션

#### 롤백과 커밋

몇 단계로 처리를 나누어 SQL 명령을 실행하는 경우에 트랜잭션을 자주 사용한다. 트랜잭션을 사용해서 데이터를 추가한다면 에러가 발생해도 트랜잭션을 롤백해서 죵료할 수 있다. 롤백하면 트랜잭션 내에서 행해진 모든 변경사항을 없었던 것으로 할 수 있다. 아무런 에러가 발생하지 않는다면 변경사항을 적용하고 트랜잭션을 종료하는데, 이때 커밋을 사용한다.

- 자동커밋

  트랜잭션을 사용해서 데이터를 추가할 때는 자동커밋을 꺼야 한다. MySQL 클라이언트에서 명령을 실행할 때는 자동커밋이 켜져 있는 상태이다. INSERT나 UPDATE, DELETE가 처리될 때마다 트랜잭션은 암묵적으로 자동커밋 상태로 되어 있다. 자동커밋을 끄기 위해서는 명시적으로 트랜잭션의 시작을 선언해야 한다.

  ```sql
  START TRANSACTION
  ```

트랜잭션을 종료하기 위해서는 변경된 내용을 적용한 후에 종료하는 커밋과 적용하지 않고 종료하는 롤백, 두 가지 방식이 있다.

```sql
COMMIT

ROLLBACK
```

트랜잭션 내에서 실행된 SQL 명령은 임시 데이터 영역에서 수행되다가, COMMIT 명령을 내리면 임시 데이터 영역에서 정식 데이터 영역으로 변경이 적용된다. ROLLBACK 명령을 내리면 임시 데이터 영역에서의 처리는 버려진다.