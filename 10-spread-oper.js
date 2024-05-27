console.log("======= 배열의 전개 연산");

let arr1 = ["홍길동", "장길산"];
let arr2 = ["임꺽정", "전우치"];

console.log(arr1, arr2);
// 두 개의 배열을 합치고 싶다. 
console.log(arr1.concat(arr2));

// 기존 방식으로 합치기 
let combined = [];
// 방법 1:
combined = [arr1[0],arr1[1], arr2[0], arr2[1]];
console.log(combined);
// 방법 2:
console.log(arr1.concat(arr2));
// ES Next 방식: 전개 연산자 활용
// 방법 3:
combined = [...arr1, ...arr2];
console.log(combined);

console.log("======= 배열의 전개");

combined.push("오일남");
console.log("원본 배열: ",combined);

// 배열 전개
let [ first, second, third = "empty", ...others] = combined;
console.log(first, second, third, others);

console.log("======== 객체 전개 연산");

var obj1 = {one: 1, two: 2, other: 0};
var obj2 = {three: 3, four: 4, other: -1};
console.log(obj1);
console.log(obj2);

var combined2 = { ...obj1, ...obj2}
console.log(combined2);

// 기존 방식: 방법 1
combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj1.other
};
console.log("기존방식1: ",combined);
// 기존 방식: 방법 2
combined = Object.assign({}, obj2, obj1);

console.log("기존방식2: ", combined);

combined = {
    ...obj1,    // obj1의 모든 속성을 전개
    ...obj2     // obj2의 모든 속성을 전개
};  // 전개 순서에 유의
console.log("전개연산자 활용: ", combined);

// 특정 속성 제거
delete combined.other;  // other 속성 제거
console.log(combined);

// 객체 속성 전개
let { one, three, five, ...rest} = combined;
console.log(one, three, five, rest);