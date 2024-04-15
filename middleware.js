const express = require('express')
const morgan = require('morgan')
const app = express()
const middle1 = require('./my_modules/middle1')


// 미들웨어 등록 use:모든 method(get, post, put, delete등등)에 대해 처리
// arg로 경로를 지정하지 않으면, 모든 경로에 대해 처리
app.use(middle1)
app.use(morgan)

app.get('/', (req, res, next)=> {
    // 애플리케이션 수준의 상태 저장
    req.app.locals.message = 'Hello World'
    next()
})


app.get('/', (req, res)=> {
    // 응답 수준의 상태 저장
    res.locals.additionalMessage = 'swag'

    // 저장된 상태 값 사용
    const message =  req.app.locals.message + res.locals.additionalMessage
    console.log(message)
    res.send(message)
})


app.listen(3000)