---
layout: single
tags: 
 - javascript

toc: true
toc_sticky: true

title: "[javascript] 문법 학습 1"
---



# 콜백함수

어떤 함수의 매개변수로 받는 함수를 콜백함수라고 한다.

```jsx
const test = function (callback) {
	callback()
}

const func = function () {
	console.log("안녕하세요")
}

test(func)

// 안녕하세요

const 배열 = [1,2,3,4,5]
배열.forEach(function (value, index) {
	console.log(value, index)
})
```

**forEach**

```javascript
const myArr = [1, 2, 3, 4, 5];

const newMyArr = myArr.forEach((currentElement, index, array) => {
    console.log(`요소: ${currentElement}`);
    console.log(`index: ${index}`);
    console.log(array);
});

console.log(newMyArr); // undefined
```

**filter**

```javascript
const numbers = [1, 2, 3, 4, 5]; 
const result = numbers.filter(number => number > 3); 
console.log(numbers); 
// [1, 2, 3, 4, 5]; 
console.log(result); 
// [4, 5]
```

**map**

```javascript
const numbers = [1, 2, 3, 4, 5]; 
const result = numbers.map(number => number * number); 
console.log(numbers); 
// [1, 2, 3, 4, 5]; 
console.log(result); 
// [1, 4, 9, 16, 25]
```

**화살표함수**

```jsx
배열.filter(function (value, index) {
	return value % 2 === 0	
})

배열.filter((value, index) => value % 2 === 0)
```



# 자료형, 프로토타입

기본 자료형 → 스택에 값을 저장

- 숫자
- 문자열
- 불

객체 자료형 → 스택과 힙을 연결 → 속성과 메서드를 가질 수 있음

- 함수
- 배열
- 객체
- 등등

```jsx
const b = function() {}
b.value = 10
b.value
// 10

const a = []
typeof(a)
// "object"

Araay.isArray(a)
// true

const c = function() {}
typeof(b)
// "function" 
//  함수는 일급객체
```

기본자료형의 승급

```jsx
const a = new Number(10)
typeof(a)
///"object"

// new 키워드를 사용하면 기본 자료형을 객체로 만들 수 있다.
// 기본 자료형 뒤에 .을 찍고 속성과 메서드를 쓰면 일시적으로 객체로 
// 변경되서 속성과 메서드를 사용할 수 있게 해준다.
```

프로토타입을 활용하여 기본자료형에 추가적인 속성과 메서드를 만들 수 있다.

```jsx
String.prototype.value = 10
const a = '문자열'
console.log(a.value)
/// 10

String.prototype.contain = function (str) {
	return this.indexOf(str) >= 0	
}

console.log(a.contain('문자'))
// true
```



# 선언적 함수와 익명 함수

익명함수는 무조건 위에서 아래로 읽어지면서 만들어진다.

```jsx
let 함수 = function () {
	console.log('A 함수')	
}

함수 = function () {
	console.log('B 함수')	
}

함수 = function () {
	console.log('C 함수')	
}

함수()

// 'C 함수'
```

선언적 함수는 전체 코드를 읽기 전에 선언한 순서대로 만들어진다.

```jsx
함수()

함수 = function() {
	console.log('익명 함수')
} /// 나중에 실행 (함수라는 변수명에 넣어짐)

function 함수() {
	consloe.log('선언적 함수')
} /// 먼저 만들어짐

함수()

// 선언적 함수
// 익명 함수
```

선언적 함수는 거의 사용하지 않는다.



# 객체 기본값 지정

```javascript
const test = function({
	name,
	age,
	color,
	status = '이상없음'
}) {
	return `${name} : ${age} : ${color} : ${status}`
}

console.log(test({
	name: '구름',
	age: 7,
	color: '갈색',
}))

// 구름 : 7 : 갈색 : 이상없음

const func = function(object) {
	const {name, age, color, status} = {status: '이상없음', ...object}
	return `${name} : ${age} : ${color} : ${status}`
}

console.log(func({
	name: '구름',
	age: 7,
	color: '갈색',
}))

// 구름 : 7 : 갈색 : 이상없음
```


