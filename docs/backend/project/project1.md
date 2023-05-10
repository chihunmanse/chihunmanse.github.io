---
sidebar_position: 1
---

# LUSH Clone Project

**기간: 2021-10-10 ~ 2021-10-29**
**Stack: Python, Django, MySQL, DjangoORM**

**[Github 링크](https://github.com/chihunmanse/LUSH-motive-Project)**

## End Point
프로젝트에서 상품 목록 조회 API와 상품 상세 조회 API, 카테고리 정보 API, 장바구니 상품 추가, 수정, 삭제 API를 만드는 역할을 담당했다.

- GET/products (상품 목록/ 필터링, 솔팅)
- GET/products/{int:product_id} (상품 상세)
- GET/navigator/{int:category_id} (네비게이터)
- GET/category (카테고리 리스트)
- POST/carts (장바구니 생성)
- GET/carts (장바구니 조회)
- DEL/carts/{int:cart_id} (장바구니 삭제)
- PATCH/carts/{int:cart_id} (장바구니 수정)

## Code

### GET/products (상품 목록 조회)

```python
class ProductView(View) :
    #@query_debugger
    def get(self, request) :
        try :
            category_id = request.GET.get('category')
            sort        = request.GET.get('sort')
            search      = request.GET.get('search')
            limit       = int(request.GET.get('limit', 0))
            offset      = int(request.GET.get('offset', 0))

            sort_by = {
                'low_price'  : 'price',
                'high_price' : '-price',
                'recent'     : '-created_at',
                'old'        : 'created_at',
                'review'     : '-review_count',
            }

            products_filter = Q(deleted_at = None)
            category_info   = {}

            if category_id :
                category = Category.objects.select_related('main_category').get(id = 
                category_id)
                products_filter.add(Q(category = category) if category.main_category else 
                Q(category__main_category = category), Q.AND)

                category_info = {
                    'id'             : category.id,
                    'name'           : category.name,
                    'category_image' : category.image_url,
                    'description'    : category.description,
                }

            if search :
                products_filter.add(Q(name__icontains = 
                search)|Q(category__main_category__name = search)|Q(category__name = 
                search), Q.AND)
        
            products = 
            Product.objects.filter(products_filter).prefetch_related('tags').annotate(price 
            = Min('option__price'), review_count = Count('review'))\
                       .order_by(sort_by.get(sort, 'id'))

            if limit :
                limit    = offset + limit
                products = products[offset : limit]

            products_list = [{
                'id'            : product.id,
                'name'          : product.name,
                'thumbnail_url' : product.thumbnail_url,
                'price'         : product.price,
                'tags'          : [tag.name for tag in product.tags.all()]
            } for product in products]

            products_count = len(products_list)

            return JsonResponse({'category_info' : category_info, 'products_list' : 
            products_list, 'products_count' : products_count}, status = 200)
        
        except Category.DoesNotExist :
            return JsonResponse({'message' : 'INVALID_CATEGORY_ID'}, status = 404)
        
        except Category.MultipleObjectsReturned :
            return JsonResponse({'message' : 'MULTIPLE_CATEGORY_ERROR'}, status = 400)
```

상품 필터링은 `Q()`를 활용해서 구현했고 카테고리와 검색어를 통해 할 수 있다. 

먼저 카테고리로 필터링 할 때는 요청에서 얻은 카테고리가 메인 카테고리인지 서브카테고리인지 구분해주어야 했기 때문에 (Category 테이블에 셀프 참조하는 `main_category`칼럼 값이 null이면 메인카테고리, 참조하는 카테고리가 있으면 서브카테고리) 필터 조건을 추가할 때 삼항연산자를 사용했다.

검색시에는 상품명에 검색어가 포함되어있거나, 검색어가 서브카테고리나 메인카테고리의 이름과 일치했을 때를 조건에 추가했다. 

상품 정렬은 낮은 가격순, 높은 가격순, 최신순, 오래된 순, 리뷰 많은 순으로 할 수 있고 sort_by 딕셔너리를 만들어 놓고 상품 쿼리셋을 선언할 때 요청에서 `sort` 값이 들어왔다면 order_by에 sort_by 딕셔너리의 해당 키의 값을 불러오고 요청에 sort가 없거나 잘못된 키로 들어왔을 때는 기본적으로 상품id로 정렬되도록 했다. 상품가격은 옵션 테이블에 있기 때문에 `annotate()`를 활용해서 옵션 중에 가장 낮은 가격 `Min('option__price')`들을 `price`라는 이름으로 불러왔고 리뷰도 마찬가지로 `annotate()`를 활용해서 `review_count`라는 이름으로 리뷰 수를 Count하여 불러왔다.

### GET/products/{int:product_id} (상품 상세)

```python
class ProductDetailView(View) :
    #@query_debugger
    def get(self, request, product_id) :
        try :
            if not Product.objects.filter(id = product_id).exists() :
                return JsonResponse({'message' : 'INVALID_PRODUCT_ID'}, status = 404)
        
            product = Product.objects.prefetch_related(
                     'option_set', 'tags', 'detailimage_set', Prefetch('review_set', 
                     queryset = Review.objects.filter(product = product_id).order_by('-
                     created_at')))
                     .select_related('category__main_category').annotate(rating_average =
                      Avg('review__rating')).get(id = product_id)
            
            product_info = {
                'id'                 : product.id,
                'name'               : product.name,
                'thumbnail_url'      : product.thumbnail_url,
                'how_to'             : product.how_to,
                'ingredients'        : product.ingredients,
                'options'            : [{
                    'option_id'      : option.id,
                    'price'          : option.price,
                    'size'           : option.size,
                } for option in product.option_set.all()],
                'tags'               : [tag.name for tag in product.tags.all()],
                'main_category_name' : product.category.main_category.name,
                'sub_category_name'  : product.category.name,
                'detail_images'      : [image.image_url for image in
                product.detailimage_set.all()],
                'rating_average'     : round(product.rating_average, 1) if 
                product.rating_average else 0,
                'review_count'       : product.review_set.count(),
                'photo_review_count' : len([review.image_url for review in
                product.review_set.all() if review.image_url]),
                'photo_reviews'      : [{'review_id' : review.id, 'image_url' : 
                review.image_url} for review in product.review_set.all() if 
                review.image_url][:4]
            }

            return JsonResponse({'product_info' : product_info}, status = 200)
        
        except Product.DoesNotExist :
            return JsonResponse({'message' : 'INVALID_PRODUCT_ID'}, status = 404)
        
        except Product.MultipleObjectsReturned :
            return JsonResponse({'message' : 'MULTIPLE_PRODUCT_ERROR'}, status = 400)
```

상품 상세 정보에는 리뷰 평점 평균값과 리뷰 수, 리뷰 중에 이미지가 있는 포토 리뷰 수, 최신순으로 정렬된 포토 리뷰의 이미지 최대 4개의 데이터를 함께 보내주어야 했다. 리뷰 평점의 평균값은 `annotate()`와 `Avg()`를 사용했고 구해진 평균값을 소수점 1자리까지 반올림하기 위해 `round()`를 사용했다. 만약 조회하려는 상품에 리뷰가 하나도 달리지 않았다면 `Avg('review__rating')`은 None을 반환하고 `round()`에 None이 들어가면 TypeError를 발생시키기 때문에 `review_average`에 값이 있을 때만 `round()`에 넣고 None이면 0이 되도록 했다.

그리고 포토리뷰 데이터를 담을 때 최신순으로 정렬시켜서 담아야 했는데, 

```python
prefetch_related('option_set', 'tags', 'detailimage_set', 'review_set')

'photo_reviews': [{'review_id' : review.id, 'image_url' : review.image_url} for review in product.review_set.all().order_by('-created_at') if review.image_url][:4]
```

`prefetch_related` 함수에 `'review_set'`으로만 지정하고 아래에서 다시 정렬시키면 

```sql
 DEBUG (0.000) SELECT `reviews`.`id`, `reviews`.`user_id`, `reviews`.`product_id`, `reviews`.`content`, `reviews`.`rating`, `reviews`.`image_url`, `reviews`.`created_at`, `reviews`.`updated_at` FROM `reviews` WHERE `reviews`.`product_id` IN (19); args=(19,)

 DEBUG (0.001) SELECT `reviews`.`id`, `reviews`.`user_id`, `reviews`.`product_id`, `reviews`.`content`, `reviews`.`rating`, `reviews`.`image_url`, `reviews`.`created_at`, `reviews`.`updated_at` FROM `reviews` WHERE `reviews`.`product_id` = 19 ORDER BY `reviews`.`created_at` DESC; args=(19,)
```

ORDER BY하는 쿼리가 다시 날아간다.

```python
Product.objects.prefetch_related(
                    'option_set', 'tags', 'detailimage_set', 
                    Prefetch('review_set',
                    queryset = Review.objects.filter(product = product_id).order_by
                             ('-created_at')))
```

`Prefetch()`를 통해서 queryset에 최신순으로 정렬된 리뷰 쿼리셋으로 직접 지정하고 사용하면

```sql
 DEBUG (0.000) SELECT `reviews`.`id`, `reviews`.`user_id`, `reviews`.`product_id`, `reviews`.`content`, `reviews`.`rating`, `reviews`.`image_url`, `reviews`.`created_at`, `reviews`.`updated_at` FROM `reviews` WHERE (`reviews`.`product_id` = 19 AND `reviews`.`product_id` IN (19)) ORDER BY `reviews`.`created_at` DESC; args=(19, 19)
```

이렇게 하나의 쿼리로 합칠 수 있었다.

### GET/navigator/{int:category_id} (네비게이터)

처음 모델에는 서브카테고리 테이블이 따로 존재했다. 그런데 러쉬 사이트에는 카테고리나 서브카테고리를 누를 때, 배너이미지와 한 줄의 설명 문구가 뜨는데 그때 사용되는 데이터는 카테고리의 계층과는 상관이 없었다. 그럼에도 카테고리 정보를 주는 api와 서브카테고리 정보를 주는 api를 나눠서 만들어야 했고 멘토님께서 차라리 서브카테고리 테이블을 없애고 카테고리 테이블 안에서 셀프참조함으로써 계층이 구분되도록 하는게 어떻냐는 피드백을 주셔서 모델을 수정했다.

덕분에 카테고리 id만 있으면 메인과 서브 상관없이 해당 카테고리 정보를 줄 수 있게 됐지만 카테고리 계층과 관련된 데이터에 접근할 때는 요청에서 들어온 카테고리가 메인인지 서브인지 구분하는 작업을 해줘야하는 단점이 있었다.  

```python
class NavigatorView(View) :
    def get(self, request, category_id) :
        try :
            if not Category.objects.filter(id = category_id).exists() :
                return JsonResponse({'message' : 'INVALID_CATEGORY_ID'}, status = 404)
         
            category = Category.objects.select_related('main_category').get(id = 
            category_id)

            if category.main_category == None :      
                navigator_list = {
                    'category_id'                 : category.id,
                    'category_name'               : category.name,
                    'category_products_count'     : 
                    Product.objects.filter(category__main_category = category).count(),
                    'sub_categories'              : [{
                    'sub_category_id'             : sub_category.id,
                    'sub_category_name'           : sub_category.name,
                    'sub_category_products_count' : sub_category.product_set.count()
                    } for sub_category in 
                    category.sub_category.prefetch_related('product_set').all()]
                }

            else :
                navigator_list = {
                    'category_id'                 : category.main_category.id,
                    'category_name'               : category.main_category.name,
                    'category_products_count'     : 
                    Product.objects.filter(category__main_category = 
                    category.main_category).count(),
                    'sub_categories'              : [{
                    'sub_category_id'             : sub_category.id,
                    'sub_category_name'           : sub_category.name,
                    'sub_category_products_count' : sub_category.product_set.count()
                    } for sub_category in 
                  category.main_category.sub_category.prefetch_related('product_set').all()]
                }
            
            return JsonResponse({'navigator_list' : navigator_list}, status = 200)
        
        except Category.DoesNotExist :
            return JsonResponse({'message' : 'INVALID_CATEGORY_ID'}, status = 404)
        
        except Category.MultipleObjectsReturned :
            return JsonResponse({'message' : 'MULTIPLE_CATEGORY_ERROR'}, status = 400)

```

똑같은 구조를 가진 데이터를 생성하지만 요청에서 들어온 카테고리 id가 메인인지 서브인지에 따라 접근하는 방식이 달랐기 때문에 if else문을 사용했고 결과적으로 반복되는 코드가 많고 가독성도 좋지 않았다.

```python
class Navigator :
    def __init__(self, category) :
        self.category = category
    
    def get_category(self) :
        category = self.category.main_category if self.category.main_category else 
        self.category
        return category
    
    def gennerate_navigator_list(self) :
        navigator_list = {
            'category_id'                 : self.get_category().id,
            'category_name'               : self.get_category().name,
            'category_products_count'     : Product.objects.filter(category__main_category =
            self.get_category()).count(),
            'sub_categories'              : [{
            'sub_category_id'             : sub_category.id,
            'sub_category_name'           : sub_category.name,
            'sub_category_products_count' : sub_category.product_set.count()
            } for sub_category in 
            self.get_category().sub_category.prefetch_related('product_set').all()]
            }

        return navigator_list
```

멘토님께서 클래스를 따로 만들어서 리팩토링 해보면 좋을거 같다는 피드백을 주셨고 어설프게나마 진행해보았다. 일단 카테고리가 메인인지 서브인지에 따라 코드가 두 갈래로 나뉘었기 때문에, 카테고리를 클래스의 속성으로 만들고 카테고리를 구분해주는 함수와 그 함수를 사용해서 필요했던 데이터를 생성해주는 함수를 만들었다.

```python
class NavigatorView(View) :
    def get(self, request, category_id) :
        try :
            if not Category.objects.filter(id = category_id).exists() :
                return JsonResponse({'message' : 'INVALID_CATEGORY_ID'}, status = 404)
         
            category       = Category.objects.select_related('main_category').get(id = 
            category_id)
            navigator      = Navigator(category)
            navigator_list = navigator.gennerate_navigator_list()
            
            return JsonResponse({'navigator_list' : navigator_list}, status = 200)
        
        except Category.DoesNotExist :
            return JsonResponse({'message' : 'INVALID_CATEGORY_ID'}, status = 404)
        
        except Category.MultipleObjectsReturned :
            return JsonResponse({'message' : 'MULTIPLE_CATEGORY_ERROR'}, status = 400)
```

실제 요청을 받는 함수에서는 카테고리 정보만 얻어서 따로 만든 클래스의 인스턴스를 생성하고 데이터를 만들어주는 클래스의 함수를 실행하기만 하면 되었다. 결과적으로 반복되는 코드가 줄었고, 단순하게 나열되던 코드들을 필요한 동작들로 쪼개어 부품처럼 사용해볼 수 있던 경험이어서 기억에 남는다.

### POST/carts (장바구니 생성)

```python
class CartView(View) :
    @signin_decorator
    def post(self, request):
        try :
            data      = json.loads(request.body)
            user      = request.user
            option_id = data['option_id']
            quantity  = int(data['quantity'])

            if not Option.objects.filter(id = option_id).exists():
                return JsonResponse({'message' : 'INVALID_OPTION_ID'}, status = 404)
               
            cart, created = Cart.objects.get_or_create(
                user = user,
                option_id = option_id
            )

            cart.quantity += quantity
            cart.save()

            return JsonResponse({'message' : 'SUCCESS'}, status = 201)
       
        except JSONDecodeError:
            return JsonResponse({'message' : 'JSON_DECODE_ERROR'}, status = 400)
        
        except KeyError:
            return JsonResponse({'message' : "KEY_ERROR"}, status = 400)
```

장바구니에 상품을 추가할 때는 `get_or_create()`를 사용하여 장바구니에 이미 같은 상품이 담겨있다면 수량만 변경하고, 없다면 새로 생성할 수 있도록 했다. Cart 테이블에서 `quantity` 칼럼에 default = 0 으로 지정해줬기 때문에 생성할 때 `quantity`는 0으로 생성되고 후에 요청에서 얻은 `quantity`로 데이터를 수정해주었다. 

### GET/carts (장바구니 조회)

```python
    @signin_decorator
    def get(self, request):
        FREE_SHIPPING = 30000
        SHIPPING      = 2500
        carts         = Cart.objects.filter(user = 
        request.user).select_related('option__product__category')

        cart_list = [{
            'cart_id'       : item.id,
            'product_id'    : item.option.product.id,
            'product_name'  : item.option.product.name,
            'category_name' : item.option.product.category.name,
            'size'          : item.option.size,
            'quantity'      : item.quantity,
            'product_price' : item.option.price,
            'product_image' : item.option.product.thumbnail_url,
            'price'         : int(item.option.price) * int(item.quantity)
        }for item in carts]

        total_price    = int(carts.aggregate(total = Sum(F('quantity')*F('option__price')))
        ['total'] or 0)
        total_quantity = len(cart_list)
        shipping_price = 0 if total_price >= FREE_SHIPPING or total_price == 0 else SHIPPING
        order_price    = total_price + shipping_price

        return JsonResponse({
            'cart_list'      : cart_list,
            'total_price'    : total_price,
            'total_quantity' : total_quantity,
            'shipping'       : shipping_price,
            'order_price'    : order_price,
        }, status = 200)
```

장바구니 조회에서는 `aggregate()`를 활용해서 장바구니에 담긴 상품들의 총 가격을 구할 수 있었다. 만약 장바구니가 비어있다면 `Sum()`은 None을 반환할 것이기 때문에, `['total']`의 값이 null일 경우 0이 되도록 했다. (`aggregate()`가 반환되는 형태는 딕셔너리이므로) 

배송비는 `total_price`가 3만원 이상이거나 0원일 때는 0원이 되고 3만원 미만일 때는 2500원이 되도록 했다.