//  String
const s1 = "Modern JavaScript and Java";    // 리터럴 생성
const s2 = String("Modern JavaScript and Java") // d타입 함수 이용 생성

console.log(typeof s1, typeof s2);

//  .length; 문자열 길이 확인하는 속성
console.log("String",s1,", length:",s1.length);

// 문자열 추출 메서드
console.log(s1.charAt(7));
// ES는 문자열도 배열처럼 활용
console.log(s1[7]);
console.log(s1.substring(7,10));   // 7번 인덱스부터 10개 문자 추출 -> deprecated(substr)

// 문자열 검색
let position;
position = s1.indexOf("Java");
console.log("1st search:", position);
position += 4;
position = s1.indexOf("Java",position); // 검색어, 검색시작위치
console.log("2nd search:", position);

console.log("No keyword",s1.indexOf("java"));   // -1 찾는 검색어 없음

console.log("lastIndexOf: ", s1.lastIndexOf("Script")); // 검색 방향 뒤부터

// 문자열 치환
console.log(s1.replace("JavaScript","JS")); // 검색어, 바꿀 문자열
console.log(s1);

// 변경 데이터를 뒤에서도 사용하고자 한다면 재할당 후 사용
const s1_changed = s1.replace("JavaScript","JS");
console.log(s1,s1_changed);

// 화이트스페이스(공백, 탭, 개행 등) 제거
console.log("         HELLO       ".trim());

// ES string 보충
// 이스케이프 -> 키보드로 입력 불가능하거나 특수한 의미를 가진 문자(\)
// \n: 개행
// \t: 탭
// \': '
// \": "
// \`: 백틱
// \$: 탬플릿 문자

let message = `He Said, "Hello"`
console.log(message);
message = "He said, \"Hello\"";
console.log(message);

message = "i'm going";
console.log(message);
message = 'i\'m going';
console.log(message);

// 여러 줄 문자열
message = "예전에는 \n" +
        "여러 줄 문자열을 만드는 것이 \n" +
        "쉽지 않았습니다.";
        message = "예전에는 \n여러 줄 문자열을 만드는 것이 \n 쉽지 않았습니다.";
        console.log(message);
message = `하지만 ES6이상에서는 
아주 손쉽게 
여러 줄 문자열을 만들 수 있습니다.`;
console.log(message);

console.log(("\n============ Template 문자열"));
let temp = 24;
console.log(temp);


message = `현재 실내 온도는 ${temp}도 입니다.`;
console.log(message);
