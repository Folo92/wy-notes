// 方法一
function half1(a, b) {
  return Math.floor((a + b) / 2)
}

// 方法二，用位运算
function half2(a, b) {
  return (a + b) >> 1
}

function fn1(arr) {
  return arr.reduce((pre, cur) => {
    return half1(pre, cur)
  })
}

function fn2(arr) {
  return arr.reduce((pre, cur) => {
    return half2(pre, cur)
  })
}

const { testQueue } = require("../testLog.js")
const randomArray = require("../randomArray.js")

const arr = randomArray(1, 999999, 999999)

testQueue([fn1, fn2, fn2, fn1, fn1, fn2], [arr])

// 总结：用位运算速度更快，速度可提升20%左右。
