// forEach : 배열 내부 요소들을 하나씩 추출, 콜백함수로 전달
function testForEach() {
    console.log("=========== testForEach");
    let source = ["Apple", "Banana", "Carrot","Durian"];

    console.log("======= 요소들만 전달")
    source.forEach(item => {
        console.log(item);
    })

    console.log("======= 요소와 함께 인덱스 전달") 
    source.forEach((item, index) => {
        console.log(`${index} -> ${item}`);
    });
    
    console.log("======= 요소, 인덱스와 함께 배열 자체도 전달")
    source.forEach((item, index, arr) => {
        console.log(`${index} -> ${item}`, arr)
    });
}
// testForEach();

function testEverySome() {
    let data = [
        {name: "홍길동", age: 28},
        {name: "장길산", age: 45},
        {name: "고길동", age: 52}
    ];

    console.log("원본데이터: ", data);

    // data 내부의 모든 객체의 나이가 28세를 초과하는지 검증
    let result = data.every(obj => {
        return obj.age>28;  // 검증 로직
    });
    console.log("모든 인물의 나이가 28세 초과인가?: ", result);

    // data 내부의 일부 객체의 나이가 50세를 초과하는지 검증
    let result2 = data.some(obj => obj.age>50);
    console.log("50세 초과의 인물이 있는가?: ",result2);
}
testEverySome();

// 데이터처리 파이프라인
// map -> filter -> sort -> reduce

let numbers = [1, 2,3, 4, 5,6, 7,8, 9, 10, 11, 12];
let source = [12, 4, 19, 33, 86];

function testMap() {
    console.log("===== map =====");
    // numbers 배열의 모든 요소를 2배
    // 기존 방식 구현
    let multiply = [];
    for (let i = 0; i<numbers.length; i++) {
        multiply.push(numbers[i]*2);
    }
    console.log("기존방식*2: ",multiply);

    // map - 형태를 그대로, 내부 요소 조작(변경)
    let result = numbers.map(item => item * 2);
    console.log("원본배열: ", numbers)
    console.log("원본배열*2: ", result);
}
// testMap();

function testFilter() {
    // filter: 내부 요소는 그대로, 조건 만족하는 요소만 뽑아서 새 배열 생성
    let even = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]%2==0) {
            even.push(numbers[i]);
        }
    }
    console.log("기존방식: ",even);
    // numbers 배열 요소 중 짝수만 필터링

    let result = numbers.filter(item => item %2==0);
    console.log("원본배열: ", numbers)
    console.log("짝수배열: ", result);
}
// testFilter();

function testReduce() {
    console.log("===== reduce =====");
    console.log("원본배열: ",source);
    // source 배열 내부 요소 모두 합산
    let sum = source.reduce((acc,value,index,arr) => {
        console.log(`이전 값은 ${acc}`);
        console.log(`${arr}의 ${index+1}번째 요소는 ${value}입니다.`)
        return acc * value; // 다음번 콜백의 acc 매개변수로 전달

    }, 1);  // (acc, value, index, arr), 초기값
    console.log(sum);
}
// testReduce();

function testReduce2() {
    // 반복되는 모든 것에는 reduce 함수를 적용할 수 있다. 
    // map 함수의 기능을 reduce 함수로 구현해 봄.
    // testMap 함수의 기능을 reduce 함수로 작성 : 요소값 * 2
    console.log("원본배열: ", numbers);
    let multiply = numbers.reduce((acc,value,index,arr) => {
        console.log(`이전 값은 ${acc}`);
        console.log(`${arr}의 ${index+1}번째 요소는 ${value}입니다.`)
        acc.push(value*2);
        return acc;
    },[])
    console.log(multiply);
}
// testReduce2();

let mul = numbers.reduce((acc,value) => {
    acc.push(value*2);
    return acc;
},[]);
console.log(mul);

function testReduce3() {
    console.log("원본배열: ", numbers);
    let filtered = numbers.reduce((acc,value) => {
        if (value % 2 == 0) {
            acc.push(value);
        }
        else {
            acc.push(value+0.5);
        }
        return acc;
    }, [])
    console.log(filtered);
}
// testReduce3();

console.log("============");
const data = [
    {name: '철수', kor: 85, eng: 92, math: 88},
    {name: '영희', kor: 70, eng: 74, math: 95},
    {name: '지후', kor: 91, eng: 89, math: 85},
    {name: '지수', kor: 65, eng: 70, math: 72},
    {name: '윤정', kor: 80, eng: 90, math: 91}
]

// 총점(map) -> 특정 점수 이상만 필터 -> 총점이 높은 사람->낮은 사람 소팅 -> 필터링된 학생들 합산점수 reduce

function testDataPipeline() {
    console.log("원본데이터: ",data);

    // map 함수 이용 -> total 파생변수 생성
const studentsWithTotal = data.map(student => ({
    ...student,
    total: student.kor + student.eng + student.math
}));
    console.log("map: ", studentsWithTotal);
    // filter 함수 이용 -> total >= 240만 추출
const filteredStudents = studentsWithTotal.filter(student =>
    student.total > 250
);
    console.log("filter: ", filteredStudents);
    // sort 함수 이용 -> 총점 기준으로 정렬
const sortedStudents = filteredStudents.sort((a,b) => 
    b.total - a.total);
    console.log("sorted: ",sortedStudents);
    // reduce 함수 이용 -> 필터링된 학생들 총점 평균
const totalSum = sortedStudents.reduce((acc,value) => {
    return (acc + value.total)
}, 0)
    console.log("AVG: ", totalSum / sortedStudents.length);
    console.log("pipeline: ", 
        data.map(student => ({
            ...student,
            total: student.kor + student.eng + student.math}))
            .filter(student =>
            student.total > 250)
            .sort((a,b) => 
                b.total - a.total)
            .reduce((acc,value) => {
                    return (acc + value.total)
                }, 0) / sortedStudents.length )
    
}
testDataPipeline();

// let result = source.filter(item => item%2==1);
// console.log(result);

// result = result.map(item => item*2);
// console.log(result);

// let sum = result.reduce((acc,value,idx,arr) => {
//     console.log(`누산 값은 ${acc}`);
//     console.log(`${arr}의 ${idx}번째 요소는 ${value}`);
//     return acc + value;
// },0);
// console.log(sum);