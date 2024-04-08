const express = require('express')
const app = express()

// 미들웨어(함수) : 콘솔을 출력해주는 미들웨어
const middle1 = (req, res, next) => {
    console.log('미들웨어 실행')

    // 다음 미들웨어 또는 라우트 핸들러로 제어를 전달
    next()
}

// 미들웨어 등록 use:모든 method(get, post, put, delete등등)에 대해 처리
// arg로 경로를 지정하지 않으면, 모든 경로에 대해 처리
app.use(middle1)

app.get('/', (req, res)=> {
    res.send('Hello World')
})


app.listen(3000)