// 총 경과시간 대략 5초
// 비동기 함수를 사용하면 동기함수보다 전체 실행시간을 줄일 수 있다.
setTimeout(() => console.log("5초가 경과"), 5000)
setTimeout(() => console.log("2초가 경과"), 2000)
