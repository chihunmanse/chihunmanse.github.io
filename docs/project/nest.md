---
title: NestJS & MongoDB Project
tags: [NestJS]
sidebar_position: 4
---

# NestJS Project

**기간: 2022-01-17 ~ 2022-01-28**

**Stack: TypeScript, NestJS, MongoDB, Mongoose**

**[Github 링크](https://github.com/chihunmanse/nest-api)**

**[API Document](https://documenter.getpostman.com/view/17663987/UVe9QUfM)**

## ENDPOINT

- POST /users/signup (회원가입)
- POST /users/signin (로그인)
- GET /users/reviews (작성 리뷰 조회)
- GET /categories (전체 카테고리 조회)
- GET /categories/:id (카테고리 조회)
- GET /products (전체 상품 조회)
- GET /products/keyword (카테고리&검색어로 상품 조회)
- GET /products/:id (상품 조회)
- POST /products/like (상품 좋아요)
- GET /products/like (좋아요한 상품 조회)
- POST /carts (장바구니 아이템 추가)
- PATCH /carts (장바구니 아이템 수정)
- DELETE /carts (장바구니 아이템 삭제)
- GET /carts (장바구니 조회)
- POST /products/reviews/:productId (리뷰 생성)
- GET /products/reviews/:productId (리뷰 조회)
- PUT /products/reviews/:reviewId (리뷰 수정)
- DELETE /products/reviews/:reviewId (리뷰 삭제)
- POST /image/upload (이미지 파일 업로드)

<!--truncate-->

## Code

### POST /users/signup (회원가입)

```ts title="users.schema.ts"
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop({
    default: 50000,
  })
  @IsNumber()
  @IsNotEmpty()
  point: number;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
    point: number;
  };
}

UserSchema.virtual("readOnlyData").get(function (this: User) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    point: this.point,
  };
});
```

`readonly`라는 `password`를 제외한 virtual 필드를 만들어서 유저 정보 조회시에 사용하였다.

```ts title="users.controller.ts"
@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly reviewsService: ReviewsService
  ) {}

  @Post("signup")
  async signUp(@Body() body: SignUpRequestDto) {
    return await this.usersService.signUp(body);
  }
}
```

```ts title="signup.request.dto.ts"
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

export class SignUpRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  name: string;
}
```

회원가입 요청에서 body에 대한 dto를 따로 생성하고 class-validator의 데코레이터들을 활용하여 유효성 검사를 수행했다.

```ts title="users.service.ts"
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp(body: SignUpRequestDto) {
    const { email, name, password } = body;

    const isUserExist = await this.usersRepository.existsByEmail(email);
    if (isUserExist) throw new HttpException("DUPLICATE_EMAIL", 409);

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.usersRepository.createUser({
      email,
      name,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }
}
```

bcrypt를 통해 비밀번호를 암호화하여 유저를 생성한다.

```ts title="users.repository.ts"
@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.userModel.exists({ email });
    return result;
  }

  async createUser(user: SignUpRequestDto): Promise<User> {
    return await this.userModel.create(user);
  }
}
```

DB 작업을 하는 함수들을 repository에 따로 작성하여 service에서 활용하였다.

### POST /users/signin (로그인)

```ts title="auth.service.ts"
async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;

    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) throw new UnauthorizedException('INVALID_EMAIL');

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated)
      throw new UnauthorizedException('INVALID_PASSWORD');

    const payload = { id: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
```

```ts title="login.request.dto.ts"
import { PickType } from "@nestjs/mapped-types";
import { User } from "src/users/users.schema";

export class LoginRequestDto extends PickType(User, [
  "email",
  "password",
] as const) {}
```

### GET /products/keyword (상품 조회)

```ts title="products.schema.ts"
@Schema(options)
export class Product extends Document {
  @Prop({
    type: Category,
    required: true,
    ref: "Category",
  })
  @IsNotEmpty()
  category: Category;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: false,
  })
  @IsString()
  thumbnailImage: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Prop({
    default: 0,
  })
  @IsNumber()
  likeCount: number;

  @Prop({
    type: Object,
  })
  @IsObject()
  likeUsers: object;

  @Prop()
  recentReviews: Review[];
}
```

```ts title="products.controller.ts"
@Get('keyword')
  async getProductByKeyword(
    @Query(QueryValidationPipe) query: ProductByKeywordRequestDto,
  ) {
    return await this.productsService.getProductByKeyword(query);
  }
```

```ts title="query.validation.pipe.ts"
@Injectable()
export class QueryValidationPipe implements PipeTransform {
  transform(value: any) {
    const { category, offset, limit } = value;
    if (!isValidObjectId(category))
      throw new BadRequestException("INVALID_CATEGORY_ID");

    if (offset < 0) throw new BadRequestException("INVALID_OFFSET");
    if (limit < 0) throw new BadRequestException("INVALID_LIMIT");
    return value;
  }
}
```

`category`값이 objectId 형식이 맞는지, `offset`과 `limit`이 양수인지에 대해 체크하기 위해 요청의 query 값에 대해 유효성 검사를 수행하는 pipe를 따로 작성하였다.

```ts title="productByKeyword.request.dto.ts"
export class ProductByKeywordRequestDto {
  category: string | null;

  sort: string | null;

  offset: number | null;

  limit: number | null;

  search: string | null;
}
```

상품 조회시에 필터링 및 솔팅에 사용되는 query에 대한 dto이다.

```ts title="products.repository.ts"
async findProductByKeyword(
    query: ProductByKeywordRequestDto,
  ): Promise<Product[]> {
    const { category, sort, offset = 0, limit = 10, search } = query;
    const sortBy = {
      lowPrice: 'price',
      highPrice: '-price',
      likeCount: '-likeCount',
    };
    const filterQuery = new Query();
    if (category) {
      filterQuery.find({ 'category._id': category });
    }
    const products = await this.productModel
      .find(filterQuery)
      .or([
        { name: new RegExp(search) },
        { 'category.name': new RegExp(search) },
      ])
      .select(['-category', '-likeUsers', '-recentReviews'])
      .skip(offset)
      .limit(limit)
      .sort(sortBy[sort]);

    return products;
  }
```

### POST /products/like (상품 좋아요)

```ts title="products.schema.ts"
@Prop({
    default: 0,
  })
  @IsNumber()
  likeCount: number;

  @Prop({
    type: Object,
  })
  @IsObject()
  likeUsers: object;
```

![img1](https://i.ibb.co/fQCyWNK/2022-01-28-4-10-08.png)

products에 `likeUsers`라는 object 타입의 필드를 생성하고 유저가 좋아요한 상품들을 조회할 때 검색속도를 높이기 위해 array 타입이 아닌 좋아요한 유저의 objectId를 키 값으로 객체에 데이터를 추가하였다.

```ts title="products.controller.ts"
@UseGuards(JwtAuthGuard)
  @Post('like')
  async updateLikeUser(
    @Body('productId', ObjectIdValidationPipe) productId: string,
    @LogInUser() user: User,
  ) {
    return this.productsService.updateLikeUser(productId, user._id);
  }
```

```ts title="products.service.ts"
async updateLikeUser(productId: string, userId: string) {
    const isProductExist = await this.productsRepository.existsById(productId);

    if (!isProductExist) throw new BadRequestException('INVALID_PRODUCT_ID');

    const isLikeExist = await this.productsRepository.existsLike(
      productId,
      userId,
    );

    if (!isLikeExist) {
      const result = await this.productsRepository.addLikeUser(
        productId,
        userId,
      );
      return result;
    } else {
      const result = await this.productsRepository.deleteLikeUser(
        productId,
        userId,
      );
      return result;
    }
  }
```

유저가 이미 좋아요한 상품이라면 `likeUsers` object에서 유저의 key값을 삭제하고 좋아요하지 않았다면 유저의 key값을 생성한다.

```tsx title="products.repository.ts"
	async existsLike(productId: string, userId: string): Promise<boolean> {
    const key = `likeUsers.${userId}`;
    const query = {
      _id: productId,
    };
    query[key] = true;

    const result = await this.productModel.exists(query);
    return result;
  }

  async addLikeUser(productId: string, userId: string): Promise<Product> {
    const key = `likeUsers.${userId}`;
    const query = {};
    query[key] = true;

    const result = await this.productModel
      .findOneAndUpdate(
        { _id: productId },
        {
          $set: query,
          $inc: { likeCount: 1 },
        },
        {
          new: true,
        },
      )
      .select('likeCount');
    return result;
  }

  async deleteLikeUser(productId: string, userId: string): Promise<Product> {
    const key = `likeUsers.${userId}`;
    const query = {};
    query[key] = true;

    const result = await this.productModel
      .findOneAndUpdate(
        { _id: productId },
        {
          $unset: query,
          $inc: { likeCount: -1 },
        },
        {
          new: true,
        },
      )
      .select('likeCount');
    return result;
  }
```

### GET /products/like (좋아요한 상품 조회)

```ts title="products.controller.ts"
@UseGuards(JwtAuthGuard)
  @Get('like')
  async getLikeProduct(@LogInUser() user: User) {
    return this.productsService.getLikeProduct(user._id);
  }
```

```ts title="products.repository.ts"
async findLikeProduct(userId: string): Promise<Product[]> {
    const key = `likeUsers.${userId}`;
    const query = {};
    query[key] = true;

    const likeProducts = await this.productModel
      .find(query)
      .select(['-category', '-likeUsers']);
    return likeProducts;
  }
```

products 콜렉션에서 `likeUsers`의 key값이 로그인 유저의 objectId와 같고 value값이 true인 상품들을 필터링하여 조회한다.

### 장바구니 아이템 추가, 수정, 삭제, 조회

- POST /carts (장바구니 아이템 추가)
- PATCH /carts (장바구니 아이템 수정)
- DELETE /carts (장바구니 아이템 삭제)
- GET /carts (장바구니 조회)

```ts title="arts.schema.ts"
@Schema(options)
export class Cart extends Document {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: "User",
  })
  @IsNotEmpty()
  user: Types.ObjectId;

  @Prop({
    required: true,
  })
  items: [
    {
      product: {
        type: Types.ObjectId;
        ref: "Product";
        required: true;
      };
      quantity: {
        type: number;
        required: true;
        default: 0;
      };
    }
  ];
}
```

`items`라는 array 타입 필드에 `product`와 수량들을 저장하는 형태이다.

```ts title="carts.controller.ts"
@UseGuards(JwtAuthGuard)
  @Post('')
  async addCartItem(
    @Body('productId', ObjectIdValidationPipe) productId: string,
    @Body('quantity') quantity: number,
    @LogInUser() user: User,
  ) {
    return this.cartsService.addCartItem(productId, quantity, user._id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('')
  async updateCartItem(
    @Body('productId', ObjectIdValidationPipe) productId: string,
    @Body('quantity') quantity: number,
    @LogInUser() user: User,
  ) {
    return this.cartsService.updateCartItem(productId, quantity, user._id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('')
  async deleteCartItem(
    @Body('productId', ObjectIdValidationPipe) productId: string,
    @LogInUser() user: User,
  ) {
    return this.cartsService.deleteCartItem(productId, user._id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getCart(@LogInUser() user: User) {
    return this.cartsService.getCart(user._id);
  }
```

```ts title="carts.service.ts"
async addCartItem(productId: string, quantity: number, userId: string) {
    const isProductExist = await this.productsRepository.existsById(productId);

    if (!isProductExist) throw new BadRequestException('INVALID_PRODUCT_ID');

    const existCartItem = await this.cartsRepository.existsCartItem(
      productId,
      userId,
    );

    if (existCartItem) {
      const updateItem = await this.cartsRepository.updateCartItem(
        productId,
        quantity,
        userId,
      );
      return updateItem;
    } else {
      const addItem = await this.cartsRepository.addCartItem(
        productId,
        quantity,
        userId,
      );
      return addItem;
    }
  }

  async updateCartItem(productId: string, quantity: number, userId: string) {
    const isItemExist = await this.cartsRepository.existsCartItem(
      productId,
      userId,
    );

    if (!isItemExist) throw new BadRequestException('DOES_NOT_EXIST_ITEM');

    const updateItem = await this.cartsRepository.updateItemQuantity(
      productId,
      quantity,
      userId,
    );

    return updateItem;
  }

  async deleteCartItem(productId: string, userId: string) {
    const isItemExist = await this.cartsRepository.existsCartItem(
      productId,
      userId,
    );

    if (!isItemExist) throw new BadRequestException('DOES_NOT_EXIST_ITEM');

    const deleteItem = await this.cartsRepository.deleteCartItem(
      productId,
      userId,
    );

    return deleteItem;
  }

  async getCart(userId: string) {
    const cart = await this.cartsRepository.findCartByUser(userId);
    if (!cart) {
      return cart;
    }
    const shipping = this.calculateShipping(cart.totalPrice);
    cart.shipping = shipping;
    cart.orderPrice = cart.totalPrice + shipping;
    return cart;
  }

  calculateShipping(totalPrice: number) {
    const FREE_SHIPPING = 30000;
    const SHIPPING = 3000;
    const shippingPrice =
      totalPrice >= FREE_SHIPPING || totalPrice == 0 ? 0 : SHIPPING;

    return shippingPrice;
  }
```

`addCardItem` 함수에서는 추가하려는 아이템이 장바구니에 있는지 확인하고 있으면 수량 추가, 없으면 `items` 필드에 새로운 item을 push 한다.

`updateCartItem` 함수에서는 수정하려는 아이템이 존재하는지 확인 후에 수량 수정한다.

`deleteCartItem` 함수에서는 삭제하려는 아이템이 존재하는지 확인 후에 `items` 필드에서 해당 item을 제거한다.

```ts title="carts.repository.ts"
async existsCartItem(productId: string, userId: string): Promise<boolean> {
    const result = await this.cartModel.exists({
      user: userId,
      items: {
        $elemMatch: {
          product: new Types.ObjectId(productId),
        },
      },
    });
    return result;
  }

  async addCartItem(
    productId: string,
    quantity: number,
    userId: string,
  ): Promise<Cart> {
    const addItem = await this.cartModel.findOneAndUpdate(
      { user: userId },
      {
        $push: {
          items: {
            product: new Types.ObjectId(productId),
            quantity: quantity,
          },
        },
      },
      { new: true, upsert: true },
    );

    return addItem;
  }

  async updateCartItem(
    productId: string,
    quantity: number,
    userId: string,
  ): Promise<Cart> {
    const updateItem = await this.cartModel.findOneAndUpdate(
      {
        user: userId,
        items: { $elemMatch: { product: new Types.ObjectId(productId) } },
      },
      {
        $inc: {
          'items.$.quantity': quantity,
        },
      },
      {
        new: true,
      },
    );

    return updateItem;
  }

  async updateItemQuantity(
    productId: string,
    quantity: number,
    userId: string,
  ): Promise<Cart> {
    const updateItem = await this.cartModel.findOneAndUpdate(
      {
        user: userId,
        items: { $elemMatch: { product: new Types.ObjectId(productId) } },
      },
      {
        $set: {
          'items.$.quantity': quantity,
        },
      },
      {
        new: true,
      },
    );

    return updateItem;
  }

  async deleteCartItem(productId: string, userId: string): Promise<Cart> {
    const deleteItem = await this.cartModel.findOneAndUpdate(
      {
        user: userId,
        items: { $elemMatch: { product: new Types.ObjectId(productId) } },
      },
      {
        $pull: {
          items: {
            product: new Types.ObjectId(productId),
          },
        },
      },
      {
        new: true,
      },
    );

    return deleteItem;
  }
```

```ts title="populate 이용한 join"
async findCartByUser(userId: string) {
    const cart = await this.cartModel
      .findOne({
        user: userId,
      })
      .populate({
        path: 'items.product',
        model: 'Product',
        select: ['-category', '-likeCount'],
      })
      .select('items');
    return cart;
  }
```

```js title="query 결과"
Mongoose: carts.findOne({ user: new ObjectId("61ef4ef483aeaabd737f4059") }, { projection: { items: 1 } })
Mongoose: products.find({ _id: { '$in': [ new ObjectId("61e7cb111c3b362cd6b15440"), new ObjectId("61e7b58e1c3b362cd6b15413") ], [Symbol(mongoose#trustedSymbol)]: true }}, { skip: undefined, limit: undefined, perDocumentLimit: undefined, projection: { category: 0, likeCount: 0 }})
```

```ts title="lookup을 이용한 join"
async findCartByUser(userId: string): Promise<aggregateCartDto> {
    const cart = await this.cartModel.aggregate([
      {
        $match: { user: userId },
      },
      {
        $unwind: { path: '$items' },
      },
      {
        $lookup: {
          from: 'products',
          localField: 'items.product',
          foreignField: '_id',
          as: 'items.product',
        },
      },
      {
        $unwind: { path: '$items.product' },
      },
      {
        $group: {
          _id: '$_id',
          items: {
            $push: '$items',
          },
        },
      },
      {
        $project: {
          'items.product.category': 0,
          'items.product.likeUsers': 0,
        },
      },
      {
        $addFields: {
          items: {
            $map: {
              input: '$items',
              as: 'item',
              in: {
                product: '$$item.product',
                quantity: '$$item.quantity',
                itemPrice: {
                  $multiply: ['$$item.product.price', '$$item.quantity'],
                },
              },
            },
          },
        },
      },
      {
        $addFields: {
          totalQuantity: { $sum: '$items.quantity' },
          totalPrice: { $sum: '$items.itemPrice' },
        },
      },
    ]);
    return cart[0];
  }
```

```js title="query 결과"
Mongoose: carts.aggregate(
  [
    { $match: { user: new ObjectId("61ef4ef483aeaabd737f4059") } },
    { $unwind: { path: "$items" } },
    {
      $lookup: {
        from: "products",
        localField: "items.product",
        foreignField: "_id",
        as: "items.product",
      },
    },
    { $unwind: { path: "$items.product" } },
    { $group: { _id: "$_id", items: { $push: "$items" } } },
    { $project: { "items.product.category": 0, "items.product.likeUsers": 0 } },
    {
      $addFields: {
        items: {
          $map: {
            input: "$items",
            as: "item",
            in: {
              product: "$$item.product",
              quantity: "$$item.quantity",
              itemPrice: {
                $multiply: ["$$item.product.price", "$$item.quantity"],
              },
            },
          },
        },
      },
    },
    {
      $addFields: {
        totalQuantity: { $sum: "$items.quantity" },
        totalPrice: { $sum: "$items.itemPrice" },
      },
    },
  ],
  {}
);
```

**MongoDB의 "$lookup" 기능과 RDBMS join의 차이**

- INNER JOIN은 지원하지 않으며, OUTER JOIN만 지원한다.
- 조인되는 대상 컬렉션은 같은 데이터베이스에 있어야 한다.
- 샤딩되지 않은 컬렉션만 "$lookup" 오퍼레이션을 사용할 수 있다.

### 리뷰 생성, 수정, 삭제, 조회

- POST /products/reviews/:productId (리뷰 생성)
- GET /products/reviews/:productId (리뷰 조회)
- PUT /products/reviews/:reviewId (리뷰 수정)
- DELETE /products/reviews/:reviewId (리뷰 삭제)

```ts title="reviews.schema.ts"
@Schema(options)
export class Review extends Document {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: "User",
  })
  @IsNotEmpty()
  author: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: "Product",
  })
  @IsNotEmpty()
  product: Types.ObjectId;

  @Prop()
  @IsString()
  content: string;

  @Prop()
  @IsString()
  image: string;

  @Prop({
    default: 0,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @Prop({
    default: false,
  })
  @IsBoolean()
  isDeleted: boolean;
}
```

```ts title="products.schema.ts"
@Prop()
  recentReviews: Review[];
```

Subset 패턴을 도입하여 상품 도큐먼트에 5개의 최신 리뷰들을 따로 저장하였다.

![img](https://i.ibb.co/hmp1KwY/2022-01-28-5-15-08.png)

상품 도큐먼트에 정해진 갯수만큼의 최신 리뷰들을 저장해놓는 방식을 사용하면 조회시에 효율적으로 데이터를 전달할 수 있다.

하지만 데이터 수정이 발생했을 때 양쪽 모두를 수정해주어야하고, 새로운 리뷰가 생성될 때마다 상품의 최신리뷰 필드를 정해진 갯수에 맞게 갱신해주는 작업을 해주어야하기 때문에 생성과 수정이 더 빈번한 데이터라고 한다면 오히려 비효율적일 수 있다.

```ts title="reviews.controller.ts"
@UseGuards(JwtAuthGuard)
  @Post(':productId')
  async createReivew(
    @Param('productId', ObjectIdValidationPipe) productId: string,
    @Body() body: ReviewRequestDto,
    @Body('rating', ParseIntPipe, RatingValidationPipe) rating: number,
    @LogInUser() user: User,
  ) {
    const reviewDto = {
      product: productId,
      author: user._id,
      ...body,
    };
    return await this.reviewsService.createReview(reviewDto);
  }

  @Get(':productId')
  async getReivewByProduct(
    @Param('productId', ObjectIdValidationPipe) productId: string,
    @Query(QueryValidationPipe) query: ReviewQueryDto,
  ) {
    return await this.reviewsService.getReviewByProduct(productId, query);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':reviewId')
  async updateReview(
    @Param('reviewId', ObjectIdValidationPipe) reviewId: string,
    @Body() body: ReviewRequestDto,
    @Body('rating', ParseIntPipe, RatingValidationPipe) rating: number,
    @LogInUser() user: User,
  ) {
    return await this.reviewsService.updateReview(reviewId, user._id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':reviewId')
  async deleteReview(
    @Param('reviewId', ObjectIdValidationPipe) reviewId: string,
    @LogInUser() user: User,
  ) {
    return await this.reviewsService.deleteReview(reviewId, user._id);
  }
```

```ts title="reviews.service.ts"
	async createReview(reviewDto: ReviewDto) {
    const { product } = reviewDto;

    const isProductExist = await this.productsRepository.existsById(product);

    if (!isProductExist)
      throw new BadRequestException('PRODUCT_DOES_NOT_EXIST');

    const review = await this.reviewsRepository.createReview(reviewDto);

    await this.reviewsRepository.addRecentReview(review);

    const recentReviewCount = await this.reviewsRepository.countRecentReview(
      product,
    );

    if (recentReviewCount > 5) {
      await this.reviewsRepository.removeRecentReview(product);
    }
    return review;
  }

  async updateReview(reviewId: string, userId: string, body: ReviewRequestDto) {
    const isReviewExist = await this.reviewsRepository.existsReview(
      reviewId,
      userId,
    );

    if (!isReviewExist) throw new BadRequestException('REVIEW_DOES_NOT_EXIST');

    const updateReview = await this.reviewsRepository.updateReview(
      reviewId,
      body,
    );

    await this.reviewsRepository.updateRecentReview(updateReview);

    return updateReview;
  }

  async deleteReview(reviewId: string, userId: string) {
    const isReviewExist = await this.reviewsRepository.existsReview(
      reviewId,
      userId,
    );

    if (!isReviewExist) throw new BadRequestException('REVIEW_DOES_NOT_EXIST');

    await this.reviewsRepository.deleteRecentReview(reviewId);
    const deleteReview = await this.reviewsRepository.deleteReview(reviewId);

    return deleteReview;
  }

  async getReviewByProduct(productId: string, query: ReviewQueryDto) {
    const isProductExist = await this.productsRepository.existsById(productId);

    if (!isProductExist)
      throw new BadRequestException('PRODUCT_DOES_NOT_EXIST');

    return await this.reviewsRepository.findReviewByProduct(productId, query);
  }

  async getReviewByAuthor(
    userId: string | Types.ObjectId,
    query: ReviewQueryDto,
  ) {
    return await this.reviewsRepository.findReviewByAuthor(userId, query);
  }
```

```ts title="reviews.repository.ts"
	async createReview(reviewDto: ReviewDto): Promise<Review> {
    return await this.reviewModel.create(reviewDto);
  }

  async updateReview(
    reviewId: string,
    body: ReviewRequestDto,
  ): Promise<Review> {
    const { content, image, rating } = body;
    return await this.reviewModel.findOneAndUpdate(
      {
        _id: reviewId,
      },
      {
        $set: { content, image, rating },
      },
      {
        new: true,
      },
    );
  }

	// 삭제시에 isDeleted 필드를 true 값으로 수정하여 softDelete
  async deleteReview(reviewId: string): Promise<Review> {
    return await this.reviewModel.findOneAndUpdate(
      {
        _id: reviewId,
      },
      {
        $set: { isDeleted: true },
      },
      {
        new: true,
      },
    );
  }

  async existsReview(reviewId: string, userId: string): Promise<boolean> {
    return await this.reviewModel.exists({
      _id: reviewId,
      author: userId,
    });
  }

  // 상품의 최신리뷰 필드에 생성된 리뷰 push
  async addRecentReview(review: Review) {
    return await this.productModel.updateOne(
      {
        _id: review.product,
      },
      { $push: { recentReviews: review } },
    );
  }

  // 최신리뷰 필드에 리뷰 수가 5개가 넘어갔을 때 가장 오래된 리뷰를 array에서 삭제
  async removeRecentReview(productId: string) {
    return await this.productModel.updateOne(
      {
        _id: productId,
      },
      {
        $pop: { recentReviews: -1 },
      },
    );
  }

  // 수정 리뷰가 최신 리뷰 필드에 존재한다면 함께 수정
  async updateRecentReview(review: Review): Promise<Product> {
    return await this.productModel.findOneAndUpdate(
      {
        recentReviews: {
          $elemMatch: {
            _id: new Types.ObjectId(review._id),
            author: review.author,
          },
        },
      },
      {
        $set: { 'recentReviews.$[review]': review },
      },
      {
        arrayFilters: [{ 'review._id': new Types.ObjectId(review._id) }],
        new: true,
      },
    );
  }

  // 삭제 리뷰가 최신 리뷰 필드에 존재한다면 array에서 삭제
  async deleteRecentReview(reviewId: string) {
    return await this.productModel.updateOne(
      {
        recentReviews: {
          $elemMatch: {
            _id: new Types.ObjectId(reviewId),
          },
        },
      },
      {
        $pull: { recentReviews: { _id: new Types.ObjectId(reviewId) } },
      },
    );
  }

  // 최신 리뷰 array에 담긴 리뷰 수를 count
  async countRecentReview(productId: string): Promise<number> {
    const countAggregation = await this.productModel.aggregate([
      {
        $match: { _id: new Types.ObjectId(productId) },
      },
      {
        $project: {
          _id: 0,
          reviewCount: {
            $cond: {
              if: { $isArray: '$recentReviews' },
              then: { $size: '$recentReviews' },
              else: 0,
            },
          },
        },
      },
    ]);
    return countAggregation[0].reviewCount;
  }

  async countReview(productId: string): Promise<number> {
    return await this.reviewModel.countDocuments({
      product: productId,
			isDeleted: false,
    });
  }

  async calculateRatingAvg(productId: string): Promise<number> {
    const avgAggregation = await this.reviewModel.aggregate([
      {
        $match: { product: productId, isDeleted: false },
      },
      {
        $group: {
          _id: productId,
          ratingAvg: { $avg: { $sum: '$rating' } },
        },
      },
    ]);

    if (avgAggregation.length === 0) {
      return 0;
    }

    return avgAggregation[0].ratingAvg.toFixed(1);
  }

  async findReviewByProduct(productId: string, query: ReviewQueryDto) {
    const { sort, offset = 0, limit = 10, rating } = query;

    const sortBy = {
      recent: '-createdAt',
      old: 'createdAt',
      rating: '-rating',
    };

    const filterQuery = { product: productId, isDeleted: false };

    if (rating) {
      filterQuery['rating'] = rating;
    }

    return await this.reviewModel
      .find(filterQuery)
      .skip(offset)
      .limit(limit)
      .sort(sortBy[sort]);
  }

  async findReviewByAuthor(
    userId: string | Types.ObjectId,
    query: ReviewQueryDto,
  ) {
    const { sort, offset = 0, limit = 10, rating } = query;

    const sortBy = {
      recent: '-createdAt',
      old: 'createdAt',
      rating: '-rating',
    };

    const filterQuery = { author: userId, isDeleted: false };

    if (rating) {
      filterQuery['rating'] = rating;
    }

    return await this.reviewModel
      .find(filterQuery)
      .skip(offset)
      .limit(limit)
      .sort(sortBy[sort]);
  }
```

### POST /image/upload (이미지 파일 업로드)

```ts title="image.controller.ts"
@UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @LogInUser() user: User,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return await this.imageService.uploadImageToS3(user._id, image);
  }
```

```ts title="image.service.ts"
constructor() {
    this.awsS3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
    this.S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
  }

  async uploadImageToS3(folder: string, image: Express.Multer.File) {
    try {
      const key = `images/${folder}/${Date.now()}_${path.basename(
        image.originalname,
      )}`.replace(/ /g, '');

      await this.awsS3
        .putObject({
          Bucket: this.S3_BUCKET_NAME,
          Key: key,
          Body: image.buffer,
          ContentType: image.mimetype,
        })
        .promise();

      return `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('IMAGE_UPLOAD_FAILED');
    }
  }
```
