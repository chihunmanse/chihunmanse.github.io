---
title: Request LifeCycle
description: NestJS의 요청 수명 주기에 대해
tags: [BackEnd, NestJS, Middleware, Guard, Interceptor, Pipe, ExceptionFilter]
sidebar_position: 2
---

# Request LifeCycle

## 1. 미들웨어 (Middleware)

미들웨어는 라우터 핸들러 이전에 호출되는 함수이다. 요청 및 응답 객체에 접근할 수 있으며, 요청-응답 주기에 있는 다음 미들웨어 함수에도 접근할 수 있다.

### 구현

#### 클래스

클래스로 구현시 `@Injectable()` 데코레이터와 함께 `NestMiddleware` 인터페이스를 구현해야 한다.

```typescript
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request...");
    next(); // 반드시 next()를 호출하여 다음 미들웨어나 컨트롤러로 넘어가도록 해야 함
  }
}
```

#### 함수

```typescript
import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
```

### 적용

#### 모듈

```typescript
import { Module, MiddlewareConsumer } from "@nestjs/common";
import { LoggerMiddleware } from "./logger.middleware";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) // 미들웨어 적용 - 함수 미들웨어도 같은 방식으로 적용 (.apply(logger))
      .forRoutes("users"); // 특정 라우트에만 적용 (users 경로에만 적용)
  }
}

consumer.apply(LoggerMiddleware).forRoutes("*"); // 모든 경로에 대해 미들웨어가 적용됨

consumer
  .apply(LoggerMiddleware)
  .forRoutes({ path: "users", method: RequestMethod.GET }); // GET 메서드에만 적용
```

#### 전역

```typescript
const app = await NestFactory.create(AppModule);
app.use(logger);
```

글로벌 미들웨어에서는 DI 컨테이너에 접근할 수 없기 때문에 클래스 미들웨어가 아닌 함수형 미들웨어만 사용할 수 있다. 클래스 미들웨어를 전역으로 설정하고 싶다면 AppModule에서 모든 경로에 미들웨어를 설정하면 된다.

## 2. 가드 (Guard)

가드는 `CanActivate` 인터페이스를 구현하는 `@Injectable()` 데코레이터가 달린 클래스이다.

- 가드는 단일 책임을 가지며, 특정 조건(권한, 역할)에 따라 주어진 요청이 라우터 핸들러에 의해 처리될지 여부를 결정한다.
- 토큰을 검증하거나 요청 객체에 속성을 추가하는 작업은 특정 라우트의 컨텍스트와 연결되어 있지 않기 때문에 전통적인 Express 애플리케이션에서 인가/인증은 미들웨어에 의해 처리되었다. 하지만 미들웨어는 `next()` 함수를 호출한 후에 어떤 핸들러가 실행될지 알지 못한다. 반면 가드는 `ExecutionContext`에 접근할 수 있어 다음에 무엇이 실행될지를 알고 있다. 따라서 가드는 요청/응답 사이클에서 정확히 필요한 시점에 처리 로직을 개입할 수 있고, 이를 선언적으로 수행할 수 있다.

### 구현

```typescript
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```

가드는 `canActivate()` 함수를 구현해야 한다. 해당 함수는 현재 요청의 허용 여부를 boolean으로 반환한다. true를 반환하면 요청이 처리되고 false를 반환하면 자동으로 `ForbiddenException` 을 발생시킨다.

#### 특정 핸들러에 Custom 메타데이터를 추가하여 ExecutionContext 활용

```typescript
import { Reflector } from "@nestjs/core";

export const Roles = Reflector.createDecorator<string[]>();
```

```typescript
@Post()
@Roles(['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

```typescript
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Roles } from "./roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return false;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchRoles(roles, user.roles);
  }
}
```

### 적용

가드는 전역, 컨트롤러, 함수 범위로 적용할 수 있다.

#### 컨트롤러

```typescript
@Controller("cats")
@UseGuards(RolesGuard)
export class CatsController {}
```

#### 함수

```typescript
@Post()
@Roles(['admin'])
@UseGuards(RolesGuard)
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

#### 전역

```typescript
const app = await NestFactory.create(AppModule);
app.useGlobalGuards(new RolesGuard());
```

**모듈 내에서 설정**

```typescript
import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
```

## 3. 인터셉터 (Interceptor)

인터셉터는 `NestInterceptor` 인터페이스를 구현하는 `@Injectable()` 데코레이터가 달린 클래스이다.

- 메서드 실행 전후에 추가 로직을 바인딩할 수 있다.
- 함수에서 반환된 결과를 변형할 수 있다.
- 함수에서 발생한 예외를 변형할 수 있다.
- 기본 함수 동작을 확장할 수 있다.
- 특정 조건(예: 캐싱 목적)에 따라 기능을 재정의할 수 있다.

### 구현

```typescript
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before...");

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
```

인터셉터는 `intercept()` 함수를 구현하며, 해당 함수는 두 개의 인수를 받는다. 첫 번째 인수는 `ExecutionContext` 인스턴스(가드에서와 동일한 객체)이다. 두 번째 인수는 `CallHandler`이다. `CallHandler` 인터페이스는 `handle()` 함수를 구현하며, 이 함수를 사용하여 인터셉터 내에서 특정 시점에 라우트 핸들러 함수를 호출할 수 있다. `intercept()` 메서드의 구현에서 `handle()` 함수를 호출하지 않으면 라우트 핸들러는 실행되지 않는다.

이 접근 방식은 `intercept()` 함수가 요청/응답 스트림을 효과적으로 래핑함을 의미한다. 결과적으로 최종 라우트 핸들러의 실행 전후에 사용자 정의 로직을 구현할 수 있다. `handle()` 함수는 `Observable`을 반환하므로, RxJS 연산자를 사용하여 응답을 추가로 조작할 수 있다. 관점 지향 프로그래밍(AOP) 용어로, 라우트 핸들러의 호출(즉, `handle()` 호출)은 `Pointcut`이라고 하며, 이는 추가 로직이 삽입되는 지점을 나타낸다.

예를 들어, `CatsController` 내에 정의된 `create()` 핸들러로 향하는 요청이 있다고 했을 때, 만약 `handle()` 함수를 호출하지 않는 인터셉터가 그 요청 경로의 어느 지점에서든 호출되면, `create()` 함수는 실행되지 않을 것이다. `handle()`이 호출되고(그 `Observable`이 반환되면) 나서야 `create()` 핸들러가 트리거된다. 그리고 `Observable`을 통해 응답 스트림이 수신되면, 스트림에 대해 추가 작업을 수행하고 최종 결과를 호출자에게 반환할 수 있다.

#### 응답 매핑으로 활용

```typescript
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ExcludeNullInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((value) => (value === null ? "" : value)));
  }
}
```

#### 캐시 구현으로 활용

```typescript
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable, of } from "rxjs";

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = true;
    if (isCached) {
      return of([]);
    }
    return next.handle();
  }
}
```

### 적용

인터셉터는 전역, 컨트롤러, 함수 범위로 적용할 수 있다.

#### 컨트롤러

```typescript
@UseInterceptors(LoggingInterceptor)
export class CatsController {}
```

#### 함수

```typescript
@Post()
@UseInterceptors(LoggingInterceptor)
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

#### 전역

```typescript
const app = await NestFactory.create(AppModule);
app.useGlobalInterceptors(new LoggingInterceptor());
```

**모듈 내에서 설정**

```typescript
import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
```

## 4. 파이프 (Pipe)

파이프는 `PipeTransform` 인터페이스를 구현하는 `@Injectable()` 데코레이터가 달린 클래스이다.

1. 변환: 입력 데이터를 원하는 출력으로 변환한다.
2. 검증: 입력 데이터를 평가하고, 유효할 경우 통과시키며, 데이터가 잘못되었을 때는 예외를 발생시킨다.

파이프는 컨트롤러의 라우트 핸들러에서 처리되고 있는 인수에 대해 작동한다. Nest는 함수가 호출되기 직전에 파이프를 삽입하며, 파이프는 해당 함수로 향하는 인수를 수신한다. 이 시점에서 변환이나 검증 작업이 이루어지고, 그 후 라우트 핸들러가 변환된 인수(있을 경우)로 호출된다.

### 구현

#### 내장 파이프

Nest에서는 9개의 파이프를 기본적으로 제공한다.

- `ValidationPipe`
- `ParseIntPipe`
- `ParseFloatPipe`
- `ParseBoolPipe`
- `ParseArrayPipe`
- `ParseUUIDPipe`
- `ParseEnumPipe`
- `DefaultValuePipe`
- `ParseFilePipe`

#### 커스텀 파이프

```typescript
import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
```

파이프는 `transform()` 함수를 구현해야 한다. 이 함수는 두 개의 매개변수를 가진다.

- `value`
- `metadata`

`value` 는 현재 처리 중인 함수의 인수(라우트 핸들러 함수가 받기 전의 값)이며, `metadata`는 현재 처리 중인 함수의 메타데이터이다. `metadata` 객체는 다음과 같은 속성들을 가진다.

```typescript
export interface ArgumentMetadata {
  type: "body" | "query" | "param" | "custom";
  metatype?: Type<unknown>;
  data?: string;
}
```

- `type`: 인수가 `@Body()`, `@Query()`, `@Param()`인지, 또는 사용자 정의 파라미터인지 나타낸다.
- `metatype`: 인수의 메타타입을 제공한다. 예를 들어, `String` 같은 값이 올 수 있다. 라우트 핸들러 함수에서 타입 선언을 생략하거나 기본 자바스크립트를 사용할 경우, 이 값은 `undefined`가 된다.
- `data`: 데코레이터에 전달된 문자열, 예를 들어 `@Body('string')`에서의 'string'이다. 데코레이터 괄호를 비워두면 이 값은 `undefined`가 된다.

### 적용

파이프는 전역, 컨트롤러, 함수, 매개변수 범위로 적용할 수 있다.

#### 매개변수

```typescript
@Post()
async create(
  @Body(new ValidationPipe()) createCatDto: CreateCatDto,
) {
  this.catsService.create(createCatDto);
}
```

#### 전역

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

**모듈 내에서 설정**

```typescript
import { Module } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
```

## 예외 필터 (Exception Filter)

Nest에는 애플리케이션 전반에서 처리되지 않은 예외를 처리하는 내장 예외 처리 계층이 있다. 애플리케이션 코드에서 예외가 처리되지 않으면, 이 계층이 예외를 잡아 적절한 사용자 친화적인 응답을 자동으로 내보낸다.

이 동작은 `HttpException` 유형(및 그 하위 클래스) 예외를 처리하는 내장 글로벌 예외 필터에 의해 수행된다. 예외가 인식되지 않을 경우(즉, `HttpException`이나 그 하위 클래스가 아닐 경우), 내장 예외 필터는 아래와 같은 기본 JSON 응답을 생성한다.

```json
{
  "statusCode": 500,
  "message": "Internal server error"
}
```

기본으로 내장된 예외 필터에서 제공되는 기능 외에 로깅을 추가하거나 예외에 대한 커스텀 응답 로직을 구현하고 싶은 경우 예외 필터를 사용할 수 있다. 예외 필터는 `ExceptionFilter` 인터페이스를 구현해야 한다.

### 구현

```typescript
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```

예외 필터는 `catch()` 함수를 구현해야 한다. `catch()` 함수의 파라미터를 살펴보면, `exception`은 현재 처리 중인 예외 객체이며, `host`는 `ArgumentsHost` 객체이다. `ArgumentsHost`는 요청 핸들러로 전달된 `Request`와 `Response` 객체에 접근하는 데 사용된다.

`@Catch(HttpException)` 데코레이터는 필터가 `HttpException` 타입의 예외만 처리하도록 요구하는 메타데이터를 바인딩한다. 이 데코레이터는 하나의 파라미터를 받거나 쉼표로 구분된 여러 파라미터를 받을 수 있어, 여러 예외 타입에 대해 필터를 설정할 수 있다.

### 적용

예외 필터는 컨트롤러/리졸버/게이트웨이의 함수 범위, 컨트롤러 범위, 전역 범위 등으로 설정할 수 있다.

#### 함수

```typescript
@Post()
@UseFilters(HttpExceptionFilter)
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException();
}
```

#### 컨트롤러

```typescript
@UseFilters(HttpExceptionFilter)
export class CatsController {}
```

#### 전역

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
```

**모듈 내에서 설정**

```typescript
import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
```

## Summary

1. 요청 (Incoming request)
2. 미들웨어 (Middleware)
   1. 전역 미들웨어 (Globally bound middleware)
   2. 모듈 미들웨어 (Module bound middleware)
3. 가드 (Guards)
   1. 전역 가드 (Global guards)
   2. 컨트롤러 가드 (Controller guards)
   3. 라우트 가드 (Route guards)
4. 인터셉터 (컨트롤러 이전) (Interceptors (pre-controller))
   1. 전역 인터셉터 (Global interceptors)
   2. 컨트롤러 인터셉터 (Controller interceptors)
   3. 라우트 인터셉터 (Route interceptors)
5. 파이프 (Pipes)
   1. 전역 파이프 (Global pipes)
   2. 컨트롤러 파이프 (Controller pipes)
   3. 라우트 파이프 (Route pipes)
   4. 라우트 파라미터 파이프 (Route parameter pipes)
6. 컨트롤러 (메서드 핸들러) (Controller (method handler))
7. 서비스 (존재할 경우) (Service (if exists))
8. 인터셉터 (요청 후) (Interceptors (post-request))
   1. 라우트 인터셉터 (Route interceptor)
   2. 컨트롤러 인터셉터 (Controller interceptor)
   3. 전역 인터셉터 (Global interceptor)
9. 예외 필터 (Exception filters)
   1. 라우트 예외 필터 (Route exception filter)
   2. 컨트롤러 예외 필터 (Controller exception filter)
   3. 전역 예외 필터 (Global exception filter)
10. 서버 응답 (Server response)

---

**참조**

https://docs.nestjs.com/faq/request-lifecycle

https://docs.nestjs.com/middleware

https://docs.nestjs.com/guards

https://docs.nestjs.com/interceptors

https://docs.nestjs.com/pipes

https://docs.nestjs.com/exception-filters
