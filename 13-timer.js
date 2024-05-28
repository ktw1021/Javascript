// timer 관련 함수
// 특정 시간이 흐른 후에 특정 기능 수행
// setTimeout(() => {}, milliseconds);
function timerTest() {
    console.log("3초 후에 인사합니다.");
    setTimeout(() => {
        console.log("안녕!");
    }, 3000)
    setTimeout(() => {
        console.log("반가워!");
    }, 4000)
    setTimeout(() => {
        console.log("나는 물의 요정이야!");
    }, 5000)
}
// timerTest();

// 특정 시간간격마다 특정 함수 실행
// setInterval(() => {}, 실행간격)
function intervalTest() {
    let count = 10;
    console.log("10초 후에 타이머가 종료됩니다.");
    let timer = setInterval(() => {
        console.log(count--);
        if (count<0) {
            clearInterval(timer);   // 타이머 제거
            console.log("폭발했습니다.");
            setTimeout(() => {
            console.log("당신은 햄버거입니다.")
            },2000)
        }
    }, 1000);
}
intervalTest();