// 미들웨어(함수) : 콘솔을 출력해주는 미들웨어
const middle1 = (req, res, next) => {
    console.log('미들웨어 실행')

    // 다음 미들웨어 또는 라우트 핸들러로 제어를 전달
    next()
}
// exports와 유의
module.exports = middle1