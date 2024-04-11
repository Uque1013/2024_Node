const numbers = [1, 2, 3, 4, 5, 6]

// 콜백이 참인 조건을 만족하는 가장 첫번째 요소만 반환
const evenNumbers = numbers.find(num=>num%2==0)
console.log(evenNumbers)

const users = [
    {name: '존', age: 25},
    {name: '마이크', age: 30},
    {name: '효진', age: 17},
]
const adults = users.find(user=>user.age<19)
console.log(adults)