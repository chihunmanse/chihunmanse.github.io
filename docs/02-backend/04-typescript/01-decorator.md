---
title: 타입스크립트 데코레이터
tags: [BackEnd, TypeScript, Decorator]
sidebar_position: 1
---

# 타입스크립트 데코레이터

타입스크립트의 데코레이터는 클래스, 메서드, 접근자, 프로퍼티, 매개변수 등에 추가할 수 있는 특수한 종류의 선언이다. 데코레이터는 코드의 동작을 변경하거나 부가적인 기능을 추가할 수 있게 해준다.

타입스크립트 데코레이터는 대상 정의가 런타임에 평가되는 시점에 한 번만 실행된다. 데코레이터가 실행 될 때 반환값이 원래의 요소를 대신할 수 있다. 이 과정에서 메타데이터나 로깅 등의 기능을 추가하여 대상의 동작을 변화시킬 수 있게 된다.

```typescript
function Deco(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("데코레이터 실행", propertyKey);
}

class Example {
  @Deco
  printMessage() {
    console.log("출력");
  }
}

const example = new Example();
example.printMessage();
example.printMessage();

// 데코레이터 실행 printMessage
// 출력
// 출력
```

## 데코레이터 팩토리

데코레이터 팩토리는 데코레이터가 런타임에 호출할 표현식을 반환하는 함수로, 이를 통해 데코레이터에 매개변수를 전달하여 유연하게 동작을 정의할 수 있다.

```typescript
function Log(message: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(`${message} ${propertyKey}`);
  };
}

class Example {
  @Log("INFO")
  printMessage() {
    console.log("출력");
  }
}

// INFO printMessage
```

## 데코레이터 종류

### 클래스 데코레이터

클래스 데코레이터는 클래스 선언 직전에 선언되는 데코레이터로, 클래스의 생성자를 인수로 받아 기존 클래스의 정의를 확장하는 데 사용할 수 있다.

```typescript
type ClassDecorator = <TFunction extends Function>(
  target: TFunction
) => TFunction | void;
```

**파라미터**

- 클래스의 생성자

**리턴**

- 값을 반환하면 클래스의 선언이 대체된다.

```typescript
function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    secondTitle = "secondTitle";
  };
}

@ClassDecorator
class Example {
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const example = new Example("title");
console.log(example.title);
console.log((example as any).secondTitle);

// title
// secondTitle
```

```typescript
function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  constructor.prototype.secondTitle = "secondTitle";
}

@ClassDecorator
class Example {
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const example = new Example("title");
console.log(example.title);
console.log((example as any).secondTitle);

// title
// secondTitle
```

### 메서드 데코레이터

메서드 데코레이터는 메서드 선언 직전에 선언되는 데코레이터로, 메서드의 정의를 관찰, 수정 또는 대체하는 데 사용할 수 있다.

```typescript
type MethodDecorator = <T>(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
) => TypedPropertyDescriptor<T> | void;
```

**파라미터**

1. static 메서드인 경우 클래스의 생성자 함수, 인스턴스 메서드인 경우 클래스의 프로토타입
2. 메서드의 이름
3. 메서드의 PropertyDescriptor

**리턴**

- 값을 반환하면 메서드의 descriptor로 사용된다.

#### PropertyDescriptor란?

`PropertyDescriptor`는 객체의 프로퍼티나 메서드에 대한 속성을 정의하는 객체로, 속성의 특징이나 동작 방식을 제어할 수 있다. 타입스크립트 및 자바스크립트에서 객체나 클래스의 속성을 다루거나 메서드의 동작을 수정하는 데 주로 사용된다.

| 속성           | 설명                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------- |
| `value`        | 속성의 값을 나타내며, 메서드 데코레이터에서 메서드 자체가 이 속성에 담긴다.                        |
| `writable`     | 값 변경 가능 여부를 나타낸다.                                                                      |
| `enumerable`   | 열거 가능 여부를 나타낸다.                                                                         |
| `configurable` | 속성 변경 가능 여부를 나타내며, `true`일 경우 속성 삭제 및 `PropertyDescriptor`의 수정이 가능하다. |
| `get`          | getter 함수로, 프로퍼티에 접근할 때 호출되는 함수이다.                                             |
| `set`          | setter 함수로, 프로퍼티 값 설정 시 호출되는 함수이다.                                              |

```typescript
function MethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("target : ", target);
  console.log("propertyKey : ", propertyKey);
  console.log("descriptor : ", descriptor);
}

class Example {
  @MethodDecorator
  static staticMethod() {
    return "staticMethod";
  }

  @MethodDecorator
  instanceMethod() {
    return "instanceMethod";
  }
}

console.log(
  "staticMethod descriptor : ",
  Object.getOwnPropertyDescriptor(Example, "staticMethod")
);

console.log(
  "instanceMethod descriptor : ",
  Object.getOwnPropertyDescriptor(Example.prototype, "instanceMethod")
);

// target :  { instanceMethod: [Function (anonymous)] }
// propertyKey :  instanceMethod
// descriptor :  {
//   value: [Function (anonymous)],
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// target :  [Function: Example] { staticMethod: [Function (anonymous)] }
// propertyKey :  staticMethod
// descriptor :  {
//   value: [Function (anonymous)],
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// staticMethod descriptor :  {
//   value: [Function (anonymous)],
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// instanceMethod descriptor :  {
//   value: [Function (anonymous)],
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

```typescript
function Logger(level: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value; // 원본 함수

    descriptor.value = function (...args) {
      console.log(`${level} : params`, ...args);
      const result = original.call(this, ...args); // this를 설정하여 원본 함수 호출
      console.log(`${level} : result`, result);
      return result;
    };
  };
}

class Example {
  title: string;

  constructor() {
    this.title = "Hello";
  }

  @Logger("Info")
  method(param: string) {
    console.log("함수 호출");
    return `${this.title} ${param}`;
  }
}

const example = new Example();
console.log(example.method("World"));

// Info : params World
// 함수 호출
// Info : result Hello World
// Hello World
```

### 접근자 데코레이터

접근자 데코레이터는 접근자 선언 직전에 선언되는 데코레이터로, 접근자의 descriptor에 적용되며 접근자의 정의를 관찰, 수정 또는 교체하는 데 사용할 수 있다. 접근자 데코레이터는 메서드 데코레이터와 동일하지만 descriptor 객체의 키만 다르다.

**메서드 데코레이터 descriptor**

- `value`
- `writable`
- `enumerable`
- `configurable`

**접근자 데코레이터 descriptor**

- `get`
- `set`
- `enumerable`
- `configurable`

```typescript
function Configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(`${propertyKey}의 descriptor:`, descriptor);
    descriptor.configurable = value;
  };
}

class Example {
  private a: number;
  private b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  @Configurable(false)
  get getA() {
    return this.a;
  }

  @Configurable(true)
  get getB() {
    return this.b;
  }
}

const example = new Example(1, 2);

// getA 프로퍼티 재정의 시도 (configurable: false)
try {
  console.log("ReDefining getA:");
  Object.defineProperty(Example.prototype, "getA", {
    get() {
      return "재정의된 값";
    },
  });
} catch (error) {
  console.error("Error redefining getA:", error.message);
}

// getB 프로퍼티 재정의 시도 (configurable: true)
try {
  console.log("ReDefining getB:");
  Object.defineProperty(Example.prototype, "getB", {
    get() {
      return "재정의된 값";
    },
  });
  console.log("getB redefined successfully");
} catch (error) {
  console.error("Error redefining getB:", error.message);
}

// 재정의 후 getA와 getB 값 확인
console.log("example.getA:", example.getA);
console.log("example.getB:", example.getB);

// getA의 descriptor: {
//   get: [Function: get],
//   set: undefined,
//   enumerable: false,
//   configurable: true
// }
// getB의 descriptor: {
//   get: [Function: get],
//   set: undefined,
//   enumerable: false,
//   configurable: true
// }
// Redefining getA:
// Error redefining getA: Cannot redefine property: getA
// Redefining getB:
// getB redefined successfully
// example.getA: 1
// example.getB: 재정의된 값
```

### 프로퍼티 데코레이터

프로퍼티 데코레이터는 프로퍼티 선언 직전에 선언되는 데코레이터로, 주로 메타데이터를 추가하거나 프로퍼티의 동작을 수정하는 데 활용된다.

```typescript
type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
```

**파라미터**

1. static 속성인 경우 클래스의 생성자 함수, 인스턴스 속성인 경우 클래스의 프로토타입
2. 속성의 이름

**리턴**

- 반환 값은 무시된다.

```typescript
function LogAccess(target: any, propertyKey: string) {
  let value = target[propertyKey];

  Object.defineProperty(target, propertyKey, {
    get: () => {
      console.log(`Accessed property: ${propertyKey}`);
      return value;
    },
    set: (newValue) => {
      console.log(`Updated property: ${propertyKey} to ${newValue}`);
      value = newValue;
    },
    enumerable: true,
    configurable: true,
  });
}

class UserProfile {
  @LogAccess
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}

const profile = new UserProfile("Alice");
console.log(profile.username);
profile.username = "Bob";

// Updated property: username to Alice
// Accessed property: username
// Alice
// Updated property: username to Bob
```

### 매개변수 데코레이터

매개변수 데코레이터는 매개변수 선언 직전에 선언되는 데코레이터로, 클래스의 생성자 또는 메서드의 매개변수에 적용된다.

```typescript
type ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => void;
```

**파라미터**

1. static 메서드인 경우 클래스의 생성자 함수, 인스턴스 메서드인 경우 클래스의 프로토타입
2. 메서드 이름
3. 함수 매개변수 인덱스

**리턴**

- 반환 값은 무시된다.

```typescript
const requiredParams: Record<string, number[]> = {};

// 매개변수 데코레이터
function Required(target: any, propertyKey: string, parameterIndex: number) {
  // 함수별로 필수 인자 인덱스 목록 저장
  if (!requiredParams[propertyKey]) {
    requiredParams[propertyKey] = [];
  }
  requiredParams[propertyKey].push(parameterIndex);
}

function validateParams(target: any, propertyName: string, args: any[]) {
  const requiredIndices = requiredParams[propertyName];

  if (requiredIndices) {
    for (const index of requiredIndices) {
      if (args[index] === undefined || args[index] === null) {
        throw new Error(
          `Argument at index ${index} is required for ${propertyName}`
        );
      }
    }
  }
}

// 메서드 데코레이터
function Validate(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    validateParams(target, propertyName, args);
    return originalMethod.apply(this, args);
  };
}

class User {
  @Validate
  createUser(@Required name?: string, @Required age?: number) {
    console.log(`User created: Name=${name}, Age=${age}`);
  }
}

const user = new User();

try {
  user.createUser("Alice", 25); // User created: Name=Alice, Age=25
  user.createUser("Alice"); // 에러: Argument at index 1 is required for createUser
} catch (error) {
  console.error(error.message);
}
```

## 데코레이터 호출 순서

### 기본 순서

1. 각 인스턴스 멤버의 매개변수 데코레이터 -> 메서드 / 접근자 / 프로퍼티 데코레이터
2. 각 정적 멤버의 매개변수 데코레이터 -> 메서드 / 접근자 / 프로퍼티 데코레이터
3. 생성자 매개변수 데코레이터
4. 클래스 데코레이터

```typescript
function f(key: string): any {
  console.log("평가:", key);
  return function () {
    console.log("호출:", key);
  };
}

@f("클래스 데코레이터")
class C {
  @f("정적 속성")
  static prop?: number;

  @f("정적 메서드")
  static method(@f("정적 메서드 매개변수") foo) {}

  constructor(@f("생성자 매개변수") foo) {}

  @f("인스턴스 메서드")
  method(@f("인스턴스 메서드 매개변수") foo) {}

  @f("인스턴스 속성")
  prop?: number;
}

// 평가: 인스턴스 메서드
// 평가: 인스턴스 메서드 매개변수
// 호출: 인스턴스 메서드 매개변수
// 호출: 인스턴스 메서드
// 평가: 인스턴스 속성
// 호출: 인스턴스 속성
// 평가: 정적 속성
// 호출: 정적 속성
// 평가: 정적 메서드
// 평가: 정적 메서드 매개변수
// 호출: 정적 메서드 매개변수
// 호출: 정적 메서드
// 평가: 클래스 데코레이터
// 평가: 생성자 매개변수
// 호출: 생성자 매개변수
// 호출: 클래스 데코레이터
```

예제 코드를 보면 인스턴스 멤버가 먼저 호출되고 그 뒤 정적 멤버가 호출되는 것을 볼 수 있다. 메서드 / 접근자 / 프로퍼티 데코레이터는 코드에 나타난 순서에 따라 달라진다.

### 매개변수 데코레이터 순서

동일한 메서드 및 생성자의 매개변수 데코레이터는 마지막 데코레이터가 먼저 호출된다.

```typescript
function f(key: string): any {
  console.log("평가:", key);
  return function () {
    console.log("호출:", key);
  };
}

class C {
  method(@f("Foo") foo, @f("Bar") bar) {}
}

// 평가: Foo
// 평가: Bar
// 호출: Bar
// 호출: Foo
```

### 다중 데코레이터 순서

하나의 대상에 여러 데코레이터를 적용한 경우, 내부 데코레이터가 먼저 호출된다.

```typescript
function f(key: string) {
  console.log("평가:", key);
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("호출:", key);
  };
}

class C {
  @f("외부 메서드")
  @f("내부 메서드")
  method() {}
}

// 평가: 외부 메서드
// 평가: 내부 메서드
// 호출: 내부 메서드
// 호출: 외부 메서드
```

---

**참조**

https://www.typescriptlang.org/ko/docs/handbook/decorators.html

https://mirone.me/a-complete-guide-to-typescript-decorator
