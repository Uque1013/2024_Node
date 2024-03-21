let foo
console.log(foo) //undefined

const obj = {}
console.log(obj.prop) // undefined

// console.log(bar) // 에러발생 bar is not defined

let bar = null
console.log(bar) // null 

// 주의할 것
console.log(null == undefined) // true
console.log(null === undefined) // false