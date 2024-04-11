const numbers = [1, 2, 3, 4, 5, 6]

// 콜백이 참인 조건을 만족하는 요소들만 추출
const evenNumbers = numbers.filter(num=>num%2==0)
console.log(evenNumbers)

const users = [
    {name: '존', age: 25},
    {name: '마이크', age: 30},
    {name: '효진', age: 17},
]
const adults = users.filter(user=>user.age>=19)
console.log(adults)