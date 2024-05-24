// 함수 선언문
// 선언부
function sum(a,b){// 함수 이름(매개변수 목록)
    return a+b;
}

// 호출 과정을 거쳐야 함수 내부에 데이터가 들어가 실행됨. 
// 호출
console.log(sum(10,20));

/* 함수 표현식 --> 익명 함수
함수도 객체다. (1급 시민이다)
            --> 다른 객체들과 동등한 권리와 지위를 가진다.
                : 변수에 할당될 수 있다.
                : 다른 함수의 매개변수로 전달될 수 있다. 
*/

const asum = function(a,b) {
    console.log(typeof a, typeof b) 
    return a+b;
}
console.log(typeof asum);
console.log(asum(10,20));

/* 함수의 매개변수의 이해
 - ES의 함수는 선언부에 선언된 매개변수의 개수와 맞지 않게 호출해도 괜찮음. 
 */
console.log(asum());

// 매개변수가 없는 함수
function getNumberTotal() {
    // ES 특성상 전달되는 모든 매개변수는 argumentws 함수 객체에 모두 전달
    // console.log("arguments:", arguments);
    // 전달받은 매개변수 전체를 합산
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i]=="number"){
        result += arguments[i];
        }
    }
    return result;
}
    console.log(getNumberTotal(1,2,3,4,5));
    console.log(getNumberTotal(1,2,"3",4,5));

    // 구구단: a단부터 b단까지 출력
    function getGuguDan(a,b) {
        for (let i = a; i <= b; i++) {
            let j = 1;
            let dan = '';
            for ( ; j<10; j++) {
                    dan += `${i*j} \t`
            }
            console.log(dan);
        }
    }
getGuguDan(10,101);

// 함수는 객체 -> 변수에 할당되거나 다른 함수의 매개변수로 전달될 수 있다. 
function calculator(a,b,func) { // func -> 계산식 함수
    if (typeof func === "function") {
        console.log(func(a,b));
    } else {
        console.log("어쩔");
    }
}
calculator(2,9);
calculator(2,9,getGuguDan);

// 함수 보충
console.log("============= 화살표 표기법"); // 매개변수 목록 => 구현 내용

const f1 = function() {
    return "hello";
}
console.log(f1());

const f1_arrow = () => "hello";
console.log(f1_arrow());

let t;
let k;
let a = (t,k) => t*k;
t = 2;
k = 3;
console.log(a(t,k));

const f2 = function(name) {
    return "Hello, " + name;
} // 매개변수 O, 리턴 O
console.log(f2("홍길동"));

const f2_arrow = name => "hello, " + name;
console.log(f2_arrow("홍길동"));

const f3 = function(a,b) {
    return a + b;
}
console.log(f3(10,20));
const f3_arrow = (a,b) => {
    // 여러 개의 로직 수행할 때 -> 블록 {}을 잡을 수 있다. 
    // 블록이 잡히면 return 문을 생략할 수 없다. 
    console.log("화살표 함수");
    return a+b;
};
console.log(f3_arrow(10,15));

// 콜백 함수에 화살표 함수로 계산식 정의
calculator(10,20,(v1,v2) => v1 + v2);
calculator(10,20,(v1,v2) => v1 * v2);
calculator(10,20,getGuguDan);

// 콜백 함수 활용 -> Array 추가 강의

// 객체 생성 방법 1
const person = new Object();
// 동적으로 속성(프로퍼티, 메서드) 동적으로 추가
console.log(person);

person.name = "홍길동";
person.job = "도적";
person.showInfo = function() {
    console.log(`Name: ${this.name}`);
    console.log("Job: " + this.job);
}
person.showInfo();

const person2 = {
    name: "홍길동",
    job : "도적",
    showInfo: function() {
        console.log(`name: ${this.name}`);
        console.log(`job : ${this.job}`);
    }
}
person2.showInfo();

// class Member {
//     constructor(name, position) {
//         this.name = name;
//         this.position = position;
//     }
//     introduce() {
//         console.log("name:" + this.name);
//         console.log("position:" + this.position);
//     }
// }
// Member.prototype.team = "상북";
//     const m1 = new Member("강백호", "PF");
//     const m2 = new Member("서태웅","SF");
//     m1.introduce();
//     m2.introduce();

    console.log("========= 객체 생성 방법 3: Prototype 상속")
    // prototype 영역: 해당 객체를 이용해서 new 한 모든 인스턴스가 공유할 수 있는 공용영역
    // 함수를 기반으로 객체 설계도 구현

    const Member2 = function(name, position) {
        this.name = name;
        this.position = position;
    }
    m1 = new Member2("강백호", "PF");
    m2 = new Member2("서태웅", "SF");
    console.log("m1: ",m1)
    console.log("m2: ",m2)

    // ES는 동작으로 속성을 추가할 수 있다. 

    // m1 객체 전용 메서드
    m1.sayHi = function() {
        console.log(`${this.name}님이 당신에게 인사합니다.`);
    }
    m1.sayHi();
    // m2.sayHi();
    console.log("m1: ",m1)
    console.log("m2: ",m2)

    // m1의 생성자는 무엇인가?
    console.log("m1의 생성자: ",m1.constructor);
    console.log("m2의 생성자: ",m2.constructor);
    // Member의 prototype 영역 확인
    console.log("Member의 prototype:",Member2.prototype);

    Member2.prototype.team = "상북";
    Member2.prototype.introduce = function() {
        console.log(`안녕하세요, 저는 ${this.team}에서 ${this.position}을 담당하는 ${this.name}입니다.`);
    }
    m1.introduce();
    m2.introduce();

    console.log("Member의 prototype:",Member2.prototype);
    console.log("m1: ",m1);

    // ES는 동적으로 속성을 추가할 수 있기 때문에
    // 기존 객체에도 동적으로 속성 추가 가능

    // String 객체 = sayHi 메서드
    String.prototype.sayHi = function() {
    return `안녕하세요, ${this}님`;
    }
    console.log("둘리".sayHi());