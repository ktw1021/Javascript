// 한 줄 주석
/* 여러 줄 주석
    : 주석의 사용 방법은 C와 동일하다
    */
// console 객체: 출력 장치에 로그 레벨별로 로그를 출력하는 객체
// FATAL = ERRROR(error) - WARN(warn) - NORMAL(log, info), DEBUG(debug)
console.info("정보 메시지 출력");
console.debug("디버그 메시지 출력");
console.log("일반 메시지");

console.warn("경고 메시지");
console.error("에러 메시지");

// 출력할 내용들을 ,로 구분하여 나열
console.log("String",2024,true);
console.log(process.version,process.platform);

// ES는 객체 기반언어
// 객체: 여러 개의 데이터(속성) + 데이터를 다룰 수 있는 기능(메서드)
//          .으로 내부 속성과 메서드에 접근할 수 있다. 
console.log(Math.PI);   // 속성
console.log(Math.max(1,3,2,4,6,7)); // 메서드

console.log("-----------------");
// var: ES6 이전 -> 변수의 범위 등 일관성이 없음
// let(가변 데이터: mutable), const(불변 데이터: immutable, 상수)
var testVar = "var";
console.log(testVar);
let testLet = "let";
console.log(testLet);
const testConst = "const";
console.log(testConst);
// const는 불변데이터 -> 선언과 동시 데이터 할당해야
console.log("var,let,const:",testVar,testLet,testConst);

// 데이터 재할당
testVar = "var changed";
testLet = "let changed";
// testConst = "const changed";    //  const는 재할당 불가

// ES는 Dynamic Type Language
//      -> 데이터가 할당될 때 타입이 결정
//      -> 타입과 무관하게 어떤 객체든 할당됨

// 특정 연산 작업 수행 이전에 데이터 타입을 체크 해야 할 필요 있을 수 있다. 
let v = "This is String";
console.log(v, "->",typeof v);
v = 2024;
console.log(v, "->",typeof v);
v = 10 > 8 ;
console.log(v,"->",typeof v);