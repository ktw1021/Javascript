// 연습문제1.
// 2단~9단까지 구구단표 출력

// - for문 버전 (*)
for (let i = 2; i<10; i++) {
    let gugu = '';
    for (let j = 1; j<10; j++) {
        gugu+=`${i*j}\t`;
    }
    console.log(gugu);
}

// - while 문 버전 
let i = 2;
while (i<10) {
let j = 1;
    while (j<10) {
    console.log(i*j);
    j++
    }
    i++;
}

// 연습문제2.
/*

*****
****
***
**
*

*/
// - for문 버전(*)
for (let i = 5; i>0; i--) {
    let star = '';
    for (let j = 0; j<i; j++) {
        star+="*";
    }
    console.log(star);
}

// - while문 버전

i = 5;
while (i>0) {
    let star = '';   
    let j = 0;
    while (j<i) { 
    star+='*';
        j++;
    }
    console.log(star);
    i--;
}

// TODO: for ... in, for ... of 
//      array extended 수업 이후에 추가 진행

// for ... in
// 객체의 속성 순회
const obj = {
    name: "홍길동",
    age: 28,
    job: "도적"
}
let v = obj.age;
console.log(v);

for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}

// for ... of
// 배열을 순회
const arr = [1, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item);
}
