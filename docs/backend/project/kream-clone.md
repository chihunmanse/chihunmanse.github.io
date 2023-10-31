---
sidebar_position: 2
---

# KREAM Clone Project

**기간: 2021-10-10 ~ 2021-10-29**

**Stack: Python, Django, MySQL, DjangoORM**

**[Github 링크](https://github.com/chihunmanse/KREAM-motive-Project)**

## Modeling

![erd](https://user-images.githubusercontent.com/61782539/139529652-5d04aa32-b615-478e-87fe-b17693fc3b9c.png)

필수로 구현하기로 한 기능들을 중심으로 모델링하였다. kream은 이용자들이 한정판 상품들을 서로 사고 팔고 할 수 있도록 매개해주는 사이트이다. 그 과정에서 이용자들이 원하는 가격에 물건을 사고 팔 수 있도록 구매가나 판매가를 제시하는 경매 시스템이 있다. 그리고 그 경매 시스템에 따라서 물건을 즉시 구매하고 즉시 판매할 수 있는 실제적인 가격이 결정된다.

상품의 사이즈별로 (실제 kream에는 여러 종류의 상품이 있기 때문에 옵션도 여러가지지만 프로젝트에서는 신발만 다루기로 기획했다.) 입찰이 생성된다.

kream에서 구매, 판매 계약(주문)은 거래하려는 상품에 입찰이 하나라도 걸려있을 때만 가능하다. 상품을 구매하려할 때는 해당 상품의 판매 입찰들중에 가장 낮은 가격으로 제시된 입찰가가 즉시 구매가로 결정되고 그 가격이 마음에 든다면 바로 거래할 수 있다. 반대로 상품을 판매할 때는 해당 상품의 구매 입찰들중에 가장 높은 가격으로 제시된 입찰가가 즉시 판매가로 결정된다. 따라서 주문은 즉시거래하는 유저와 해당 즉시거래가를 형성한 하나의 입찰이 만나서 이루어진다. 만약 주문 요청된 입찰의 포지션이 구매라면 판매자는 즉시판매가로 거래하는 유저가 될 것이고 구매자는 해당 입찰을 제시한 유저가 될 것이다.

이번 프로젝트에서는 경매 프로세스를 구현해보는 것에 중점을 두었기 때문에 결제는 유저의 포인트를 서로 주고 받는 것으로 간략하게 기획했다.

## End Point

프로젝트에서 입찰, 주문 관련 API를 만드는 역할을 담당했다.

- POST /orders/bidding/{int:productsize_id}/{int:position_id} (입찰 생성)
- GET /orders/bidding/{int:productsize_id}/{int:position_id} (입찰 조회 - 주문 페이지에서 즉시 거래가 조회)
- POST /orders/{int:bidding_id} (주문 생성)
- GET /orders/size-price/{int:product_id}/{int:position_id} (상품의 사이즈별 즉시 거래가 조회)
- GET /orders/price/{int:product_id} (상품의 시세 조회)
- GET /orders (주문, 입찰중인 내역 조회)

## Code

```python
class BiddingStatusId(Enum):
    ON_BIDDING = 1
    CONTRACTED = 2

class BiddingPositionId(Enum):
    BUY  = 1
    SELL = 2

class OrderStatusId(Enum):
    INSPECTION = 1
    IN_TRANSIT = 2
    DELIVERED  = 3

class InsufficientPointError(Exception):
    pass

class InvalidBiddingStatusError(Exception):
    pass

class CheckId():
    def check_product_id(product_id):
        if not Product.objects.filter(id = product_id).exists():
            raise Product.DoesNotExist

    def check_product_size_id(productsize_id):
        if not ProductSize.objects.filter(id = productsize_id).exists():
            raise ProductSize.DoesNotExist

    def check_bidding_id(bidding_id):
        if not Bidding.objects.filter(id = bidding_id).exists():
            raise Bidding.DoesNotExist

    def check_bidding_position_id(position_id):
        if not BiddingPosition.objects.filter(id = position_id).exists():
            raise BiddingPosition.DoesNotExist

    def check_bidding_status_id(bidding_status_id):
        if bidding_status_id == BiddingStatusId.CONTRACTED.value:
            raise InvalidBiddingStatusError

def user_point_check(user, position, bidding):
    if (position == BiddingPositionId.SELL.name and bidding.price > user.point) or (position == 				 BiddingPositionId.BUY.name and bidding.price > bidding.user.point):
        raise InsufficientPointError
```

position 테이블과 status 테이블의 id값을 사용하는데 있어서, DB상에 어떤 데이터가 어떤 id를 갖고 있는지 헷갈릴 수 있는 것을 방지하고, 다른 사람이 코드를 봤을 때도 논리적으로 이해할 수 있도록 Enum class들을 따로 만들어서 api를 작성할 때 사용했다.

요청에서 들어온 id의 데이터가 존재하지 않거나 잘못된 id값일 경우에 예외를 발생시키는 class를 따로 만들어 api 안에서 코드의 가독성을 좀 더 높일 수 있었다.

`user_point_check` 함수의 경우 주문 생성 api에서 사용되는데, 로그인 유저가 제품을 판매하려는 경우에는 구매 입찰을 걸었던 유저의 포인트가 가격보다 적으면 예외를 발생시키고, 구매하려는 경우에는 로그인 유저의 포인트가 가격보다 적으면 예외를 발생시켰다.

### POST /orders/bidding/{int:productsize_id}/{int:position_id} (입찰 생성)

```python
class BiddingView(View):
    @login_decorator
    def post(self, request, productsize_id, position_id):
        try:
            CheckId.check_product_size_id(productsize_id)
            CheckId.check_bidding_position_id(position_id)

            data  = json.loads(request.body)
            user  = request.user
            price = data['price']

            Bidding.objects.create(
                user                 = user,
                bidding_status_id    = BiddingStatusId.ON_BIDDING.value,
                bidding_position_id  = position_id,
                product_size_id      = productsize_id,
                price                = price
            )

            return JsonResponse({'message' : 'SUCCESS'}, status = 201)

        except KeyError:
            return JsonResponse({'message' : 'KEY_ERROR'}, status = 400)

        except JSONDecodeError:
            return JsonResponse({'message' : 'JSON_DECODE_ERROR'}, status = 400)

        except ProductSize.DoesNotExist:
            return JsonResponse({'message' : 'PRODUCT_SIZE_DOES_NOT_EXIST'}, status = 404)

        except BiddingPosition.DoesNotExist:
            return JsonResponse({'message' : 'INVALID_BIDDING_POSITION'}, status = 400)

```

입찰 생성은 요청에서 path 변수로 `productize_id`와 `position_id`를 받고 요청의 body에서 유저가 입력한 `price` 값을 받아서 생성한다. 새로 생성되는 입찰의 상태는 `ON_BIDDING`의 id값을 넣어준다.

### GET /orders/bidding/{int:productsize_id}/{int:position_id} (입찰 조회 - 주문 페이지에서 즉시 거래가 조회)

```python
    @login_decorator
    def get(self, request, productsize_id, position_id):
        try:
            CheckId.check_product_size_id(productsize_id)
            CheckId.check_bidding_position_id(position_id)

            user              = request.user
            sell_price_filter = (Q(bidding__bidding_position_id = BiddingPositionId.BUY.value) &
            Q(bidding__bidding_status_id = BiddingStatusId.ON_BIDDING.value))
            buy_price_filter  = (Q(bidding__bidding_position_id = BiddingPositionId.SELL.value) &
            Q(bidding__bidding_status_id = BiddingStatusId.ON_BIDDING.value))
            biddings          = Bidding.objects.filter(bidding_position_id = position_id, bidding_status_id =
            BiddingStatusId.ON_BIDDING.value).order_by('price' if position_id == BiddingPositionId.SELL.value
            else '-price')
            product_size      = ProductSize.objects.annotate(sell_price = Max('bidding__price', filter =
            sell_price_filter), buy_price = Min('bidding__price', filter = buy_price_filter)).\
                                select_related('size', 'product').prefetch_related(Prefetch('bidding_set',
                                queryset = biddings)).get(id = productsize_id)

            data = {
                'product_image_url'    : product_size.product.productimage_set.first().image_url
                'product_name'         : product_size.product.name,
                'product_brand'        : product_size.product.brand.name,
                'product_model_number' : product_size.product.model_number,
                'size'                 : product_size.size.size,
                'sell_price'           : product_size.sell_price,
                'buy_price'            : product_size.buy_price,
                'user_point'           : user.point,
                'bidding_id'           : product_size.bidding_set.first().id if product_size.bidding_set.first()
                else None,
                'bidding_price'        : product_size.bidding_set.first().price if
                product_size.bidding_set.first() else None
            }

            return JsonResponse({'data' : data}, status = 200)

        except ProductSize.DoesNotExist:
            return JsonResponse({'message' : 'PRODUCT_SIZE_DOES_NOT_EXIST'}, status = 404)

        except ProductSize.MultipleObjectsReturned:
            return JsonResponse({'message' : 'MULTIPLE_RETURN_ERROR'}, status = 400)

        except BiddingPosition.DoesNotExist:
            return JsonResponse({'message' : 'INVALID_BIDDING_POSITION'}, status = 400)
```

주문 페이지에서 구매/판매와 상관없이 즉시구매가와 즉시판매가의 정보를 모두 보여준다. path 변수로 `productsize_id`를 받아와서 해당 상품의 정보와 해당 사이즈에 생성돼있는 입찰들에 접근한다. 구매가와 판매가 별로 `annotate()`에서 사용할 filter 조건들을 미리 만들어주었다. 구매가를 구할 때 해당되는 조건은 아직 계약 완료되지 않은 입찰중에 position이 SELL인 경우이고 판매가는 position이 BUY인 경우이다. 구매가는 filter 조건들의 입찰들중에서 가장 낮은 가격의 입찰가를 `Min()`을 통해 가져왔고 판매가는 가장 높은 가격의 입찰가를 `Max()`를 통해 가져왔다.

`Prefetch()`의 쿼리셋으로 사용할 biddings 쿼리셋을 조건에 맞게 미리 지정해주었다. 입찰상태가 아직 입찰중이고, 요청에서 얻은 position에 해당하는 입찰들중에 position에 따라 낮은 가격순, 높은 가격순으로 정렬되게 했다. 해당 상품 사이즈에 position에 맞는 입찰이 존재하지 않을 수도 있기 때문에 `bidding_set.first()`를 사용할 때 `first()`가 None이면 None이 반환되게 했다. None에 대한 처리를 해주지 않으면 `first()`가 None일때 `bidding_set.first().id` 나 `.price` 처럼 필드에 접근하면 AttributeError가 발생한다.

만약 거래하려는 상품의 position에 맞는 입찰이 존재하지 않으면 즉시거래할 수 없으므로 즉시구매/판매 자체가 불가능하고 입찰 생성만 가능하다.

이번에 api를 만들고 프론트 분들과 소통하는 과정에서 서로 자주 헷갈렸던 지점이 유저가 구매/판매하기 위해 거기에 맞는 입찰을 조회할 때는 `position_id`를 반대의 경우로 요청해야한다는 점이었다. 만약 구매자가 즉시구매할 수 있는 입찰이 있는지 조회할 때는 판매입찰들중에서 조회해야하기 때문에 요청해야할 입찰의 position은 SELL이 된다. 하지만 구매자가 즉시구매할 수 있는 입찰이 존재하지 않거나 현재 형성된 즉시구매가가 마음에 들지 않아서 다른 가격으로 입찰을 한다고 하면 (입찰 생성할 때의) position은 그대로 BUY가 된다.

### POST /orders/{int:bidding_id} (주문 생성)

```python
class OrderView(View):
    @login_decorator
    @transaction.atomic
    def post(self, request, bidding_id):
        try:
            CheckId.check_bidding_id(bidding_id)

            user              = request.user
            bidding           = Bidding.objects.select_related('bidding_status', 'bidding_position',
            'user').get(id = bidding_id)
            bidding_status_id = bidding.bidding_status_id
            position          = bidding.bidding_position.position

            CheckId.check_bidding_status_id(bidding_status_id)
            user_point_check(user, position,bidding)

            Order.objects.create(
                order_status_id = OrderStatusId.INSPECTION.value,
                bidding         = bidding,
                buyer           = bidding.user if position == BiddingPositionId.BUY.name else user,
                seller          = bidding.user if position == BiddingPositionId.SELL.name else user
            )

            bidding.bidding_status_id = BiddingStatusId.CONTRACTED.value
            bidding.save()

            if position == BiddingPositionId.BUY.name:
                user.point = user.point + bidding.price
                user.save()
                bidding.user.point = bidding.user.point - bidding.price
                bidding.user.save()

            if position == BiddingPositionId.SELL.name:
                user.point = user.point - bidding.price
                user.save()
                bidding.user.point = bidding.user.point + bidding.price
                bidding.user.save()

            return JsonResponse({'message' : 'SUCCESS'}, status = 201)

        except Bidding.DoesNotExist:
            return JsonResponse({'message' : 'BIDDING_DOES_NOT_EXIST'}, status = 404)

        except Bidding.MultipleObjectsReturned:
            return JsonResponse({'message' : 'MULTIPLE_RETURN_ERROR'}, status = 400)

        except InvalidBiddingStatusError:
            return JsonResponse({'message' : 'INVALID_BIDDING_ID'}, status = 400)

        except InsufficientPointError:
            return JsonResponse({'message' : 'INSUFFICIENT_POINT'}, status = 400)
```

주문은 path 변수로 입찰 id를 받아서 이루어진다. 주문이 제대로 생성되지 않았다면 유저의 point 변화도 없어야 하기 때문에 트랜잭션을 적용했다.

이번 프로젝트에서는 유저의 point를 서로 주고 받는 것으로 결제가 되도록 기획했기 때문에 구매 유저가 결제금액만큼 point를 보유하고 있는지 확인하고 부족하면 주문이 불가능하게 했다.

주문을 생성할 때는 입찰에 있는 position 정보를 통해 buyer와 seller를 구분하여 유저를 등록해주고 주문이 완료된 해당 입찰의 상태를 계약완료로 변경해주었다. 마찬가지로 position에 따라 유저의 point도 결제금액만큼 증차감 시켰다.

### GET /orders/size-price/{int:product_id}/{int:position_id} (상품의 사이즈별 즉시 거래가 조회)

```python
class SizePriceView(View):
    @login_decorator
    def get(self, request, product_id, position_id):
        try:
            CheckId.check_product_id(product_id)
            CheckId.check_bidding_position_id(position_id)

            product = Product.objects.select_related('brand').get(id = product_id)
            sizes   = ProductSize.objects.select_related('size').filter(product_id =
            product_id).prefetch_related(
                      Prefetch('bidding_set', queryset = Bidding.objects.filter(bidding_position_id =
                      position_id, bidding_status_id = BiddingStatusId.ON_BIDDING.value).\
                      order_by('price' if position_id == BiddingPositionId.SELL.value else '-price')))

            product_info = {
                'product_image_url'    : product.productimage_set.first().image_url,
                'product_name'         : product.name,
                'product_brand'        : product.brand.name,
                'product_model_number' : product.model_number,
            }

            size_price_list = [{
                'productsize_id' : size.id,
                'size'           : size.size.size,
                'bidding_id'     : size.bidding_set.first().id if size.bidding_set.first() else None,
                'bidding_price'  : size.bidding_set.first().price if size.bidding_set.first() else None,
            } for size in sizes]

            return JsonResponse({'product_info' : product_info, 'size_price_list' : size_price_list}, status =
            200)

        except Product.DoesNotExist:
            return JsonResponse({'message' : 'PRODUCT_DOES_NOT_EXIST'}, status = 404)

        except Product.MultipleObjectsReturned:
            return JsonResponse({'message' :  'MULTIPLE_RETURN_ERROR'}, status = 400)

        except BiddingPosition.DoesNotExist:
            return JsonResponse({'message' : 'INVALID_BIDDING_POSITION'}, status = 400)
```

유저가 구매/판매 페이지에 들어갔을 때 해당 상품의 정보와 상품의 사이즈별로 형성되어있는 즉시거래가의 데이터를 보내주는 api이다. 만약 즉시거래가가 형성돼있지 않은 사이즈라면 다음 페이지에서 주문은 불가능하고 입찰 생성요청만 가능하다.

![](https://user-images.githubusercontent.com/61782539/140075771-17bbd095-e526-4016-a6b5-29d704edd7e0.gif)

### GET /orders/price/{int:product_id} (상품의 시세 조회)

```python
class PriceHistoryView(View):
    @query_debugger
    def get(self, request, product_id):
        try:
            CheckId.check_product_id(product_id)
            size   = request.GET.get('size')
            period = request.GET.get('period', '1y')
            sort   = request.GET.get('sort')
            limit  = int(request.GET.get('limit', 5))
            offset = int(request.GET.get('offset', 0))
            limit  = offset + limit

            sort_by = {
                'low_price'  : 'price',
                'high_price' : '-price',
                'low_size'   : 'size',
                'high_size'  : '-size',
                'recent'     : '-created_at'
            }

            order_period = {
                '1m' : datetime.now() - relativedelta(months = 1),
                '3m' : datetime.now() - relativedelta(months = 3),
                '6m' : datetime.now() - relativedelta(months = 6),
                '1y' : datetime.now() - relativedelta(years = 1),
            }

            order_grape_filter = (Q(bidding__product_size__product_id = product_id) & Q(created_at__range =   (order_period.get(period, '1y'), datetime.now())))
            order_filter       = Q(bidding__product_size__product_id = product_id)
            bidding_filter     = (Q(bidding_status_id = BiddingStatusId.ON_BIDDING.value) &
                                  Q(product_size__product_id = product_id))

            if size:
                if not ProductSize.objects.filter(product_id = product_id, size__size = size).exists():
                    return JsonResponse({'message' : 'PRODUCT_SIZE_DOES_NOT_EXIST'}, status = 404)

                product_size = ProductSize.objects.get(product_id = product_id, size__size = size)
                order_grape_filter.add(Q(bidding__product_size = product_size), Q.AND)
                order_filter.add(Q(bidding__product_size = product_size), Q.AND)
                bidding_filter.add(Q(product_size = product_size), Q.AND)

            order_graph   =
            Order.objects.select_related('bidding').filter(order_grape_filter).order_by('created_at')
            orders        = Order.objects.annotate(price = F('bidding__price'), size = F('bidding__product_size__size__size')).select_related('bidding__product_size__size').\
                            filter(order_filter).order_by(sort_by.get(sort, '-created_at'))
            sell_biddings = Bidding.objects.annotate(size = F('product_size__size__size')).select_related('product_size__size').\
                            filter(bidding_filter, bidding_position_id =
                                   BiddingPositionId.SELL.value).order_by(sort_by.get(sort, 'price'))
            buy_biddings  = Bidding.objects.annotate(size = F('product_size__size__size')).select_related('product_size__size').\
                            filter(bidding_filter, bidding_position_id = BiddingPositionId.BUY.value).order_by(sort_by.get(sort, '-price'))

            data = {
            'order_graph_data' : [{
                'id'         : order.id,
                'price'      : order.bidding.price,
                'created_at' : order.created_at.strftime('%Y-%m-%d')
            }for order in order_graph],

            'order_list' : [{
                'id'         : order.id,
                'price'      : order.bidding.price,
                'size'       : order.bidding.product_size.size.size,
                'created_at' : order.created_at.strftime('%Y-%m-%d')
            }for order in orders[offset:limit]],

            'sell_bidding_list' : [{
                'price' : sell_bidding['price'],
                'size'  : sell_bidding['size'],
                'count' : sell_bidding['price_count']
            }for sell_bidding in sell_biddings.values('price', 'size').annotate(price_count = Count('price')).distinct()[offset:limit]],

            'buy_bidding_list' : [{
                'price' : buy_bidding['price'],
                'size'  : buy_bidding['size'],
                'count' : buy_bidding['price_count']
            }for buy_bidding in buy_biddings.values('price','size').annotate(price_count = Count('price')).distinct()[offset:limit]]
            }

            return JsonResponse({'data' : data}, status = 200)

        except Product.DoesNotExist:
            return JsonResponse({'message' : 'PRODUCT_DOES_NOT_EXIST'}, status = 404)

        except ProductSize.DoesNotExist:
            return JsonResponse({'message' : 'PRODUCT_SIZE_DOES_NOT_EXIST'}, status = 404)

        except ProductSize.MultipleObjectsReturned:
            return JsonResponse({'message' : 'MULTIPLE_RETURN_ERROR'}, status = 400)
```

kream 사이트에는 상품 상세페이지로 들어갔을 때 해당 상품의 체결거래가를 그래프로 시각화하여 보여주고 판매/구매 입찰내역들도 보여준다. 이번 프로젝트에서 이 부분도 구현해보았다.

먼저 주문내역 그래프 데이터는 기간별, 사이즈별 필터링만 적용되고 솔팅은 적용되지 않기 때문에 필터 조건과 쿼리셋을 따로 관리하였다. relativedelta 모듈을 사용해서 날짜 연산이 가능했고 요청의 `period` 값에 따라 `created_at__range` 키워드를 통해 해당하는 기간만큼만 주문내역 데이터를 필터링할 수 있었다. 사이즈로 필터링했을 때는 그래프를 포함하여 주문내역, 입찰내역 데이터 모두 필터링이 적용되고, 솔팅은 주문내역은 최신순, 판매 입찰 내역은 낮은 가격순, 구매 입찰 내역은 높은 가격순이 기본이 되게 했고 요청에 따라 가격순, 사이즈순, 최신순으로 솔팅되게 하였다.

![](https://user-images.githubusercontent.com/61782539/140075522-8afded39-ee1e-4f14-a4ed-ed0932fc73dd.gif)

### GET /orders (주문, 입찰중인 내역 조회)

```python
class OrderListView(View):
    @login_decorator
    def get(self, request):
        user = request.user

        buy_orders  = Order.objects.select_related('bidding__product_size__product__brand',
                                                   'bidding__product_size__size', 'order_status').\
                    filter(buyer = user).prefetch_related('bidding__product_size__product__productimage_set')

        sell_orders = Order.objects.select_related('bidding__product_size__product__brand',
                                                   'bidding__product_size__size', 'order_status').\
                    filter(seller = user).prefetch_related('bidding__product_size__product__productimage_set')

        biddings    = Bidding.objects.select_related('product_size__product__brand', 'product_size__size').\
                    filter(user = user, bidding_status_id = BiddingStatusId.ON_BIDDING.value).prefetch_related('product_size__product__productimage_set')

        buy_order_list = [{
            'product_id'        : buy_order.bidding.product_size.product.id,
            'product_image_url' : buy_order.bidding.product_size.product.productimage_set.all()[0].image_url,
            'product_name'      : buy_order.bidding.product_size.product.name,
            'product_brand'     : buy_order.bidding.product_size.product.brand.name,
            'size'              : buy_order.bidding.product_size.size.size,
            'order_status'      : buy_order.order_status.status,
        }for buy_order in buy_orders]

        sell_order_list = [{
            'product_id'        : sell_order.bidding.product_size.product.id,
            'product_image_url' : sell_order.bidding.product_size.product.productimage_set.all()[0].image_url,
            'product_name'      : sell_order.bidding.product_size.product.name,
            'product_brand'     : sell_order.bidding.product_size.product.brand.name,
            'size'              : sell_order.bidding.product_size.size.size,
            'order_status'      : sell_order.order_status.status,
        }for sell_order in sell_orders]

        buy_bidding_list = [{
            'product_id'        : buy_bidding.product_size.product.id,
            'product_image_url' : buy_bidding.product_size.product.productimage_set.all()[0].image_url,
            'product_name'      : buy_bidding.product_size.product.name,
            'product_brand'     : buy_bidding.product_size.product.brand.name,
            'size'              : buy_bidding.product_size.size.size,
        } for buy_bidding in biddings.filter(bidding_position_id = BiddingPositionId.BUY.value)]

        sell_bidding_list = [{
            'product_id'        : sell_bidding.product_size.product.id,
            'product_image_url' : sell_bidding.product_size.product.productimage_set.all()[0].image_url,
            'product_name'      : sell_bidding.product_size.product.name,
            'product_brand'     : sell_bidding.product_size.product.brand.name,
            'size'              : sell_bidding.product_size.size.size,
        } for sell_bidding in biddings.filter(bidding_position_id = BiddingPositionId.SELL.value)]

        buy_order_count       = len(buy_order_list)
        sell_order_count      = len(sell_order_list)
        buy_on_bidding_count  = len(buy_bidding_list)
        sell_on_bidding_count = len(sell_bidding_list)

        data = {
            'user_name'             : user.name,
            'user_email'            : user.email,
            'user_point'            : user.point,
            'buy_order_count'       : buy_order_count,
            'buy_order_list'        : buy_order_list,
            "sell_order_count"      : sell_order_count,
            'sell_order_list'       : sell_order_list,
            'buy_on_bidding_count'  : buy_on_bidding_count,
            'buy_bidding_list'      : buy_bidding_list,
            'sell_on_bidding_count' : sell_on_bidding_count,
            'sell_bidding_list'     : sell_bidding_list
        }

        return JsonResponse({'data' : data}, status = 200)
```

마이페이지에 들어갔을 때 해당 유저의 포인트와 구매/판매 내역과 구매/판매 입찰 내역을 볼 수 있도록 데이터를 보내주는 api이다. 입찰내역중에 입찰 상태가 거래완료인 입찰들은 주문내역에 이미 포함돼있기 때문에 입찰내역은 현재 입찰중인 입찰들만 보여주도록 했다. productimage 테이블에 접근해서 첫번째의 이미지를 가져오는 부분에서 만약 `first()`를 사용한다면 `prefetch_related()` 로 productimage 테이블을 지정해주어도 for 문을 돌 때 n+1 problem이 해결되지 않는다. `first()`를 사용했을 때 특별히 order_by를 지정해주지 않으면 id값으로 정렬시킨 후 첫번째를 가져오기 때문에 for문을 돌 때마다 id로 정렬시키는 쿼리가 날라간다. 이 문제를 해결하려면 `productimage_set.all()[0].image_url` 처럼 인덱스로 접근하면 된다.

```python
sizes   = ProductSize.objects.select_related('size').filter(product_id =
            product_id).prefetch_related(
                      Prefetch('bidding_set', queryset = Bidding.objects.filter(bidding_position_id =
                      position_id, bidding_status_id = BiddingStatusId.ON_BIDDING.value).\
                      order_by('price' if position_id == BiddingPositionId.SELL.value else '-price')))

'bidding_id'     : size.bidding_set.first().id if size.bidding_set.first() else None
```

위의 사이즈별 즉시거래가를 조회하는 api에서는 bidding 테이블에 대해 price나 -price로 order_by를 지정해놓았기 때문에 `first()`를 사용하여도 문제되지 않는다.

![](https://user-images.githubusercontent.com/61782539/140076298-19e102b9-69d6-4c52-a1d8-90043f5b867f.gif)
![](https://user-images.githubusercontent.com/61782539/140076515-c785cbf2-5322-4b46-ac6d-ab5622baff2c.gif)
