
let newWin;
function openWindow() {
    newWin = window.open("https://example.com", "newWin", "width=800, height=600, left=100, top=100");
    if (newWin) {
        console.log("새 창이 열렸습니다:", newWin);
    } else {
        console.log("새 창을 여는 데 실패했습니다.");
    }
}

function closeWindow() {
    console.log("닫기 시도 중입니다. newWin:", newWin, "newWin.closed:", newWin ? newWin.closed : "undefined");
    if (newWin && !newWin.closed) {
        newWin.close();
        console.log("새 창이 닫혔습니다.");
    } else {
        console.log("닫을 새 창이 없습니다.");
    }
}

function printInner() {
    let message = `현재 윈도우 창의 크기는 ${window.innerWidth}`
    + ` * ${window.innerHeight}`;
    alert(message);
}
