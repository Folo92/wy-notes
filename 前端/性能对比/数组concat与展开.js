const fn1 = (arr) => {
  return [1].concat(arr)
}
const fn2 = (arr) => {
  return [1, ...arr]
}

const { testLog } = require("../testLog.js")

const arr = Array.from({ length: 100000 }, (_, i) => i)

testLog(fn1, [arr])
testLog(fn2, [arr])

/** 总结
 * concat 性能优于 展开
 * 数组长度为10000时差距约为20倍
 */
