const fn1 = (arr) => {
  arr = arr.concat([1])
  return arr.length
}
const fn2 = (arr) => {
  arr.push(1)
  return arr.length
}

const fn3 = (arr) => {
  let left = []
  let right = []
  for (let x of arr) {
    if (x < 50) left = left.concat([1, 2])
    else right = right.concat([1, 2])
  }
  // return [left.length, right.length]
}
const fn4 = (arr) => {
  let left = []
  let right = []
  for (let x of arr) (x < 50 ? left : right).push(1)
  // return [left.length, right.length]
}

const { testLog } = require("../testLog.js")
const randomArray = require("../randomArray.js")
const arr = randomArray(1, 100, 10000)

// const arr = [Array.from({ length: 10000 }, (_, i) => i)]

testLog(fn1, [arr])
testLog(fn2, [arr])
testLog(fn3, [arr])
testLog(fn4, [arr])

/** 总结
 * push 性能优于 concat
 * 数组越长差距越大
 * 数组长度为1000时差距约为10倍
 * 数组长度为10000时差距约为20倍
 * 数组长度为100000时差距约为200倍
 */
