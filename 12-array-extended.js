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