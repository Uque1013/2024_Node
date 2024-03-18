// 앞에 아무것도 정의하지 않으면 전역변수 ex: fs = require('fs')
const fs = require('fs') // fs = file system
const path = require('path')

// json 파일 읽어오기
fs.readFile(path.join(__dirname, 'external_data.json')
        , (err, data) => {
            if(err) {
                console.error('파일 읽는 중 오류 발생'.err)
                return 
            }
            // 읽어온 파일의 텍스트를 data로 넘겨받는다.
            console.log(data)

            // JSON 텍스트를 object로 변환
            const jsonObject = JSON.parse(data)
            console.log(jsonObject)
            
            // object를 JSON형태의 텍스트로
            const jsonString = jSON.stringify(jsonObject)
            console.log(jsonString)
        })

