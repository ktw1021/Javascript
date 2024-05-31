const axios = require('axios');

// API 키와 버스 노선 정보 조회를 위한 요청 매개변수
const apiKey = 'aFaYNwN4cILVTvYDfYL3Cq37TtGoDHXLhbbk2qfEwXuVVhMMUtTdaJCoFAP/0/22YRvXvWs9OKOQB036Tj31Rg=='; // 여기에 국가 데이터 포털에서 발급받은 API 키를 넣어주세요
const routeId = 'YOUR_ROUTE_ID_HERE'; // 여기에 조회하려는 버스 노선 ID를 넣어주세요

// API 엔드포인트 URL
const apiUrl = 'http://apis.data.go.kr/1613000/BusRouteInfoInqireService/getRouteInfoIem';

// API 호출
axios.get(apiUrl, {
    params: {
        ServiceKey: apiKey,
        busRouteId: routeId
    }
})
.then(response => {
    // 성공 시 처리
    console.log('받은 데이터:', response.data);
})
.catch(error => {
    // 에러 처리
    console.error('요청 중 오류 발생:', error);
});
