---
title: 원티드 프리온보딩 8percent 기업과제
tags: [BackEnd, Django]
authors: chihun
---

# 원티드 프리온보딩 8percent 기업과제

**기간: 2021-11-12 ~ 2021-11-13**

**Stack: Python, Django, SQLite, DjangoORM**

**[Github 링크](https://github.com/chihunmanse/PreonBoarding4-8percent)**

- 거래내역이 1억건을 넘어갈 때에 대한 고려
  - 이를 고려하여 어떤 설계를 추가하셨는지를 README에 남겨 주세요.


8퍼센트의 과제에서는 하나의 테이블에 대량의 데이터가 집중적으로 쌓인 경우에 대한 대비를 어떻게 할 수 있는지가 주된 포인트였던 것 같다.

하나의 테이블에 대량의 데이터가 집중적으로 쌓이면 성능이 저하될 확률이 높다. 

## Indexing

인덱스란?

```
인덱스(Index)는 데이터베이스 분야에 있어서 테이블에 대한 동작의 속도를 높여주는 자료 구조를 일컫는다. 인덱스는 테이블 내의 1개의 컬럼, 혹은 여러 개의 컬럼을 이용하여 생성될 수 있다. 고속의 검색 동작뿐만 아니라 레코드 접근과 관련 효율적인 순서 매김 동작에 대한 기초를 제공한다. 인덱스를 저장하는 데 필요한 디스크 공간은 보통 테이블을 저장하는 데 필요한 디스크 공간보다 작다. (왜냐하면 보통 인덱스는 키-필드만 갖고 있고, 테이블의 다른 세부 항목들은 갖고 있지 않기 때문이다.) 관계형 데이터베이스에서는 인덱스는 테이블 부분에 대한 하나의 사본이다.

인덱스는 고유 제약 조건을 실현하기 위해서도 사용된다. 고유 인덱스는 중복된 항목이 등록되는 것을 금지하기 때문에 인덱스의 대상인 테이블에서 고유성이 보장된다.
```

![](https://media.vlpt.us/images/bsjp400/post/f0417278-986a-4599-99b1-5468abf2610d/image.png)

History 값을 위의 테이블에서 조회한다고 했을 때 어느 위치에 해당 데이터가 존재하는지 모르기 때문에 테이블 전체를 조회해야한다. 이 때 데이터의 수가 많은 테이블이라고 했을 때 조회가 잦은 테이블이라고 하면 서비스의 성능이 떨어지게 된다.

왼쪽과 같이 인덱스를 따로 생성하여 필요한 데이터를 빠르게 찾을 수 있게 함으로써 조회할 때 성능을 향상시킬 수 있다.

하지만 데이터의 추가, 수정, 삭제가 잦은 테이블이라면 인덱스를 사용했을 때 오히려 성능이 저하될 수 있다.

![](https://user-images.githubusercontent.com/61782539/141482697-6ff59772-441a-4a9a-95f3-7734127ceb64.png)

거래내역을 조회할 때 거래내역 테이블에 대한 검색 속도를 높이기 위해 필터링과 정렬에 자주 사용되는 created_at 필드에 index가 생성되도록 하였다.


## Partitioning

이번 과제에서 대량의 데이터가 쌓인 테이블에 대한 관리를 고민하면서 파티셔닝에 대한 개념을 처음 접하게 되었다. 

파티셔닝이란?

```
논리적인 데이터 element들을 다수의 entity로 쪼개는 행위를 뜻하는 일반적인 용어
즉 큰 table이나 index를, 관리하기 쉬운 partition이라는 작은 단위로 물리적으로 분할하는 것을 의미한다.
물리적인 데이터 분할이 있더라도, DB에 접근하는 application의 입장에서는 이를 인식하지 못한다.
```

1억건이 넘는 거래내역을 거래기간에 따라 RANGE 파티션을 적용하여 여러개의 테이블로 나누어 저장하면, 논리적으로는 하나의 테이블처럼 보이지만 DBMS 내부적으로는 거래일자에 따라 각 파티션의 데이터를 조회하므로 만약 해당 거래기간이 속한 테이블에 데이터가 500만건이라고 하면 500만건의 데이터가 있는 테이블만 조회할 수 있게 된다. 또 데이터 보관주기를 관리할 때 보관기간이 지난 파티션 테이블만 삭제하면 되기 때문에 금융거래 내역을 관리하는데도 유용하게 사용될 수 있다.

<!--truncate-->

프로젝트에 파티셔닝을 적용해보기 위해 Architect 패키지를 사용해보았다.

```python
from django.db import models
import architect

@architect.install('partition', type='range', subtype='integer',
                   constraint='100', column='id')
class User(models.Model):
    name     = models.CharField(max_length = 50)
    email    = models.CharField(max_length = 200, unique = True)
    password = models.CharField(max_length = 500)

    class Meta:
        db_table = 'users'
    
    def __str__(self):
        return self.name
```

```
architect partition --module users.models
architect partition: result: successfully (re)configured the database for the following models: User
```

적용이 잘 되는지 User 모델에 적용 후에 명령어를 실행해보았지만 파티션이 적용되지 않았다.

Architect의 공식문서를 찾아보니  PostgreSQL과 MySQL 두 DB를 지원하고 sqlite3는 지원하지 않는다는 것을 알았다.

django-db-parti 라는 다른 패키지도 찾아보았지만 해당 패키지도 PostgreSQL과 MySQL만 지원하였다.

이번 과제는 sqlite3 를 필수로 사용하라고 되어 있었기 때문에 시간이 얼마 남지 않은 상황에서 팀원들과 상의 후, 차라리 모델링 차원에서라도 하나의 테이블로 관리되던 거래내역 테이블을 년도에 따라 따로 생성하여 관리하는 것으로 미약하게나마 구현해보는 것이 좋겠다는 결정을 내렸다.

따라서 deals 테이블을 2021년 거래내역이 저장돼있는 deals2021 테이블과 2020년 거래내역이 저장돼있는 deals2020 테이블로 분할되도록 모델링을 수정하였다.

![](https://user-images.githubusercontent.com/61782539/141502990-2fc032aa-e997-4e72-9261-60ba96e9e84b.png)

deals2020 테이블에는 2020년도에 생성된 거래내역 데이터만 저장돼있다.

![](https://user-images.githubusercontent.com/61782539/141503320-74a2b342-529c-4da1-a496-a2d4d3035722.png)

deals2021 테이블에는 2021년도에 생성된 거래내역 데이터만 저장돼있다.

이렇게 모델을 수정한 후에 거래내역을 조회하는 API에서 조회한 거래기간의 시작날짜 연도가 2020년일 때만 deals2020 테이블에 접근하여 조회한 기간에 포함되는 데이터를 가져오고, 조회한 기간이 2021년에 국한되면 deals2021테이블의 데이터에만 접근하도록 구현하여 많은 양의 거래내역을 분할하여 접근할 수 있게 하였다. 2020년 데이터의 보관기간이 지났다고 했을 때 해당 테이블의 데이터만 삭제하면 되기 때문에 데이터 관리에도 좀 더 용이할 것 같았다.

**2020-04-02 ~ 2021-11-12 거래내역 조회**

```
/deals/1?start_date=2020-04-02&end_date=2021-11-12&sort=old&deal_position_id=&page=2
```

```sql
2021-11-13 02:31:37,353 DEBUG (0.095) SELECT "deals2020"."id", "deals2020"."account_id", "deals2020"."deal_position_id", "deals2020"."amount", "deals2020"."created_at", "deals2020"."balance", "deals2020"."description", "deal_positions"."id", "deal_positions"."position" FROM "deals2020" INNER JOIN "deal_positions" ON ("deals2020"."deal_position_id" = "deal_positions"."id") WHERE (django_datetime_cast_date("deals2020"."created_at", NULL, NULL) BETWEEN '2020-04-02' AND '2021-11-12' AND "deals2020"."account_id" = 1) ORDER BY "deals2020"."created_at" ASC; args=('2020-04-02', '2021-11-12', 1)
2021-11-13 02:31:37,716 DEBUG (0.068) SELECT "deals2021"."id", "deals2021"."account_id", "deals2021"."deal_position_id", "deals2021"."amount", "deals2021"."created_at", "deals2021"."balance", "deals2021"."description", "deal_positions"."id", "deal_positions"."position" FROM "deals2021" INNER JOIN "deal_positions" ON ("deals2021"."deal_position_id" = "deal_positions"."id") WHERE (django_datetime_cast_date("deals2021"."created_at", NULL, NULL) BETWEEN '2020-04-02' AND '2021-11-12' AND "deals2021"."account_id" = 1) ORDER BY "deals2021"."created_at" ASC; args=('2020-04-02', '2021-11-12', 1)
[13/Nov/2021 02:31:38] "GET /deals/1?start_date=2020-04-02&end_date=2021-11-12&sort=old&deal_position_id=&page=2 HTTP/1.1" 200 3548
```

이 경우 deals2020 테이블과 deals2021 테이블에 접근한다.

**2021-04-02 ~ 2021-11-12 거래내역 조회**

```sql
deals/1?start_date=2021-04-02&end_date=2021-11-12&sort=old&deal_position_id=&page=1
```

```sql
2021-11-13 02:34:27,308 DEBUG (0.099) SELECT "deals2021"."id", "deals2021"."account_id", "deals2021"."deal_position_id", "deals2021"."amount", "deals2021"."created_at", "deals2021"."balance", "deals2021"."description", "deal_positions"."id", "deal_positions"."position" FROM "deals2021" INNER JOIN "deal_positions" ON ("deals2021"."deal_position_id" = "deal_positions"."id") WHERE (django_datetime_cast_date("deals2021"."created_at", NULL, NULL) BETWEEN '2021-04-02' AND '2021-11-12' AND "deals2021"."account_id" = 1) ORDER BY "deals2021"."created_at" ASC; args=('2021-04-02', '2021-11-12', 1)
[13/Nov/2021 02:34:27] "GET /deals/1?start_date=2021-04-02&end_date=2021-11-12&sort=old&deal_position_id=&page=1 HTTP/1.1" 200 3550
```

이 경우 deals2021 테이블에만 접근한다.