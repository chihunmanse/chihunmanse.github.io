---
title: IoC & NestJS DI
description: IoC 원칙과 NestJS의 의존성 주입에 대해
tags: [BackEnd, NestJS, IoC, DependencyInjection]
sidebar_position: 1
---

# IoC & NestJS DI

## IoC(Inversion of Control) 원칙

IoC는 소프트웨어 설계 원칙 중 하나로, 프로그램의 흐름 제어를 개발자가 직접 하지 않고, 외부에서 제어하는 방식이다. 이 원칙을 사용하면 객체의 생성과 의존성 관리를 외부에서 맡아 처리하기 때문에 시스템의 결합도를 낮추고, 더 유연하고 테스트하기 쉬운 코드를 작성할 수 있게 된다.

IoC는 전통적인 제어 흐름과는 반대되는 개념으로 볼 수 있다. 전통적으로 객체는 자신이 필요한 의존성을 직접 생성하고, 관리하며, 작업을 수행하는 방식으로 동작한다. 그러나 IoC 원칙을 따르면, 객체가 자신이 할 일을 스스로 결정하는 대신에 외부에서 객체에 필요한 의존성(다른 객체나 서비스)을 주입해주거나 객체의 흐름을 제어한다. 즉, **프로그램의 제어 권한이 개발자가 아닌 외부 시스템이나 프레임워크로 넘어간다**는 것이 핵심이다.

#### 장점

- 의존성 감소: 객체 간의 결합도를 낮춰 재사용성과 유연성을 높인다.
- 유연성 증가: 코드의 흐름 제어가 외부로 이관되기 때문에 프로그램의 수정이 용이하다.
- 테스트 용이성: 외부에서 객체의 의존성을 주입하므로 모킹(mocking)등을 사용한 단위 테스트가 더 쉬워진다.

### 구현 방식

#### 의존성 주입(DI, Dependency Injection)

DI는 객체가 필요로 하는 의존성을 외부에서 주입하는 방식으로, IoC를 구현하는 가장 대표적인 방법이다. 주입 방법은 크게 생성자 주입(Constructor Injection), 세터 주입(Setter Injection), 필드 주입(Field Injection)이 있다.

- **생성자 주입**

  의존성을 생성자의 인자로 전달하여 주입한다. 주입된 의존성은 불변성을 가지며, 초기화 과정에서 반드시 설정된다.

  ```typescript
  interface IEngine {
    start(): void;
  }

  class Engine implements IEngine {
    start() {
      console.log("Engine started");
    }
  }

  class Car {
    // Engine이 필요하지만 직접 생성하지 않고 외부에서 주입받음
    constructor(private engine: IEngine) {}

    drive() {
      this.engine.start();
      console.log("Car is driving");
    }
  }

  // IoC 컨테이너가 Engine을 생성하고 주입
  const engine = new Engine();
  const car = new Car(engine);
  car.drive();
  ```

- **세터 주입**

  객체 생성 후에 의존성을 주입하는 방식으로, 세터 메서드를 통해 주입한다. 의존성을 나중에 변경할 필요가 있는 경우에 유용하다.

  ```typescript
  interface IEngine {
    start(): void;
  }

  class Engine implements IEngine {
    start() {
      console.log("Engine started");
    }
  }

  class Car {
    private engine: IEngine;

    // 세터 메서드를 통해 의존성을 주입받음
    setEngine(engine: IEngine) {
      this.engine = engine;
    }

    drive() {
      if (!this.engine) {
        throw new Error("Engine not set");
      }
      this.engine.start();
      console.log("Car is driving");
    }
  }

  // IoC 컨테이너가 Engine을 생성하고 주입
  const engine = new Engine();
  const car = new Car();
  car.setEngine(engine);
  car.drive();
  ```

- **필드 주입**

  객체의 필드에 직접 의존성을 주입하는 방식이다.

  ```typescript
  interface IEngine {
    start(): void;
  }

  class Engine implements IEngine {
    start() {
      console.log("Engine started");
    }
  }

  class Car {
    // 필드 주입: public 필드를 통해 의존성을 주입받음
    public engine: IEngine;

    drive() {
      if (!this.engine) {
        throw new Error("Engine not set");
      }
      this.engine.start();
      console.log("Car is driving");
    }
  }

  // IoC 컨테이너가 Engine을 생성하고 주입
  const engine = new Engine();
  const car = new Car();
  car.engine = engine;
  car.drive();
  ```

  위 예시 코드의 필드 주입은 접근 제어자가 `public`으로 설정되어있기 때문에 외부에서 직접 필드를 설정할 수 있다. 이는 캡슐화를 깨뜨릴 수 있으므로, 데코레이터를 사용한 필드 주입 방식을 권장한다.

  **Nest에서의 `@Inject` 데코레이터를 이용한 필드 주입**

  ```typescript
  import { Injectable, Inject } from "@nestjs/common";

  interface IEngine {
    start(): void;
  }

  @Injectable()
  class Engine implements IEngine {
    start() {
      console.log("Engine started");
    }
  }

  @Injectable()
  class Car {
    @Inject("IEngine")
    private engine: IEngine;

    drive() {
      if (!this.engine) {
        throw new Error("Engine not set");
      }
      this.engine.start();
      console.log("Car is driving");
    }
  }

  // NestJS IoC 컨테이너 설정
  import { Module } from "@nestjs/common";

  @Module({
    providers: [{ provide: "IEngine", useClass: Engine }, Car],
  })
  class AppModule {}

  // NestJS 애플리케이션 생성 및 실행
  import { NestFactory } from "@nestjs/core";

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const car = app.get(Car);
    car.drive();
  }
  bootstrap();
  ```

  상속 구조에서 생성자를 통해 의존성을 주입하는 방식이 복잡할 때, 필드 주입을 사용하면 하위 클래스에서 상위 클래스의 의존성을 관리할 필요가 없어진다. 필드 주입 방식은 클래스의 특정 필드에 직접 주입하므로, 상속 관계에서 의존성을 상위 클래스에서 자동으로 주입받을 수 있다. Nest에서는 클래스가 다른 프로바이더를 확장하지 않는 이상, 생성자 주입 방식을 권장하고 있다.

#### 서비스 로케이터 (Service Locator)

서비스 로케이터 패턴은 객체가 자신이 필요한 의존성을 외부에서 찾아서 가져오는 방식으로 IoC를 구현하는 방법이다. 이 패턴에서는 특정 레지스트리 또는 `Service Locator` 객체가 의존성을 관리하며, 필요한 객체가 의존성을 요청할 때 해당 의존성을 반환한다. 객체가 서비스 로케이터에 의존하기 때문에, 결합도가 의존성 주입보다 높을 수 있다. 그러나 전체 구조를 중앙에서 관리하기 쉽고, 동적으로 의존성을 등록할 수 있는 유연성을 제공한다.

```typescript
class ServiceLocator {
  private static services: Map<string, any> = new Map();

  static register(serviceName: string, instance: any) {
    this.services.set(serviceName, instance);
  }

  static get(serviceName: string) {
    return this.services.get(serviceName);
  }
}

class Engine {
  start() {
    console.log("Engine started");
  }
}

// Service Locator에 등록
ServiceLocator.register("engine", new Engine());

class Car {
  engine: Engine;

  constructor() {
    // 필요한 의존성을 Service Locator에서 가져옴
    this.engine = ServiceLocator.get("engine");
  }

  drive() {
    this.engine.start();
    console.log("Car is driving");
  }
}

const car = new Car();
car.drive();
```

## Nest DI(Dependency Injection)

IoC는 보통 프레임워크가 프로그램의 흐름을 제어할 때 사용된다. 대표적인 예로 Spring, NestJS, Angular 등이 있다. 이러한 프레임워크들은 의존성 관리와 프로그램의 흐름 제어를 대신 처리하며, 개발자는 비즈니스 로직에 집중할 수 있게된다.

NestJS는 Angular에서 영감을 받은 DI 시스템을 활용하며, 각종 서비스나 클래스 간의 의존성을 자동으로 주입해 준다. Nest의 DI는 기본적으로 IoC 원칙을 따르며, IoC 컨테이너를 통해 의존성을 관리한다.

### Injector

Injector는 IoC 컨테이너의 역할을 수행하며, 프로바이더 인스턴스를 생성하고 관리하는 역할을 한다. 이를 통해 의존성의 생성과 주입 과정을 중앙에서 제어할 수 있다.

- 의존성 주입 관리

  Injector는 요청에 따라 필요한 의존성 인스턴스를 로드한다. 이는 `loadInstance` 메서드를 통해 이루어지며, 주입할 프로바이더의 래퍼(`InstanceWrapper`)와 의존성 컬렉션을 기반으로 인스턴스를 생성한다.

- 순환 의존성 처리

  Injector는 의존성 주입 과정에서 순환 의존성이 발생할 수 있는 상황을 감지한다. `loadInstance` 메서드 내에서, 만약 순환 의존성이 감지되면`CircularDependencyException` 을 발생시킨다.

- 생성자 파라미터 주입

  Injector는 `resolveConstructorParams` 메서드를 통해 생성자에 필요한 의존성을 주입한다 . 이 메서드는 프로바이더의 메타데이터를 분석하여 필요한 의존성을 찾아 주입 하고. 이를 통해 프로바이더의 인스턴스를 초기화한다.

- 생애 주기 관리

  Injector는 프로바이더 인스턴스의 생성뿐만 아니라 그 생애 주기도 관리한다. 기본적으로 Nest는 모든 프로바이더를 싱글톤으로 관리하여, 각 모듈 내에서 한 번만 인스턴스화 하고 재사용한다. 하지만 요청 스코프(Request Scope)를 설정하면, 각 요청마다 새로운 인스턴스를 생성할 수 있다. 이를 통해 상태가 필요한 서비스나 일회성 객체가 필요한 경우 유연하게 대응할 수 있다.

```typescript title="github.com/nestjs/nest/blob/master/packages/core/injector/injector.ts"
export class Injector {
  // IoC 컨테이너에서 의존성을 주입하여 인스턴스를 로드하는 메서드
  public async loadInstance<T>(
    wrapper: InstanceWrapper<T>,
    collection: Map<InjectionToken, InstanceWrapper>,
    moduleRef: Module,
    contextId = STATIC_CONTEXT,
    inquirer?: InstanceWrapper
  ) {
    const inquirerId = this.getInquirerId(inquirer); // 요청자의 ID를 가져옴
    const instanceHost = wrapper.getInstanceByContextId(
      this.getContextId(contextId, wrapper),
      inquirerId
    ); // 주어진 컨텍스트 ID로 인스턴스 검색

    // 이미 주입 중인 인스턴스가 있는 경우(순환 의존성 체크)
    if (instanceHost.isPending) {
      const settlementSignal = wrapper.settlementSignal;
      if (inquirer && settlementSignal?.isCycle(inquirer.id)) {
        throw new CircularDependencyException(`"${wrapper.name}"`);
      }

      return instanceHost.donePromise.then((err?: unknown) => {
        if (err) {
          throw err;
        }
      });
    }

    /// ...

    // 생성자 인자에 의존성 주입
    await this.resolveConstructorParams<T>(
      wrapper,
      moduleRef,
      inject as InjectionToken[], // 주입할 의존성들
      callback, // 콜백으로 인스턴스 생성 후 처리
      contextId,
      wrapper,
      inquirer
    );
  }

  // 생성자에 필요한 의존성을 주입하는 메서드
  public async resolveConstructorParams<T>(
    wrapper: InstanceWrapper<T>,
    moduleRef: Module,
    inject: InjectorDependency[], // 주입할 의존성
    callback: (args: unknown[]) => void | Promise<void>,
    contextId = STATIC_CONTEXT,
    inquirer?: InstanceWrapper, // 요청자
    parentInquirer?: InstanceWrapper // 상위 요청자
  ) {
    let inquirerId = this.getInquirerId(inquirer);
    const metadata = wrapper.getCtorMetadata();

    // 메타데이터를 통해 생성자 파라미터를 주입
    if (metadata && contextId !== STATIC_CONTEXT) {
      const deps = await this.loadCtorMetadata(
        metadata,
        contextId,
        inquirer,
        parentInquirer
      );
      return callback(deps);
    }

    const isFactoryProvider = !isNil(inject);
    const [dependencies, optionalDependenciesIds] = isFactoryProvider
      ? this.getFactoryProviderDependencies(wrapper) // 팩토리 프로바이더 의존성
      : this.getClassDependencies(wrapper); // 클래스 의존성

    let isResolved = true;

    const resolveParam = async (param: unknown, index: number) => {
      try {
        /// ...

        const paramWrapper = await this.resolveSingleParam<T>(
          wrapper,
          param,
          { index, dependencies }, // 파라미터 의존성
          moduleRef,
          contextId,
          inquirer,
          index
        );
        const instanceHost = paramWrapper.getInstanceByContextId(
          this.getContextId(contextId, paramWrapper), // 파라미터 인스턴스 생성
          inquirerId
        );
        if (!instanceHost.isResolved && !paramWrapper.forwardRef) {
          isResolved = false;
        }
        return instanceHost?.instance;
      } catch (err) {
        const isOptional = optionalDependenciesIds.includes(index);
        if (!isOptional) {
          // 선택적 의존성이 아닌 경우 예외 처리
          throw err;
        }
        return undefined; // 선택적 의존성은 undefined로 반환
      }
    };

    const instances = await Promise.all(dependencies.map(resolveParam)); // 모든 의존성 주입
    isResolved && (await callback(instances)); // 모든 의존성이 해결되면 콜백 실행
  }
}
```

### Module

모듈은 `@Module()` 데코레이터가 달린 클래스로, 애플리케이션의 논리적인 구성을 나누는 기본 단위이다. 각 모듈은 관련된 서비스, 컨트롤러, 프로바이더를 그룹화한다.

`@Module()` 데코레이터는 Nest가 애플리케이션 구조를 구성하는 데 사용하는 메타데이터를 제공하는 역할을 한다. `@Module()` 데코레이터를 통해 등록된 메타데이터는 각 모듈들의 참조 관계와 의존성 정보들을 관리할 때 활용된다.

각 애플리케이션에는 최소 하나의 루트 모듈이 필요하며, Nest는 이 루트 모듈을 통해 애플리케이션 그래프를 구성하고 의존성 트리를 빌드한다.

`@Module()` 데코레이터는 아래 속성들을 가지는 단일 객체를 취한다.

- providers: Injector에 의해 인스턴스화되고 이 모듈 전체에서 공유될 수 있는 프로바이더 목록
- controllers: 해당 모듈에서 정의된 컨트롤러 목록
- imports: 다른 모듈에서 공급된 프로바이더를 사용할 수 있도록 가져오는 모듈 목록
- exports: 해당 모듈에서 제공하는 프로바이더 중 외부에서 사용될 수 있도록 공개할 프로바이더 목록

### Provider

프로바이더는 Nest에서 DI 시스템을 통해 의존성을 제공하는 객체이다. 서비스, 레포지토리, 팩토리, 헬퍼 등의 형태로 정의될 수 있다. 프로바이더는 `@Injectable()` 데코레이터를 사용하여 정의되며, 이를 통해 IoC 컨테이너에 등록된다.

```typescript
@Injectable()
export class MyService {
  constructor(private readonly otherService: OtherService) {}
}
```

- `@Injectable()` 데코레이터가 붙은 클래스는 자동으로 DI 시스템에 의해 관리된다.
- 생성자에서 `OtherService`가 자동으로 주입된다.

프로바이더는 기본적으로 Nest 프로그램의 수명 주기와 동기화 된 수명을 갖는다. 프로그램이 부트스트랩될 때 모든 종속성을 해결해야 하기 때문에 모든 프로바이더가 인스턴스화 되며, 프로그램이 종료되면 각 프로바이더가 메모리에서 삭제된다.

Nest에서는 클래스 기반 프로바이더 외에도 팩토리 프로바이더를 사용할 수 있다. 팩토리 프로바이더는 특정 로직을 통해 인스턴스를 생성할 때 유용하며, 복잡한 의존성 관리가 필요할 때 사용된다.

```typescript
{
  provide: 'CONFIG_OPTIONS',
  useFactory: async (configService: ConfigService) => {
    const config = await configService.loadConfig();
    return config;
  },
  inject: [ConfigService],
}
```

### 의존성 주입 흐름

1. 루트 모듈 분석: `NestFactory.create(AppModule)`이 호출되면, `AppModule`과 그 하위 모듈들의 메타데이터를 분석한다. 이 과정에서 IoC 컨테이너가 초기화되며, 애플리케이션 내 모든 모듈과 프로바이더의 의존성을 해결하기 위한 준비를 마친다.
2. 의존성 그래프 구성: 각 모듈의 `imports`, `providers`, `controllers`, `exports` 속성을 바탕으로 의존성 그래프가 구성된다. 이를 통해 모듈 간 의존성 관계가 명확해지며, IoC 컨테이너가 이를 바탕으로 의존성 주입을 준비한다. 모듈 간의 `exports`와 `imports`를 통해 의존성 공유도 함께 관리된다.
3. 프로바이더 인스턴스화: 의존성 그래프를 기반으로, `providers` 배열에 정의된 서비스들을 순차적으로 인스턴스화한다. Nest는 먼저 필요한 의존성을 해결하고, 각 프로바이더를 IoC 컨테이너에 싱글톤으로 관리한다. 요청 스코프(Request Scope)로 설정된 프로바이더는 각 요청마다 새로운 인스턴스를 생성한다.

```typescript
@Injectable()
class AService {
  sayHello() {
    console.log("Hello from AService");
  }
}

@Injectable()
class BService {
  constructor(private readonly aService: AService) {}

  useAService() {
    this.aService.sayHello();
  }
}

@Module({
  providers: [AService, BService],
})
class AppModule {}
```

1. `AppModule`에서 `AService`와 `BService`를 프로바이더로 등록한다.
2. `Injector`는 `BService`의 생성자에서 `AService`를 의존성으로 파악하고, 이를 해결하기 위해 `AService` 인스턴스를 먼저 생성한다.
3. `AService`가 인스턴스화된 후, `BService`의 생성자에 주입된다.
4. `BService`는 주입된 `AService` 인스턴스를 사용하여 `sayHello()` 메서드를 호출한다.

---

**참조**

https://docs.nestjs.com/modules

https://docs.nestjs.com/providers

https://docs.nestjs.com/fundamentals/injection-scopes

https://www.wisewiredbooks.com/nestjs/overview/05-modules.html

https://www.wisewiredbooks.com/nestjs/overview/04-provider.html

https://velog.io/@koo8624/NestJS-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-03.-InstanceLoader-and-Injector
