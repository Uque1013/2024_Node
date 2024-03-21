const A = 0 || 42
console.log(A)  // 42

const B = 0 ?? 42
console.log(B)  // 0

const C = '' || 'hi'
console.log(C)  // 'hi'

const D = '' ?? 'hi'
console.log(D)  // ''