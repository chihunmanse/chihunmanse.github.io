---
title: Chapter 1-5
tags: [BackEnd, DataBase, SQL]
sidebar_position: 1
---

## 1. 데이터베이스와 SQL

### 1. 데이터베이스

데이터란 컴퓨터 안에 기록되어 있는 숫자를 의미하며, 이러한 데이터의 집합을 데이터베이스라고 한다.
데이터베이스의 데이터는 하드디스크나 플래시메모리(SSD) 등 비휘발성 저장장치에 저장한다.

#### DB와 DBMS

- 데이터베이스는 저장장치 내에 정리되어 저장된 데이터의 집합이고, 이를 효율적으로 관리하는 소프트웨어를 ‘데이터베이스 관리 시스템 (Database Management System)’, 약자로 DBMS라 부른다.
- DBMS와 같은 전용 소프트웨어가 필요한 이유

  - 생산성

    어떤 시스템에서든지 데이터 검색, 추가, 삭제, 갱신과 같은 처리가 이루어지는데 이와 같은 기본 기능을 DBMS가 제공한다. 시스템을 구축할 때 기본 기능부터 구현할 필요가 없으므로 비용 효율적이다.

  - 기능성

    DBMS는 데이터베이스를 다루는 기능을 많이 제공한다. 복수 유저의 요청에 대응하거나, 대용량의 데이터를 저장하고 고속으로 검색하는 기능을 제공하기도 한다. 나아가 데이터베이스 관리 기능을 유저가 확장할 수도 있어 유연하게 시스템을 개발할 수 있다.

  - 신뢰성

    대규모 데이터베이스는 많은 요청에 대응할 수 있도록 만들어져 있다. DBMS는 컴퓨터 여러 대를 두고, 소프트웨어를 통해 확장성과 부하 분산을 구현한다. 이를 보통 ‘클러스터 구성’ 또는 ‘스케일 아웃’이라 부른다.
    또한, 많은 DBMS가 데이터베이스의 데이터를 다른 저장장치로 내보내거나, 반대로 데이터베이스 안에 데이터를 집어넣는 등의 기능을 갖추고 있다. 이런 기능을 통해 데이터베이스를 간단하게 백업할 수 있다.

#### SQL

- 여러 데이터베이스 종류 중에 ‘관계형 데이터베이스 관리 시스템(RDBMS: Relational Database Management System)’ 을 조작할 때 사용하는 언어가 SQL이다.

- SQL은 IBM이 개발한 SEQUEL이라는 관계형 데이터베이스 조작용 언어를 기반으로 만들어졌다.

- SQL 명령의 종류

  - DML

    Data Manipulation Language의 약자. 데이터베이스에 새롭게 데이터를 추가하거나 삭제하거나 내용을 갱신하는 등, 데이터를 조작할 때 사용한다.

  - DDL

    Data Definition Language의 약자로 데이터를 정의하는 명령어. 데이터베이스는 데이터베이스 객체라는 데이터 그릇을 이용하여 데이터를 관리하는데, 이 같은 객체를 만들거나 삭제하는 명령어이다.

  - DCL

    Data Control Language의 약자로 데이터를 제어하는 명령어. DCL에는 트랜잭션을 제어하는 명령과 데이터 접근권한을 제어하는 명령이 포함되어 있다.

### 2. 다양한 데이터베이스

#### 데이터베이스 종류

- 계층형 데이터베이스

  폴더와 파일 등의 계층 구조로 데이터를 저장하는 방식의 데이터베이스이다. 하드디스크나 DVD 파일시스템을 이러한 계층형 데이터베이스라고 할 수 있다.

- 관계형 데이터베이스

  ‘관계 대수’에 착안하여 고안한 데이터베이스이다. 행과 열을 가지는 표 형식 데이터를 저장하는 형태의 데이터베이스를 가리킨다.

  이때 데이터베이스 안의 데이터는 SQL 명령어로 조작할 수 있다.

- 키-벨류 스토어

  키와 그에 대응하는 값이라는 단순한 형태의 데이터를 저장하는 데이터베이스이다. 키와 밸류의 조합은 연상배열이나 해시 테이블에서 자주 볼 수 있다. NoSQL(Not only SQL)이라는 슬로건으로부터 생겨난 데이터베이스로, 열 지향 데이터베이스라고도 불린다.

#### RDBMS 제품

- Oracle

  Oracle 데이터베이스는 오라클에서 개발한 RDBMS이다. 현재 가장 많이 쓰이는 RDBMS 중에 하나이다.

- DB2

  IMB이 개발한 DB2는 Oracle처럼 역사가 오래된 RDBMS이다. 다만 오라클이 유닉스 워크스테이션 중심이었던 것과 달리, DB2는 발표된 이래 한동안 IBM 컴퓨터에서만 구동되었다. 이후 유닉스나 윈도우 등의 플랫폼에서도 DB2를 구동할 수 있게 되었지만 시장 점유율을 확대할 수 없었다.

- SQL Server

  윈도우를 개발한 마이크로소프트가 개발한 RDBMS로, 윈도우 플랫폼에서만 동작한다.

- PostgreSQL

  오픈소스 커뮤니티가 개발한 RDBMS이다. 기반이 되는 RDBMS는 캘리포니아 대학교 버클리 캠퍼스에서 탄생했는데, 실험적인 기능이 포함되어있거나 독특한 구조를 가지기도 한다.

- MySQL

  마찬가지로 오픈소스 커뮤니티에서 태어난 RDBMS이다. 세상에 나올 당시만 해도 경량 데이터베이스라는 점을 강조하며 필요한 최소한의 기능만을 갖추었지만 시간이 지나면서 기능이 확장되었다.

- SQLite

  오픈소스 커뮤니티에서 태어났으며 임베디드 시스템에 자주 쓰이는 작은 RDBMS이다.

## 2. 테이블에서 데이터 검색

### 1. SELECT 명령 구문

SELECT는 DML에 속하는 명령으로 SQL에서 자주 사용된다. SELECT 명령으로 데이터베이스의 데이터를 읽어올 수 있다.

```sql
SELECT * FROM sample21; // 애스터리스크(*)는 모든 열을 말한다.
```

FROM은 처리 대상 테이블을 지정하는 키워드이다. FROM 뒤에 테이블명을 지정한다.

SQL 명령은 키워드에 의해 ‘구’라는 단위로 나눌 수 있다. 위 명령의 경우 SELECT 구와 FROM 구로 나눌 수 있다. SELECT 명령은 여러 개의 구로 구성된다.

#### 예약어와 데이터베이스 객체명

- SELECT와 FROM은 구를 결정하는 키워드이자 예약어이다.
- 같은 이름의 데이터베이스 객체를 만들 수 없다. 예를 들면 sample21이 기존 데이터베이스 내에 존재하는 테이블이므로, sample21이라는 동일한 이름으로 새로운 테이블을 만들 수 없다.
- 통상적으로 데이터베이스 객체명에는 예약어와 동일한 이름을 사용할 수 없다. 예를 들면 ‘SELECT’라는 이름의 테이블은 만들 수 없다.
- 예약어와 데이터베이스 객체명은 대소문자를 구별하지 않는다.

### 2. 테이블 구조 참조하기

DESC 명령으로 테이블에 어떤 열이 정의되어 있는지 알 수 있다. (DESC는 표준 SQL 명령이 아니다.)

#### 자료형

- INTEGER 형
  - 정수값을 저장할 수 있는 자료형 (소수점은 포함할 수 없다.)
- CHAR 형
  - 문자열을 저장할 수 있는 자료형
  - 문자열형에서는 열의 최대 길이를 지정해야 한다. CHAR(10)으로 자료형을 지정했을 경우 최대 10문자로 된 문자열을 저장할 수 있으며 11문자로 된 문자열은 저장할 수 없다.
  - CHAR형은 고정된 길이로 데이터가 저장된다. 그에 따라 ‘고정 길이 문자열’ 자료형이라고 한다. 길이가 고정되기 때문에 최대 길이보다 작은 문자열을 저장할 경우 공백문자로 나머지를 채운 후 저장하게 된다.
- VARCHAR 형
  - 문자열을 저장할 수 있는 자료형
  - 최대 길이를 지정하는 점은 CHAR 형과 같다. 단 CHAR 형과는 달리 데이터 크기에 맞춰 저장공간의 크기도 변경된다. 그에 따라 ‘가변 길이 문자열’ 자료형이라고 한다.
- DATE 형
  - 날짜값을 저장할 수 있는 자료형
- TIME 형
  - 시간을 저장할 수 있는 자료형

### 3. 검색 조건 지정하기

```sql
SELECT 열1, 열2 FROM 테이블명 WHERE 조건식
```

행을 선택할 때는 WHERE 구를 사용하며, 열을 선택할 때는 SELECT 구를 사용한다.

#### SELECT 구에서 열 지정하기

```sql
SELECT 열1, 열2 FROM 테이블명
```

열은 위의 구문처럼 ,를 이용하여 구분 지으며 여러 개를 지정할 수 있다. 지정한 열만 결괏값으로 표시된다.

‘SELECT FROM sample21;’ 과 같이 열을 전혀 지정하지 않으면 구문 에러가 발생한다.

또한 테이블에 존재하지 않는 열을 지정해도 에러가 발생한다.

열 지정 순서는 임의로 정할 수 있다. 결과는 지정한 열의 순서대로 표시된다.

#### WHERE 구에서 행 지정하기

```sql
SELECT 열 FROM 테이블명 WHERE 조건식
```

많은 행 속에서 필요한 데이터만 검색하기 위해서는 WHERE 구를 사용한다.

WHERE 구는 FROM 구 뒤에 표기한다. 예약어 ‘WHERE’ 뒤에 검색 조건을 표기한다.

#### 구의 순서와 생략

- SQL에서는 구의 순서가 정채져 있어 바꿔적을 수 없다.

  SELECT 구 → WHERE 구 → FROM 구의 순으로 적으면 에러가 발생한다.

- 구에는 WHERE 구처럼 생략 가능한 것도 있다.

  WHERE 구를 생략한 경우는 테이블 내의 모든 행이 검색 대상이 된다.

#### 조건식

- 조건식은 ‘열과 연산자, 상수로 구성되는 식’이다.

- 조건식은 참 또는 거짓의 진리값을 반환하는 식으로 비교 연산자를 사용해 표현한다.

  ```sql
  no=2 // 열 + 연산자 + 상수
  ```

- = 연산자는 서로 같은 값인지를 비교하고 <\> 연산자는 서로 다른 값인지를 비교하는 연산자이다.

- 수치형 조건식의 경우 비교할 숫자를 그대로 조건식에 표기한다.

- 문자열형을 비교하는 경우는 싱글쿼트(’’)로 둘러싸 표기해야한다.

- 날짜시간형의 경우에도 싱글쿼트로 둘러싸 표기한다. 이때 연월일을 하이픈(-)으로 구분하고 시각은 시분초를 콜론(:)으로 구분하여 표기한다.

#### NULL 값 검색

- = 연산자로 NULL을 검색할 수는 없다.
- NULL 값을 검색할 때는 = 연산자가 아닌 IS NULL을 사용한다. IS NULL은 술어로 연산자의 한 종류이다.

  ```sql
  SELECT * FROM sample21 WHERE birthday IS NULL;
  ```

- 좌변 항목의 값(birthday)이 NULL인 경우 참을 반환한다.
- 반대로 NULL 값이 아닌 행을 검색하고 싶을 때는 IS NOT NULL을 사용하면 된다.

### 4. 조건 조합하기

```sql
조건식1 AND 조건식2
조건식1 OR 조건식2
NOT 조건식
```

조건식을 조합해 사용할 경우 복수의 조건을 WHERE 구로 지정한다. 조합할 때는 AND, OR, NOT 3가지 방법을 사용할 수 있다.

#### AND로 조합하기

- AND는 논리 연산자의 하나로 좌우에 항목이 필요한 이항 연산자가 된다. 좌우의 식 모두 참일 경우 참을 반환한다.
- AND 연산자는 논리곱을 계산하는 논리연산자이다.

#### OR로 조합하기

- OR 또한 논리 연산자의 하나로 좌우 항목이 모두 필요한 이항 연산자이다.
- OR 연산은 조건을 만족하는 행을 집합으로 표현했을 때, 이 집합들을 합한 부분, 즉 합집합으로 계산할 수 있다.
- OR 연산자는 논리합을 계산하는 논리연산자이다.

#### AND와 OR를 사용할 경우 주의할 점

```sql
SELECT * FROM sample24 WHERE no=1 OR 2;
```

상수 2는 논리 연산으로 항상 참이 되기 때문에 결과적으로 모든 행을 반환하게 된다.

```sql
SELECT * FROM sample24 WHERE no=1 OR no=2; // 올바른 조건식
```

#### 연산자의 우선순위

- OR 보다 AND 쪽이 우선순위가 높다.

  ```sql
  SELECT * FROM sample24 WHERE a=1 OR a=2 AND b=1 OR b=2;
  // WHERE a=1 OR (a=2 AND b=1) OR b=2
  ```

- 따라서 일반적으로 OR 조건식은 괄호로 묶어 지정하는 경우가 많다.

#### NOT으로 조합

```sql
NOT 조건식
```

- NOT 연산자는 오른쪽에만 항목을 지정하는 단항 연산자이다. 오른쪽에 지정한 조건식의 반대 값을 반환한다.

  ```sql
  SELECT * FROM sample24 WHERE NOT(a<>0 OR b<>0);

  // a 열이 0이 아니거나 b 열이 0이 아닌 행을 제외한 나머지 행을 검색
  ```

### 5. 패턴 매칭에 의한 검색

```sql
열 LIKE 패턴
```

= 연산자로 검색하는 경우는 셀의 데이터 값이 완전히 동일한지를 비교한다.

특정 문자나 문자열이 포함되어 있는지 검색하는 경우 사용하는 방법을 ‘패턴 매칭’ 또는 ‘부분 검색’이라고 한다.

#### LIKE로 패턴 매칭하기

- LIKE 술어는 이항 연산자처럼 항목을 지정한다. 왼쪽에는 매칭 대상을 지정하고 오른쪽에는 패턴을 문자열로 지정한다. 단, 수치형 상수는 지정할 수 없다.
- 패턴을 정의할 때는 아래와 같은 메타문자를 사용할 수 있다.

  ```sql
  %_
  ```

- &는 임의의 문자열을 의미하며, \_는 임의의 문자 하나를 의미한다.

- 패턴을 정의할 때는 메타문자를 여러 개 사용할 수 있다.

- 메타문자를 전혀 정의하지 않아도 문제는 없지만, 완전 일치로 검색되므로 LIKE를 사용하는 의미가 없다.

- 전방일치

  ```sql
  SELECT * FROM sample25 WHERE text LIKE 'SQL%'
  ```

- 후방일치

  ```sql
  SELECT * FROM sample25 WHERE text LIKE '%SQL'
  ```

- 중간일치

  ```sql
  SELECT * FROM sample25 WHERE text LIKE '%SQL%'
  ```

- %는 빈 문자열과도 매치한다.

- LIKE로 ‘%’ 나 ‘\_’ 를 검색하는 경우에는 \을 앞에 붙인다.

- 문자열 상수 안에 ‘를 포함하고 싶을 경우에는 ‘를 2개 연속해서 기술하는 것으로 이스케이프 처리를 할 수 있다. 예를 들면 ‘It’s’라는 문자열을 문자열 상수로 표기하면 ‘It’’s’로 쓴다.

## 3. 정렬과 연산

### 1. 정렬 - ORDER BY

SELECT 명령의 ORDER BY 구를 사용하여 검색결과의 행 순서를 바꿀 수 있다.

```sql
SELECT 열명 FROM 테이블명 WHERE 조건식 ORDER BY 열명
```

ORDER BY 구를 지정하지 않을 경우에는 데이터베이스 내부에 저장된 순서로 반환된다.

ORDER BY를 이용해 행 순서를 바꿀 수 있지만 이는 어디까지나 서버에서 클라이언트로 행 순서를 바꾸어 결과를 반환하는 것뿐, 저장장치에 저장된 데이터의 행 순서를 변경하는 것은 아니다.

#### ORDER BY로 검색 결과 정렬하기

- 지정된 열의 값에 따라 행 순서가 변경된다. 이때 ORDER BY 구는 WHERE 구 뒤에 지정한다.

- 검색 조건이 필요 없는 경우에는 WHERE 구를 생략하는데 이때 ORDER BY 구는 FROM 뒤에 지정한다.

- 내림차순 정렬시 열명 뒤에 DESC를 붙여 지정한다.

  ```sql
  SELECT 열명 FROM 테이블명 ORDER BY 열명 DESC
  ```

- 오름차순 정렬시 열명 뒤에 ASC를 붙여 지정한다. (생략 가능하다.)

  ```sql
  SELECT 열명 FROM 테이블명 ORDER BY 열명 ASC
  ```

- DESC는 descendant(하강), ASC는 ascendant(상승)의 약자이다.

#### 대소관계

- ORDER BY로 정렬할 때는 값의 대소관계가 중요하다. 수치형 데이터와 날짜시간형 데이터는 숫자 크기로 대소관계를 판별한다.
- 문자열형 데이터의 대소관계는 사전식 순서에 의해 결정된다. 알파벳, 한글 순이며 한글은 자음 모음순으로 문자열의 순서를 결정한다.
- 사전식 순서에서 주의할 점
  - 문자열형 열에 숫자를 저장하면 문자로 인식되어 대소관계의 계산 방법이 달라진다.

### 2. 복수의 열을 지정해 정렬하기

```sql
SELECT 열명 FROM 테이블명 WHERE 조건식 ORDER BY 열명1 [ASC|DESC], 열명2 [ASC|DESC]
```

ORDER BY로 행을 정렬하는 경우 같은 값을 가진 행의 순서는 일정하지 않고 데이터베이스 서버의 당시 상황에 따라 어떤 순서로 행을 반환할지 결정된다.

ORDER BY 구에는 복수로 열을 지정할 수 있다. SELECT 구에서 열을 지정한 것처럼 콤마(,)로 열명을 구분해 지정하면 된다.

정렬 순서는 지정한 열명의 순서를 따른다. 이때 값이 같아 순서를 결정할 수 없는 경우에는 다음으로 지정한 열명을 기준으로 정렬하는 식으로 처리된다.

#### NULL 값의 정렬순서

- ORDER BY로 지정한 열에서 NULL 값을 가지는 행은 가장 먼저 표시되거나 가장 나중에 표시된다. NULL에 대한 대소비교 방법은 표준 SQL에도 규정되어 있지 않아 데이터베이스 제품에 따라 기준이 다르다. MySQL의 경우는 NULL 값을 가장 작은 값으로 취급해 ASC(오름차순)에서는 가장 먼저, DESC(내림차순)에서는 가장 나중에 표시한다.

### 3. 결과 행 제한하기 - LIMIT

```sql
SELECT 열명 FROM 테이블명 LIMIT 행수 [OFFSET 시작행]
```

LIMIT 구는 표준 SQL은 아니다. MySQL과 PostgreSQL에서 사용할 수 있는 문법이라는 점에 주의해야한다. LIMIT 구는 SELECT 명령의 마지막에 지정하는 것으로 WHERE 구나 ORDER BY 구의 뒤에 지정한다.

```sql
SELECT 열명 FROM 테이블명 WHERE 조건식 ORDER BY 열명 LIMIT 행수
```

LIMIT 다음에는 최대 행수를 수치로 지정한다. 만약 테이블에 하나의 행만 있다면 LIMIT 3을 지정해도 1개의 행이 반환된다.

#### 정렬한 후 제한하기

- LIMIT와 WHERE은 기능과 내부처리 순서가 전혀 다르다. LIMIT는 반환활 행수를 제한하는 기능으로, WHERE 구로 검색한 후 ORDER BY로 정렬한 뒤 최종적으로 처리된다.

#### LIMIT를 사용할 수 없는 데이터베이스에서의 행 제한

- SQL Server에서는 LIMIT와 비슷한 기능을 하는 ‘TOP’을 사용할 수 있다.

  ```sql
  SELECT TOP 3 * FROM sample33;
  ```

- Oracle에는 LIMIT과 TOP 대신 ROWNUM이라는 열을 사용해 WHERE 구로 조건을 지정하여 행을 제한할 수 있다.

  ```sql
  SELECT * FROM sample33 WHERE ROWNUM <= 3;
  ```

  ROWNUM으로 행을 제한할 때는 WHERE 구로 지정하므로 정렬하기 전에 처리되어 LIMIT로 행을 제한한 경우와 결괏값이 다르다.

#### 오프셋 지정

```sql
SELECT * FROM sample33 LIMIT 3 OFFSET 0;
```

LIMIT 구의 OFFSET은 생략 가능하며 기본값은 0이다.

### 4. 수치 연산

SQL은 데이터베이스를 조작하는 언어이지만 컴퓨터를 조작하는 언어이기도 하므로 기본적인 계산기능을 포함한다.

| 연산자 | 연산   |
| ------ | ------ |
| +      | 덧셈   |
| -      | 뺼셈   |
| \*     | 곱셈   |
| /      | 나눗셈 |
| %      | 나머지 |

\*는 모든 열을 의미하는 메타 문자이지만 연산자로도 사용할 수 있다.

SELECT 구와 WHERE 구 안에서도 산술 연산자를 사용해 연산할 수 있다.

```sql
SELECT 식 1, 식 2... FROM 테이블명
SELECT *, price * quantity FROM sample34;
```

#### 열의 별명

price \* quantity 식이 amount라는 별명 붙이기

```sql
SELECT *, price * quantity AS amount FROM sample34;
```

별명은 예약어 AS를 사용해 지정한다. SELECT 구에서는 콤마(,)로 구분해 복수의 식을 지정할 수 있으며 각각의 식에 별명을 붙일 수 있다.

키워드 AS는 생략 가능하다. 에일리어스(alias)라고도 불리는 별명은 영어, 숫자, 한글 등으로 지정할 수 있다. 단 별명을 한글로 지정하는 경우에는 여러 가지로 오작동하는 경우가 많으므로 더블쿼트(MySQL에서는 백쿼트)로 둘러싸서 지정한다. 이 룰은 데이터베이스 객체의 이름에 ASCII 문자 이외의 것을 사용할 경우에 해당한다.

```sql
SELECT price * quantity "금액" FROM sample34;
```

더블쿼트로 둘러싸면 명령구문을 분석할 때 데이터베이스 객체의 이름이라고 간주한다. 한편 싱글쿼트로 둘러싸는 것은 문자열 상수이다.

앞서 예약어와 같은 이름은 지정할 수 없다고 했지만 더블쿼트로 둘러싸서 지정하면 사용할 수 있다.

```sql
SELECT price * quantity AS "SELECT" FROM sample34;
```

(더블쿼트로 묶지 않았을 경우) 이름을 붙일 때는 숫자로 시작할 수 없다. 수치형 상수를 명령 안에서 사용할 경우에는 쿼트로 묶지 않고 숫자만 입력한다. 이때 이름이 숫자로 시작한다면 그것이 수치형 상수를 의미하는 것인지 데이터베이스 객체명을 의미하는 것인지 구별할 수 없기 때문이다.

#### WHERE 구에서 연산하기

```sql
SELECT *, price * quantity AS amount FROM sample34 WHERE price * quantity >= 2000;
```

여기에서 price \* quantity를 계산할 때 SELECT 구에서 amount라는 별명을 붙였으므로 WHERE 구에도 amount로 지정하면 되지 않을까 생각할 수 있지만 실제로 명령을 실행해 보면 amount라는 열은 존재하지 않는다는 에러가 발생한다.

- **WHERE 구와 SELECT 구의 내부처리 순서**
  - WHERE 구에서의 행 선택, SELECT 구에서의 열 선택은 데이터베이스 서버 내부에서 WHERE 구 → SELECT 구의 순서로 처리된다. 표준 SQL에는 내부처리 순서가 따로 정해져 있지 않지만 WHERE → SELECT 순서로 내부 처리를 하는 데이터베이스가 많다. 따라서 WHERE 구로 행이 조건에 일치하는지 아닌지를 먼저 조사한 후에 SELECT 구에 지정된 열을 선택해 결과로 반환하는 식으로 처리한다.
  - 별명은 SELECT 구문을 내부 처리할 때 비로소 붙여진다. 즉, WHERE 구의 처리는 SELECT 구보다 선행되므로 WHERE 구에서 사용한 별칭은 아직 내부적으로 지정되지 않은 상태가 되어 에러가 발생한다.

#### NULL 값의 연산

- C나 PHP 언어에서는 NULL이 0으로도 처리되지만 SQL에서는 NULL 값이 0으로 처리되지 않는다.
  즉 NULL + 1의 결과값은 1이 아닌 NULL이다. 즉 SQL에서 NULL로 연산하면 결과는 NULL이 된다.

#### ORDER BY 구에서 연산하기

```sql
// ORDER BY 구에서 금액을 계산하고 내림차순으로 정렬하기
SELECT *, price * quantity AS amount FROM sample34 ORDER BY price * quantity DESC;
```

- **ORDER BY는 서버에서 내부적으로 가장 나중에 처리된다.** 즉, SELECT 구보다 나중에 처리되기 때문에 SELECT 구에서 지정한 별명을 ORDER BY에서도 사용할 수 있다.

  ```sql
  SELECT *, price * quantity AS amount FROM sample34 ORDER BY amount DESC;
  ```

#### 함수

연산자 외에 함수를 사용해 연산할 수도 있다.

- ROUND 함수

  ```sql
  SELECT amount, ROUND(amount) FROM sample341;
  ```

  ROUND 함수는 기본적으로 소수점 첫째 자리를 기준으로 반올림한 값을 반환한다. 이때 ROUND 함수의 두 번째 인수로 반올림할 자릿수를 지정할 수 있다. 해당 인수를 생략하는 경우는 0으로 간주되어, 소수점 첫째 자리를 반올림한다. 1을 지정하면 소수점 둘째 자리를 반올림한다.

  음수로 지정해 정수부의 반올림할 자릿수도 지정할 수 있다. -1을 지정하면 1단위, -2를 지정하면 10단위를 반올림할 수 있다. 반올림 외에 버림을 하는 경우에는 TRUNCATE 함수로 계산할 수 있다.

### 5. 문자열 연산

#### 문자열 결합

| 연산자/함수 | 데이터베이스            |
| ----------- | ----------------------- |
| +           | SQL Server              |
| \|\|        | Oracle, DB2, PostgreSQL |
| CONCAT      | MySQL                   |

문자열로 결합한 결과는 문자열형이 된다.

#### SUBSTRING 함수

SUBSTRING 함수는 문자열의 일부분을 계산해서 반환해주는 함수이다.

```sql
// 앞 4자리 추출
SUBSTRING('20140125001', 1, 4) // '2014'

// 5째 자리부터 2자리 추출
SUBSTRING('20140125001', 5, 2) // '01'
```

#### TRIM 함수

TRIM 함수는 문자열의 앞뒤로 여분의 스페이스가 있을 경우 제거해주는 함수로 문자열 도중에 존재하는 스페이스는 제거되지 않는다. 고정길이 문자열형에 대해 많이 사용하는 함수이다. 인수를 지정하는 것으로 스페이스 이외의 문자를 제거할 수도 있다.

#### CHARACTER_LENGTH 함수

CHARACTER_LENGTH 함수는 문자열의 길이를 계산해 돌려주는 함수이다. 문자열의 길이는 문자 단위로 계산되어 수치로 반환된다.

### 6. 날짜 연산

날짜, 시간 데이터를 저장하는 방법은 데이터베이스 제품에 따라 다르다. 날짜와 시간 전부를 저장할 수 있는 자료형을 지원하거나, 혹은 날짜는 DATE 형, 시간은 TIME 형, 날짜와 시간은 DATETIME 형과 같이 세분화해 지원하는 데이터베이스 제품도 있다.

#### 시스템 날짜

컴퓨터에는 반드시 시계가 내장되어 있다. 시스템 날짜란 이 같은 하드웨어 상의 시계로부터 실시간으로 얻을 수 있는 일시적인 데이터를 말한다. RDBMS에서도 시스템 날짜와 시간을 확인하는 함수를 제공한다.

표준 SQL에서는 CURRENT_TIMESTAMP라는 함수를 실행했을 때를 기준으로 시간을 표시한다. CURRENT_TIMESTAMP는 함수임에도 인수를 필요로 하지 않는다. 따라서 괄호를 사용하지 않는 특수한 함수이다.

```sql
SELECT CURRENT_TIMESTAMP;
```

#### 날짜의 덧셈과 뺄셈

날짜시간형 데이터는 기간형 수치데이터와 덧셈 및 뺄셈을 할 수 있다. 날짜시간형 데이터에 기간형 수치데이터를 더하거나 빼면 날짜시간형 데이터가 반환된다.

```sql
SELECT CURRENT_DATE + INTERVAL 1 DAY;
```

CURRENT_DATE는 시스템 날짜의 날짜만 확인하는 함수이다. 기간형 상수의 기술방법은 데이터베이스마다 조금씩 다르며 세세한 부분까지 표준화가 이루어지지 않았다.

날짜시간형 데이터 간에도 덧셈 및 뺄셈을 할 수 있다. 예를 들면 Oracle에서는 ‘2014-02-28’ - ‘2014-01-01’ 이라고 한다면 두 날짜 사이에 차이가 얼마나 발생하는지 계산할 수 있다. 한편 MySQL에서는 DATEDIFF(’2014-02-28’, ‘2014-01-01’)로 계산할 수 있다.

### 7. CASE 문으로 데이터 변환하기

RDBMS에 준비된 함수를 사용해 데이터를 특정 형태로 변환하는 경우도 있지만, 임의의 조건에 따라 독자적으로 변환 처리를 지정해 데이터를 변환하고 싶은 경우도 있다. 이때 CASE 문을 이용할 수 있다.

예를 들면 NULL 값을 0으로 간주하고 계산하고 싶은 경우에 사용할 수 있다.

```sql
CASE WHEN 조건식1 THEN 식1
[ WHEN 조건식2 THEN 식2 ...]
[ ELSE 식3 ]
END
```

WHEN 절에는 참과 거짓을 반환하는 조건식을 기술한다. 해당 조건을 만족하여 참이 되는 경우는 THEN 절에 기술한 식이 처리된다. 이때 WHEN과 THEN을 한데 조합해 지정할 수 있다. WHEN 절의 조건식을 차례로 평가해 나가다가 가장 먼저 조건을 만족한 WHEN 절과 대응하는 THEN 절 식의 처리결과를 CASE 문의 결괏값으로 반환한다. 그 어떤 조건식도 만족하지 못한 경우에는 ELSE 절에 기술한 식이 채택된다. ELSE는 생략 가능하며 생략한 경우 ‘ELSE NULL’로 간주된다.

```sql
SELECT a, CASE WHEN a IS NULL THEN 0 ELSE a END "a(null=0)" FROM sample37;
```

#### COALESCE

NULL 값을 반환하는 경우라면 COALESCE 함수를 사용하는 편이 더 쉽다.

```sql
SELECT a, COALESCE(a, 0) FROM sample37;
```

COALESCE 함수는 여러 개의 인수를 지정할 수 있다. 주어진 인수 가운데 NULL이 아닌 값에 대해서는 가장 먼저 지정된 인수의 값을 반환한다.

#### 단순 CASE 문

CASE 문은 검색 CASE 와 단순 CASE 두 개 구문으로 나눌 수 있다. 검색 CASE는 앞서 설명한 ‘CASE WHEN 조건식 THEN 식 …’ 구문이다. 한편 단순 CASE는 ‘CASE 식 WHEN 식 THEN 식 …’ 구문이다. 단순 CASE에서는 CASE 뒤에 식을 기술하고 WHEN 뒤에 (조건식이 아닌) 식을 기술한다.

```sql
CASE 식1
 WHEN 식2 THEN 식3
 [ WHEN 식4 THEN 식5 ...]
 [ ELSE 식6]
END
```

식1의 값이 WHEN의 식2의 값과 동일한지 비교하고, 값이 같다면 식3의 값이 CASE 문 전체의 결괏값이 된다. 값이 같지 않으면 그 뒤에 기술한 WHEN 절과 비교하는 식으로 진행된다. 비교 결과 일치하는 WHEN 절이 하나도 없는 경우에는 ELSE 절이 적용된다.

```sql
// 검색 CASE
SELECT a AS "코드",
CASE
 WHEN a = 1 THEN '남자'
 WHEN a = 2 THEN '여자'
 ELSE '미지정'
END AS "성별" FROM sample37;

// 단순 CASE
SELECT a AS "코드",
CASE a
 WHEN 1 THEN '남자'
 WHEN 2 THEN '여자'
 ELSE '미지정'
END AS "성별" FROM sample37;
```

#### CASE를 사용할 경우 주의사항

CASE 문은 WHERE 구에서 조건식의 일부로 사용될 수도 있고 ORDER BY 구나 SELECT 구에서도 사용할 수 있다.

- ELSE를 생략하면 ELSE NULL이 되는 것에 주의해야 한다.

- 단순 CASE 에서는 WHEN 뒤에 1개의 상수값을 지정하는 경우가 많다. 여기에서 데이터가 NULL일 경우를 고려해 WHEN NULL THEN ‘데이터 없음’과 같이 지정해도 문법적으로는 문제가 없지만 정상적으로 처리되지 않는다.

  단순 CASE 에서는 CASE에서 지정된 식과 WHEN 에서 지정된 식을 비교해가며 확인한다.

  ex) a = 1, a = 2, a = NULL

  비교 연산자 = 로는 NULL 값과 같은지 아닌지를 비교할 수 없다. 따라서 a 열의 값이 NULL이라 해도 a = NULL은 참이 되지 않는다. 이때 NULL 값인지 아닌지를 판정하기 위해서는 IS NULL을 사용한다. 단순 CASE 문은 특성상 = 연산자로 비교하는 만큼, NULL 값인지를 판정하려면 검색 CASE 문을 사용해야 한다.

  ex) WHEN a IS NULL THEN ‘데이터 없음’

## 4. 데이터의 추가, 삭제, 갱신

### 1. 행 추가하기 - INSERT

```sql
INSERT INTO 테이블명 VALUES(값1, 값2, ...)
```

SELECT 명령은 데이터 검색을 위한 것으로, 질의를 하면 데이터베이스 서버가 클라이언트로 결과를 반환하는 형식으로 처리된다. 데이터를 추가할 경우에는 이와 반대로 클라이언트에서 서버로 데이터를 전송하는 형식을 취하며 서버 측은 전송받은 데이터를 데이터베이스에 저장한다.

INSERT 명령을 실행하면 처리상태만 표시될 뿐 SELECT 명령을 실행했을 때처럼 결과를 출력하지는 않는다.

```sql
INSERT INTO 테이블명 (열1, 열2, ...) VALUES(값1, 값2, ...)
```

열을 지정할 경우에는 테이블명 뒤에 괄호로 묶어 열명을 나열하고 VALUES 구로 값을 지정한다. VALUES 구에 값을 지정할 경우에는 지정한 열과 동일한 개수로 값을 지정해야 한다.

NOT NULL 제약이 걸려있는 열은 NULL 값을 허용하지 않는다.

#### Default

Default는 명시적으로 값을 지정하지 않았을 경우 사용하는 초깃값을 말한다. 열을 지정해 행을 추가할 때 지정하지 않은 열은 Default 값을 사용하여 저장된다.

VALUES 구에서 DEFAULT 키워드를 사용하면 디폴트값이 저장된다.

```sql
INSERT INTO sample411(no, d) VALUES(2, DEFAULT);
```

### 2. 삭제하기 - DELETE

```sql
DELETE FROM 테이블명 WHERE 조건식
```

DELETE FROM sample; 로 DELETE 명령을 실행하면 sample 테이블의 모든 데이터가 삭제된다. DELETE 명령에는 WHERE 구를 지정할 수 있으나 SELECT 명령처럼 WHERE 구를 생략할 경우에는 모든 행을 대상으로 동작하기 때문이다.

삭제는 행 단위로 수행되며 SELECT 명령과 같이 열을 지정할 수는 없다. 즉 DELETE no FROM sample;과 같이 열을 지정하여 그 열만 삭제할 수는 없다.

MySQL에서는 DELETE 명령에서 ORDER BY 구와 LIMIT 구를 사용해 삭제할 행을 지정할 수 있다.

### 3. 데이터 갱신하기 - UPDATE

```sql
UPDATE 테이블명 SET 열1=값1, 열2=값2, ... WHERE 조건식
```

DELETE와 달리 UPDATE는 셀 단위로 데이터를 갱신할 수 있다. WHERE 구에 조건을 지정하면 그에 일치하는 행을 갱신할 수 있다. WHERE 구를 생략한 경우에는 DELETE와 마찬가지로 테이블의 모든 행이 갱신된다.

SET 구에서 테이블에 존재하지 않는 열을 지정하면 에러가 발생한다. 값은 상수로 표기하며 INSERT 명령과 마찬가지로 자료형에 맞는 값을 지정해야 한다.

```sql
UPDATE sample41 SET no=no+1;
```

갱신할 값을 열이 포함된 식으로도 표기할 수 있다. 이때 해당 열이 갱신 대상이 되는 열이라 해도 상관없다. 갱신은 행 단위로 처리되므로 현재의 no 값은 그 행이 갱신되기 전의 값에 해당한다.

#### SET 구의 실행순서

```sql
UPDATE sample41 SET no=no+1,a=no; // 1번
UPDATE sample41 SET a=no,no=no+1; // 2번
```

MySQL에서 1번 명령은 no 열의 값에 1을 더하여 no 열에 저장한 뒤, 그 값이 다시 a 열에 대입된다.

2번 명령은 no 열의 값을 a 열에 대입한 후, no 열의 값을 +1 한다. 따라서 a 열의 값은 no - 1 값이 된다.

Oracle에서 1번 2번 명령 모두 a 열의 값은 no - 1 값이 된다.

Oracle에서는 SET 구에 기술한 식의 순서가 처리에 영향을 주지 않기 때문이다. 갱신식의 오른쪽에 위치한 no 열의 값이 항상 갱신 이전의 값을 반환한다. 한편 MySQL에서는 SET 구에 기술된 순서로 갱신 처리가 일어나므로 no 열의 값은 갱신 이전의 값이 아닌 갱신된 이후의 값을 반환한다.

따라서 MySQL의 경우, 갱신식 안에서 열을 참조할 때는 처리 순서를 고려할 필요가 있다.

## 5. 집계와 서브쿼리

### 1. 행 개수 구하기 - COUNT

SQL은 집합을 다루는 집계함수를 제공한다. 일반적인 함수는 인수로 하나의 값을 지정하는 데 비해 집계함수는 인수로 집합을 지정한다.

```sql
COUNT(집합)
SELECT COUNT(*) FROM sample51;
```

위 명령은 sample51 테이블의 모든 행 수를 반환한다.

집계함수의 특징은 복수의 값(집합)에서 하나의 값을 계산해낸다는 것이다. 일반적인 함수는 하나의 행에 대하여 하나의 값을 반환한다. **한편 집계함수는 집합으로부터 하나의 값을 반환한다.** 이렇게 집합으로부터 하나의 값을 계산하는 것을 ‘집계’라고 부른다. 이러한 이유로 집계함수를 SELECT 구에 쓰면 WHERE 구의 유무와 관계없이 결괏값으로 하나의 행을 반환한다.

```sql
SELECT COUNT(*) FROM sample51 WHERE name='A';
```

SELECT 구는 WHERE 구보다 나중에 내부적으로 처리된다. 따라서 WHERE 구로 조건을 지정하면 테이블 전체가 아닌, 검색된 행이 COUNT로 넘겨진다. 즉 WHERE 구의 조건에 맞는 행의 개수를 구할 수 있다.

**\*를 인수로 사용할 수 있는 것은 COUNT 함수 뿐이다.** 다른 집계함수에서는 열명이나 식을 인수로 지정한다.

#### 집계함수와 NULL 값

집계함수는 집합 안에 NULL 값이 있을 경우 이를 제외하고 처리한다.

```sql
SELECT COUNT(no),COUNT(name) FROM sample51;
```

name 열에 NULL 값을 가지는 행이 하나 존재한다고 했을 때 COUNT(name)의 값은 COUNT(no) 보다 1 작게 반환된다. 다만 COUNT(\*)의 경우 모든 열의 행수를 카운트하기 때문에 NULL 값이 있어도 해당 정보가 무시되지 않는다.

#### DISTINCT로 중복 제거

SQL의 SELECT 명령은 중복된 값을 제거하는 함수를 제공한다. 이때 사용하는 키워드가 DISTINCT이다.

```sql
SELECT ALL name FROM sample51;
SELECT DISTINCT name FROM sample51;
```

DISTINCT는 예약어로 열명이 아니다. SELECT 구에서 DISTINCT를 지정하면 중복된 데이터를 제외한 결과를 클라이언트로 반환한다. 중복 여부는 SELECT 구에 지정된 모든 열을 비교해 판단한다.

ALL을 지정하면 중복 유무와 관계없이 모든 행을 반환한다. ALL 및 DISTINCT 를 생략할 경우 기본값은 ALL로 지정된다.

#### 집계함수에서 DISTINCT

그렇다면 DISTINCT와 COUNT 함수를 사용하여 중복되지 않은 데이터의 개수를 구하려면 어떻게 할까?

SELECT DISTINCT COUNT(name)라는 SELECT 명령을 사용했을 때는 COUNT 쪽이 먼저 계산되기 때문에 제대로 동작하지 않는다.

```sql
SELECT COUNT(DISTINCT name) FROM sample54;
```

집계함수의 인수로 DISTINCT을 사용한 수식을 지정하면 된다.

### 2. COUNT 이외의 집계 함수

```sql
SUM([ALL|DISTINCT] 집합)
AVG([ALL|DISTINCT] 집합)
MIN([ALL|DISTINCT] 집합)
MAX([ALL|DISTINCT] 집합)
```

#### SUM으로 합계 구하기

SUM 집계함수를 사용해 집합의 합계를 구할 수 있다.

```sql
SELECT SUM(quantity) FROM sample51;
```

SUM 집계함수에 지정되는 집합은 수치형 뿐이다. 문자열형이나 날짜시간형의 집합에서 합계를 구할 수는 없다.

#### AVG로 평균 내기

AVG 집계함수에 주어지는 집합은 SUM과 동일하게 수치형만 가능하다.

```sql
SELECT AVG(quantity) FROM sample51;
```

AVG 집계함수도 NULL 값은 무시한다. 즉, NULL 값을 제거한 뒤에 평균값을 계산한다. 만약 NULL을 0으로 간주해서 평균을 내고 싶다면 CASE를 사용할 수 있다.

```sql
SELECT AVG(CASE WHEN quantity IS NULL THEN 0 ELSE quantity END) AS avg FROM sample51;
```

#### MIN, MAX로 최솟값, 최댓값 구하기

MIN, MAX 함수는 문자열형과 날짜시간형에도 사용할 수 있다. NULL 값을 무시하는 규칙은 다른 집계함수와 동일하다.

```sql
SELECT MIN(quantity), MAX(quantity) FROM sample51;
```

### 3. 그룹화 - GROUP BY

```sql
SELECT * FROM 테이블명 GROUP BY 열1, 열2, ...
```

그룹화를 통해 집계함수의 활용범위를 넓힐 수 있다.

sample51 테이블에 아래와 같을 때,

| no  | name | quantity |
| --- | ---- | -------- |
| 1   | A    | 1        |
| 2   | A    | 2        |
| 3   | B    | 10       |
| 4   | C    | 3        |
| 5   | NULL | NULL     |

```sql
SELECT name FROM sample51 GROUP BY name;
```

위 명령의 결과는 아래와 같다.

| name |
| ---- |
| A    |
| B    |
| C    |
| NULL |

**GROUP BY 구에 열을 지정하여 그룹화하면 지정된 열의 값이 같은 행이 하나의 그룹으로 묶인다.**

따라서 GROUP BY를 지정해 그룹화하면 DISTINCT와 같이 중복을 제거하는 효과가 있다.

```sql
SELECT name, COUNT(name), SUM(quantity) FROM sample51 GROUP BY name;
```

| name | COUNT(name) | SUM(quantity) |
| ---- | ----------- | ------------- |
| NULL | 0           | NULL          |
| A    | 2           | 3             |
| B    | 1           | 10            |
| C    | 1           | 3             |

A 그룹에는 두 개의 행이 있는데, COUNT는 행의 개수를 반환하므로 2가 된다. A 그룹에 해당하는 2개 행의 quantity 열 값은 각각 1과 2이다. SUM은 합계를 구하는 집계함수이므로 3을 반환한다.

#### HAVING 구로 조건 지정

집계함수는 WHERE 구의 조건식에서는 사용할 수 없다.

```sql
SELECT name, COUNT(name) FROM sample51 WHERE COUNT(name)=1 GROUP BY name;
```

위의 명령은 에러가 발생한다. 에러가 발생하는 이유는 GROUP BY와 WHERE 구의 내부처리 순서와 관계가 있다. **즉, WHERE 구로 행을 검색하는 처리가 GROUP BY로 그룹화하는 처리보다 순서상 앞서기 때문이다. SELECT 구에서 지정한 별명을 WHERE 구에서 사용할 수 없었던 것과 같은 이유로, 그룹화가 필요한 집계함수는 WHERE 구에서 지정할 수 없다.**

- 내부처리 순서

  **WHERE → GROUP BY → SELECT → ORDER BY**

HAVING 구를 사용하면 집계함수를 사용해서 조건식을 지정할 수 있다.

HAVING 구는 GROUP BY 구의 뒤에 기술하며 WHERE 구와 동일하게 조건식을 지정할 수 있다. 조건식에는 그룹별로 집계된 열의 값이나 집계함수의 계산결과가 전달된다고 생각하면 된다. 결과적으로 WHERE 구와 HAVING 구에 지정된 조건으로 검색하는 2단 구조가 된다.

```sql
SELECT name, COUNT(name) FROM sample51 GROUP BY name;
```

| name | COUNT(name) |
| ---- | ----------- |
| NULL | 0           |
| A    | 2           |
| B    | 1           |
| C    | 1           |

```sql
SELECT name, COUNT(name) FROM sample51 GROUP BY name HAVING COUNT(name)=1;
```

| name | COUNT(name) |
| ---- | ----------- |
| B    | 1           |
| C    | 1           |

그룹화보다도 나중에 처리되는 ORDER BY 구에서는 문제없이 집계함수를 사용할 수 있다. 즉, ORDER BY COUNT(name) 과 같이 지정할 수 있다.

- 내부처리 순서

  **WHERE → GROUP BY → HAVING → SELECT → ORDER BY**

HAVING 구는 SELECT 구보다 먼저 처리되므로 별명을 사용할 수는 없다. 예를 들어 COUNT(name)에 cn이라는 별명을 붙이면, ORDER BY 구에서는 사용할 수 있지만 GROUP BY 구나 HAVING 구에서는 사용할 수 없다.

```sql
SELECT name AS n, COUNT(name) AS cn FROM sample51 GROUP BY n HAVING cn=1;
```

단, MySQL과 같이 융통성 있게 별명을 사용할 수 있는 데이터베이스 제품도 있다. 실제로 위의 명령은 MySQL에서는 실행 가능하지만 Oracle 등에서는 에러가 발생한다.

#### 복수열의 그룹화

**GROUP BY에 지정한 열 이외의 열은 집계함수를 사용하지 않은 채 SELECT 구에 기술해서는 안 된다.**

```sql
SELECT no, name, quantity FROM sample51 GROUP BY name;
```

**GROUP BY로 그룹화하면 클라이언트로 반환되는 결과는 그룹당 하나의 행이 된다.** 하지만 name 열 값이 A인 그룹이 quantity 열 값은 1과 2로 두개이다. 이때 그룹마다 하나의 값만을 반환해야 하므로 어느 것을 반환하면 좋을지 몰라 에러가 발생한다.

**이때 집계함수를 사용하면 집합은 하나의 값으로 계산되므로, 그룹마다 하나의 행을 출력할 수 있다.**

```sql
SELECT MIN(no), name, SUM(quantity) FROM sample51 GROUP BY name;
```

#### 결괏값 정렬

GROUP BY 구로 그룹화한 경우에도 ORDER BY 구를 사용해 정렬할 수 있다.

```sql
SELECT name, COUNT(name), SUM(quantity) FROM sample51 GROUP BY name
ORDER BY SUM(quantity) DESC;
```

| name | COUNT(name) | SUM(quantity) |
| ---- | ----------- | ------------- |
| B    | 1           | 10            |
| C    | 1           | 3             |
| A    | 2           | 3             |
| NULL | 0           | NULL          |

### 4. 서브쿼리

서브쿼리는 SELECT 명령에 의한 데이터 질의로, 상부가 아닌 하부의 부수적인 질의를 의미한다.

```SQL
( SELECT 명령 )
```

서브쿼리는 SQL 명령문 안에 지정하는 하부 SELECT 명령으로 괄호로 묶어 지정한다.

#### DELETE의 WHERE 구에서 서브쿼리 사용하기

```sql
DELETE FROM sample54 WHERE a = (SELECT MIN(a) FROM sample54);
```

MySQL에서는 데이터를 추가하거나 갱신할 경우 동일한 테이블을 서브쿼리에서 사용할 수 없기 때문에 위 쿼리는 에러가 발생한다. 에러를 발생하지 않고 실행하려면 아래와 같이 인라인 뷰로 임시 테이블을 만들도록 처리하면 된다.

```sql
DELETE FROM sample54 WHERE a = (SELECT a FROM (SELECT MIN(a) AS a FROM sample54) AS x);
```

#### 스칼라 값

​ SELECT 명령이 하나의 값만 반환하는 것을 '스칼라 값을 반환한다'고 한다. 스칼라 값을 반환하는 SELECT 명령을 특별 취급하는 이유는 서브쿼리로서 사용하기 쉽기 때문이다.

​ SELECT 구에서 하나의 열을 지정하고, GROUP BY를 지정하지 않은 채 집계 함수를 사용하면 결과는 단일한 값이 된다. 또한, WHERE 조건으로 하나의 행만 검색할 수 있다면 단 일 값이 되므로 스칼라 값을 반환하는 SELECT 명령이 된다. = 연산자를 사용하여 비교할 경우에는 스칼라 값끼리 비교할 필요가 있다.

#### SELECT 구에서 서브쿼리 사용하기

SELECT 구에서 서브쿼리를 지정할 때는 스칼라 서브쿼리가 필요하다.

```sql
SELECT
	(SELECT COUNT(*) FROM sample51) AS sq1,
	(SELECT COUNT(*) FROM sample54) AS sq2;
```

서브쿼리가 아닌 상부의 SELECT 명령에는 FROM 구가 없는데, MySQL 등에서는 FROM 구를 생략할 수 있지만 Oracle 등 전통적인 데이터베이스 제품에서는 FROM 구를 생략할 수 없다. Oracle에서는 FROM DUAL로 지정하여 실행할 수 있다. DUAL은 시스템 쪽에서 데이터베이스에 기본으로 작성되는 테이블이다.

#### SET 구에서 서브쿼리 사용하기

```sql
UPDATE sample54 SET a = (SELECT MAX(a) FROM sample54);
```

SET 구에서 서브쿼리를 사용할 경우에도 스칼라 값을 반환하도록 스칼라 서브쿼리를 지정할 필요가 있다.

#### FROM 구에서 서브쿼리 사용하기

FROM 구에서는 서브쿼리가 스칼라 값을 반환하지 않아도 된다.

```sql
SELECT * FROM (SELECT * FROM sample54) sq;
```

#### INSERT 명령과 서브쿼리

- VALUES 구에서 서브쿼리 사용하기

  스칼라 값을 반환해야하며 자료형도 일치해야한다.

  ```sql
  INSERT INTO sample541 VALUES(
  	(SELECT COUNT(*) FROM sample51),
  	(SELECT COUNT(*) FROM sample54)
  );
  ```

- VALUES 구 대신에 SELECT 명령 사용하기

  자료형이 일치해야한다. INSERT SELECT 명령은 SELECT 명령의 결과를 INSERT INTO로 지정한 테이블에 전부 추가한다.

  ```sql
  INSERT INTO sample541 SELECT 1,2;
  ```

  열 구성이 똑같은 테이블 사이에는 다음과 같이 행을 복사할 수 있다.

  ```sql
  INSERT INTO sample542 SELECT * FROM sample543;
  ```

### 5. 상관 서브쿼리

서브쿼리와 부모쿼리가 서로 연관된 경우 서브쿼리는 상관 서브쿼리가 된다. 상관 서브쿼리를 사용함으로써 두 테이블에 걸쳐 조작할 수 있다.

#### EXISTS

sample551 테이블

| no  | a    |
| --- | ---- |
| 1   | NULL |
| 2   | NULL |
| 3   | NULL |
| 4   | NULL |
| 5   | NULL |

sample552 테이블

| no2 |
| --- |
| 3   |
| 5   |

서브쿼리를 사용해 검색할 때 데이터가 존재하는지 아닌지 판별하기 위해 EXISTS 술어를 사용해 조건을 지정할 수 있다. 반대의 경우 NOT EXISTS를 사용하면 된다.

```sql
UPDATE sample551 SET a = '있음' WHERE
	EXISTS (SELECT * FROM sample552 WHERE no2 = no);
```

결과

| no  | a    |
| --- | ---- |
| 1   | NULL |
| 2   | NULL |
| 3   | 있음 |
| 4   | NULL |
| 5   | 있음 |

UPDATE 명령(부모)에서 WHERE 구에 괄호로 묶은 부분이 서브쿼리(자식)가 된다. 자식인 서브쿼리에서는 sample552 테이블의 no2 열 값이 부모의 no 열 값과 일치하는 행을 검색한다. 이처럼 부모 명령과 자식인 서브쿼리가 특정 관계를 맺는 것을 상관 서브쿼리라고 부른다. 상관 서브쿼리는 단독으로 실행시킬 수 없다.

#### IN

스칼라 값끼리 비교할 때는 = 연산자를 사용하지만 집합을 비교할 때는 사용할 수 없다. IN을 사용하면 집합 안의 값이 존재하는지를 조사할 수 있다. IN에서는 오른쪽에 집합을 지정한다. 왼쪽에 지정된 값과 같은 값이 집합 안에 존재하면 참을 반환한다.

```sql
SELECT * FROM sample551 WHERE no IN (3, 5);
```

집합 부분을 서브쿼리로 지정할 수 있다.

```sql
SELECT * FROM sample551 WHERE no IN (SELECT no2 FROM sample552);
```

NOT IN의 경우, 집합 안에 NULL 값이 있으면 왼쪽 값이 집합 안에 포함되어 있지 않아도 참을 반환하지 않는다. MySQL에서는 왼쪽 값이 집합에 포함되어 있으면 거짓을, 그렇지 않으면 NULL을 반환한다. IN의 경우 집합에 포함되어 있으면 참을, 그렇지 않으면 NULL을 반환한다.
