
        // 문서로드 완료 이벤트 load
        // 문서의 초기화 코드는 load 이벤트 핸들러 안에 작성
        // - 요소에 이벤트 핸들러 부착
        // - 서버로부터 데이터 전송받아서 내부 요소에 반영 등
        window.addEventListener("load", (event) => {
            
            // #main-image를 click하면 발생하는 이벤트 (정보) 확인
            document.getElementById("main-image").onclick = event => {
                // 이벤트 처리 함수의 첫번째 매개변수는 이벤트 정보객체
                alert("메인이미지 클릭!");
                console.log(event);
                console.log("이벤트명: ", event.name);
                console.log("이벤트 발생 객체: ", event.target);
            }
    
            let products = document.getElementsByClassName("sub-image");
            for (let i = 0; i < products.length; i++) {
                let product = products[i];  // 개별 요소 검색
                console.log(product);
                // 개별 click 이벤트 핸들러 부착
                product.addEventListener("click", event => {
                    let obj = event.target; // 이벤트 발생 객체
                    let mainImage = document.getElementById("main-image");
                    mainImage.setAttribute("src",obj.getAttribute("src"));
                    mainImage.setAttribute("title",
                        obj.getAttribute("title"));
                    let productTitle = document.querySelector("#product-info h2");
                    console.log(productTitle);
                    // 컨텐츠 변경 방법: innerText, innerHTML
                    productTitle.innerText = obj.getAttribute("title");
                })
            }
        });


document.addEventListener("DOMContentLoaded",() => {
    const keywordInput = document.getElementById("keyword");
    const btnSearch = document.getElementById("btn-search");

        document.getElementById("keyword")
            // .addEventListener("keypress",event => {
            // .addEventListener("keydown", event => {
            .addEventListener("change", event => {
            // .addEventListener("keyup", event => {
                console.log(event);
                let message = event.target.value;
                console.log(message);

if (message.trim() === "") {
    btnSearch.innerText = "검색";
} else {

 
                btnSearch.innerText= `검색: ${message}`;
}
            });
        });