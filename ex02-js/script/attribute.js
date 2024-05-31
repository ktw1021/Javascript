// F12, Console 통해 확인 가능
function testAttributes() {
    // #main-image -> 속성확인
    let mainImage = document.getElementById("main-image");
    console.log("#main-image: ", mainImage)
    // 가지고 있는 모든 속성 확인
    console.log(mainImage.getAttributeNames());
    // ID 속성 확인
    console.log("id: ", mainImage.getAttribute("id"));
    // class 속성 확인
    console.log("class: ", mainImage.getAttribute("class"));
    // src 속성 확인
    console.log("src: ", mainImage.getAttribute("src"));
    // title 속성 확인
    console.log("title: ", mainImage.getAttribute("title"));

    // 속성 값 변경 : setAttribute
    mainImage.setAttribute("title",`제품: ${mainImage.getAttribute("title")}`);
    console.log("변경된 타이틀: ", mainImage.getAttribute("title"));

    // 하단 Products 이미지들의 title 속성도 변경 
    let subs = document.getElementsByClassName("sub-image");
    console.log(subs);
    for (let i = 0; i<subs.length; i++) {
    subs[i].setAttribute("title",`제품: ${subs[i].getAttribute("title")}`);
    console.log("변경된 타이틀: ", subs[i].getAttribute("title"));
    }
}
testAttributes();