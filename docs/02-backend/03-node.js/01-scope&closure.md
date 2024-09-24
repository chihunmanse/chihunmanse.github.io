---
title: 자바스크립트 스코프 & 클로저
description: JavaScript의 스코프와 클로저에 대해
tags: [BackEnd, JavaScript, Scope, Closure]
sidebar_position: 1
---

# 자바스크립트 스코프 & 클로저

## 스코프 (Scope)

스코프(Scope)는 어디서 어떻게 변수(확인자)를 찾는가를 결정하는 규칙의 집합이다. 스코프는 변수의 수명과 가시성을 결정하며, 변수를 어디서 선언하고 어떻게 접근할 수 있는지를 정의한다.

### 컴파일레이션 (Compilation)

전통적인 컴파일러 언어의 처리 과정에서는 프로그램을 이루는 소스 코드가 실행되기 전에 보통 3단계를 거치는데, 이를 컴파일레이션이라고 한다.

#### 토크나이징 (Tokenizing) / 렉싱 (Lexing)

토크나이징(Tokenizing) 또는 렉싱(Lexing)은 코드가 작은 의미 단위인 토큰(Token)으로 분리되는 과정이다. 자바스크립트 엔진은 이 과정을 통해 코드에서 변수, 키워드, 연산자 등을 인식하게 된다.

```javascript
let x = 5;
```

위 코드는 다음과 같은 토큰들로 나누어진다.

- `let`
- `x`
- `=`
- `5`
- `;`

#### 파싱 (Parsing)

파싱(Parsing)은 토큰을 구조화하여 **추상 구문 트리(AST, Abstract Syntax Tree)**를 생성하는 과정이다. 이 트리는 코드의 구조를 나타내며, 컴파일러가 이해할 수 있는 형태로 변환된다.

#### 코드 생성 (Code Generation)

코드 생성(Code Generation)은 파싱된 추상 구문 트리를 실행 코드(기계어)로 바꾸는 과정이다.

### 자바스크립트 엔진과 스코프

자바스크립트 엔진은 코드를 실행할 때 각 변수에 대한 LHS와 RHS 참조를 추적하여 해당 변수의 값을 어디에서 어떻게 처리할지 결정한다. 변수가 선언된 위치에 따라 엔진은 올바른 스코프 내에서 값을 참조하거나 할당한다.

#### RHS(Right-Hand Side) 참조

RHS는 변수의 값을 읽는 참조이다. 예를 들어, `console.log(x)`는 `x`의 값을 읽는 RHS 참조이다.

```javascript
let x = 10;
console.log(x); // RHS 참조
```

#### LHS(Left-Hand Side) 참조

LHS는 변수에 값을 대입하는 참조이다. 예를 들어, `x = 5`는 `x`에 값을 대입하는 LHS 참조이다. `=` 연산자가 사용되거나 인자를 함수의 인자로 넘겨줄 때 일어난다.

```javascript
let x;
x = 5; // LHS 참조
```

#### 중첩 스코프

스코프는 확인자 이름으로 변수를 찾기 위한 규칙의 집합이다. 하나의 블록이나 함수는 다른 블록이나 함수 안에 중첩될 수 있으므로 스코프도 다른 스코프 안에 중첩될 수 있다. 따라서 대상 변수를 현재 스코프에서 발견하지 못하면 엔진은 다음 바깥의 스코프로 넘어가는 식으로 변수를 찾거나 글로벌 스코프라 부르는 가장 바깥 스코프에 도달할 때까지 계속한다.

- 엔진은 현재 스코프에서 변수를 찾기 시작하고, 찾지 못하면 한 단계식 올라간다.
- 최상위 글로벌 스코프에 도달하면 변수를 찾았든, 못 찾았든 검색을 멈춘다.

#### 오류

LHS와 RHS는 변수가 아직 선언되지 않았을 때(검색한 모든 스코프에서 찾지 못했을 때) 서로 다르게 동작한다.

RHS 검색이 중첩 스코프 안 어디에서도 변수를 찾지 못하면 엔진이 ReferenceError를 발생시킨다. 반면에, 엔진이 LHS 검색을 수행하여 변수를 찾지 못하고 최상위 층(글로벌 스코프)에 도착할 때 프로그램이 Strict Mode로 동작하고 있는 것이 아니라면, 글로벌 스코프는 엔진이 검색하는 이름을 가진 새로운 변수를 생성해서 엔진에게 넘겨준다.

Strict Mode에서는 글로벌 변수를 자동으로 또는 암시적으로 생성할 수 없다. 따라서 앞의 상황이 닥치면 글로벌 스코프는 변수를 생성하지 않아서 LHS 검색은 아무 것도 얻지 못하고, 엔진은 RHS의 경우와 비슷하게 ReferenceError를 발생시킨다.

RHS 검색 결과 변수를 찾았지만, 함수가 아닌 값을 함수처럼 실행하거나 null이나 undefiend 값을 참조할 때 엔진은 TypeError를 발생시킨다.

ReferenceError는 스코프에서 대상을 찾았는지와 관계있지만, TypeError는 스코프 검색은 성공했으나 결괏값을 가지고 적합하지 않거나 불가능한 시도를 한 경우를 의미한다.

## 렉시컬 스코프 (Lexical Scope)

자바스크립트는 렉시컬 스코프(Lexical Scope), 즉 정적 스코프(Static Scope)를 따른다. 이는 변수가 선언된 위치에 따라 스코프가 결정된다는 의미이다. 어떤 함수가 어디서 또는 어떻게 호출되는지에 상관없이 함수의 렉시컬 스코프는 함수가 선언된 위치에 따라 정의된다.

### 렉스타임

일반적인 언어의 컴파일러는 첫 단계를 전통적으로 토크나이징 또는 렉싱이라 불리는 작업으로 시작한다. 렉싱 처리 과정에서는 소스 코드 문자열을 분석하여 상태 유지 파싱의 결과로 생성된 토큰에 의미를 부여한다. 렉시컬 스코프는 렉싱 타임에 정의되는 스코프다. 렉시컬 스코프는 개발자가 코드를 짤 때 변수와 스코프 블록을 어디서 작성하는가에 기초해서 렉서가 코드를 처리할 때 확정된다. 컴파일레이션의 렉싱 단계에서는 모든 확인자가 어디서 어떻게 선언됐는지 파악하여 실행 단계에서 어떻게 확인자를 검색할지 예상할 수 있도록 도와준다.

### 렉시컬 속이기

```js
function foo(str, a) {
  eval(str);
  console.log(a, b);
}

var b = 2;
foo("var b = 3;", 1); // 1, 3
```

eval() 함수는 문자열로 된 자바스크립트 코드를 실행한다. 문자열 "var b = 3"은 eval()이 호출되는 시점에 원래 있던 코드인 것처럼 처리된다. 이 코드는 새로운 변수 b를 선언하면서 이미 존재하는 foo()의 렉시컬 스코프를 수정한다. console.log()가 호출될 때 a와 b 모두 foo()의 스코프에서 찾을 수 있으므로 바깥의 b는 검색하지 않는다. 따라서 결괏값은 일반적인 경우처럼 "1, 2"가 아니라 "1, 3"이 나온다.

## 함수 vs 블록 스코프

### 함수 기반 스코프

함수 기반 스코프는 함수 내에서 정의된 변수는 해당 함수 내에서만 접근할 수 있는 스코프를 가진다. 이는 전통적인 자바스크립트 스코프의 기본적인 형태이다.

```javascript
function foo() {
  let x = 10;
  console.log(x);
}
console.log(x); // ReferenceError: x is not defined
```

#### var

`var`로 선언된 변수는 함수 스코프를 가진다. 이는 변수가 함수 내에서 선언되면 그 함수 내에서만 접근이 가능하고, 함수 외부에서는 접근할 수 없다는 의미이다. 하지만 함수 블록 내부의 어떤 하위 블록에서도 이 변수에 접근할 수 있다. 즉, 블록 스코프가 아니라 함수 전체에 걸쳐 변수가 유효하다.

```js
function foo() {
  var x = 10;
  if (true) {
    var y = 20;
    console.log(x); // 10 (함수 내 어디서든 접근 가능)
  }
  console.log(y); // 20 (if 블록 외부에서도 접근 가능)
}
foo();
console.log(x); // ReferenceError: x is not defined
```

`var`는 블록 스코프를 무시한다. `if`, `for`, `while` 등의 블록 내에서 `var`로 선언된 변수는 해당 블록에만 제한되는 것이 아니라, 선언된 함수(또는 전역 스코프 전체)에서 접근이 가능하다.

```js
if (true) {
  var x = 5;
}
console.log(x); // 5 (블록 바깥에서도 접근 가능)
```

### 스코프 역할을 하는 블록

#### try/catch

자바스크립트 ES3에서 `try/catch` 문 중 catch 부분에서 선언된 변수는 catch 블록 스코프에 속한다.

```js
try {
} catch (err) {}

console.log(err); // ReferenceError: err is not defined
```

#### let

ES6에서 추가된 `let`은 선언된 변수를 둘러싼 블록의 스코프에 붙인다. 명시적이진 않지만 `let`은 선언한 변수를 위해 해당 블록 스코프를 이용한다고도 말할 수 있다.

```javascript
if (true) {
  let x = 10;
  console.log(x);
}
console.log(x); // ReferenceError: x is not defined
```

#### const

ES6에서 추가된 `const` 역시 블록 스코프를 생성하지만, 선언된 값은 고정된다.

```js
if (true) {
  const y = 20;
  console.log(y);
}
console.log(y); // ReferenceError: y is not defined
```

## 호이스팅 (Hoisting)

### 선언문과 대입문

```js
a = 2;
var a;
console.log(a); // 2
```

```js
console.log(a);
var a = 2; // undefined
```

자바스크립트 엔진은 코드를 인터프리팅하기 전에 컴파일을 진행한다. 컴파일레이션 단계 중에는 모든 선언문을 찾자 적절한 스코프에 연결해주는 과정이 있다.

"var a = 2;"를 자바스크립트는 다음 두 개의 구문으로 본다.

- var a;
- a = 2;

첫째 구문은 선언문으로 컴파일레이션 단계에서 처리된다. 둘째 구문은 대입문으로 실행 단계까지 내버려둔다. 따라서 첫 번째 코드 조각은 다음과 같이 처리된다.

```js
var a;
a = 2;
console.log(a);
```

첫째 부문은 컴파일레이션 과정이고, 둘째 부문은 실행 과정이다. 비슷한 방식으로 두 번째 코드 조각은 다음과 같이 처리된다.

```js
var a;
console.log(a);
a = 2;
```

이 과정을 비유적으로 말하면 변수와 함수 선언문은 선언된 위치에서 코드의 꼭대기로 '끌어올려' 진다. 이렇게 선언문을 끌어올리는 동작을 호이스팅(Hoisting)이라고 한다.

let과 const로 선언된 변수는 var와 다르게 초기화되기 전까지는 호이스팅 되더라도 TDZ(Temporal Dead Zone)에 머물러있기 때문에 참조가 불가능하다.

호이스팅은 스코프별로 작동한다.

```js
foo();

function foo() {
  console.log(a); // undefined
  var a = 2;
}
```

위 코드에서 함수 foo의 선언문은 끌어올려졌으므로 foo를 첫째 줄에서도 호출할 수 있다. 또 foo() 함수 내에서 변수 a는 foo()의 꼭대기로 끌어올려진다.

```js
function foo() {
  var a;
  console.log(a);
}

foo();
```

함수 선언문은 이와 같이 끌어올려지지만 함수 표현식은 다르다.

```js
foo(); // TypeError: foo is not a function

var foo = function bar() {};
```

변수 확인자 foo는 끌어올려져 둘러싼 (글로벌) 스코프에 붙으므로 foo() 호출은 실패하지 않고, ReferenceError도 발생하지 않는다. 그러나 foo는 아직 값을 가지고 있지 않은데 foo()가 undefined 값을 호출하려해서 TypeError가 발생한다.

```js
foo(); // TypeError: foo is not a function
bar(); // ReferenceError: bar is not defined

var foo = function bar() {};
```

또한 함수 표현식이 이름을 가져도 그 이름 확인자는 해당 스코프에서 찾을 수 없다. 위 코드에 호이스팅을 적용하면 아래와 같이 해석된다.

```js
var foo;

foo(); // TypeError
bar(); // ReferenceError

foo = function() {
	var bar = ...self...
}
```

## 클로저 (Closure)

클로저는 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때에도 이 스코프에 접근할 수 있게 하는 기능을 뜻한다.

```js
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz = foo();

baz(); // 2
```

함수 bar()는 foo()의 렉시컬 스코프에 접근할 수 있고, bar() 함수 자체를 값으로 넘긴다. 이 코드는 bar를 참조하는 함수 객체 자체를 반환한다.

foo()를 실행하여 반환한 값(bar() 함수)을 baz라 불리는 변수에 대입하고 실제로는 baz() 함수를 호출한다. 이 경우에 함수 bar는 함수가 선언된 렉시컬 스코프 밖에서 실행된다.

선언된 위치에 따라 bar()는 foo() 스코프에 대한 렉시컬 스코프 클로저를 가지고, foo()는 bar()가 나중에 참조할 수 있도록 스코프를 살려둔다. 즉, bar()는 여전히 해당 스코프에 대한 참조를 가지는데, 그 참조를 바로 클로저라고 부른다.

함수는 원래 코드의 렉시컬 스코프에서 완전히 벗어나 호출됐지만 클로저는 호출된 함수가 원래 선언된 렉시컬 스코프에 계속해서 접근할 수 있도록 허용한다.

```js
var fn;

function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  fn = baz; // assign baz to gloval variable
}

function bar() {
  fn();
}

foo();

bar(); // 2
```

어떤 방식으로 내부 함수를 자신이 속한 렉시컬 스코프 밖으로 수송하든 함수는 처음 선언된 곳의 스코프에 대한 참조를 유지한다. 즉, 어디에서 해당 함수를 실행하든 클로저가 작용한다.

```js
function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}

wait("Hello, closure"); // Hello, closure
```

timer 함수는 wait() 함수의 스코프에 대한 스코프 클로저를 가지고 있으므로 변수 message에 대한 참조를 유지하고 사용할 수 있다.

### 반복문과 클로저

#### var 사용

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
} // 4를 3번 출력
```

`setTimeout`의 콜백 함수는 `console.log(i)`에서 반복문 변수 i를 참조한다. 이때 i는 `setTimeout`이 실행될 때의 값을 기억하는 것이 아니라, 반복문이 끝난 시점의 i 값을 참조한다. 이는 클로저로 인해 함수가 자신이 정의된 스코프를 기억하고 있기 때문에 가능하다.

`var` 키워드를 사용했기 때문에, i는 함수 스코프에서 관리되며 반복문이 끝난 후 i는 4로 설정된다. 따라서 모든 콜백 함수는 i가 4인 상태에서 실행된다.

#### 즉시 실행 함수 (IIFE, Immediately Invoked Function Expression) 사용

```js
for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
} // 1, 2, 3
```

반복문의 각 반복마다 별도의 스코프를 생성하여 i 값을 유지할 수 있다.

#### let 사용

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
} // 1, 2, 3
```

`let`은 블록 스코프를 가지기 때문에 각 반복마다 새로운 스코프가 생성된다. 이를 통해 변수 i가 각 반복마다 고유의 값을 가지게 할 수 있다.

#### 함수 내부에서 클로저 활용

```js
function createClosure(i) {
  return function () {
    console.log(i);
  };
}

for (var i = 1; i <= 3; i++) {
  setTimeout(createClosure(i), 1000);
}
```

`createClosure` 함수가 실행될 때마다 i값을 인자로 받아 그 값을 고정한 클로저가 생성된다.

---

**참조**

https://www.hanbit.co.kr/store/books/look.php?p_code=B8227329776
