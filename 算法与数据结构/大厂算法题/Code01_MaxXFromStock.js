// 来自神策
// 给定一个数组arr，表示连续n天的股价，数组下标表示第几天
// 指标X: 任意两天的股价之和 - 此两天间隔的天数
// 比如: 第3天，价格是10 ; 第9天，价格是30
// 那么第3天和第9天的指标X = 10 + 30 - (9 - 3)= 34
// 返回arr中最大的指标X及对应两天的数组下标

// 时间复杂度O(n)，推荐
const maxXFromStock = (arr) => {
  if (arr === null || arr === undefined || arr.length < 2) return undefined
  let result = { max: 0, indexA: 0, indexB: 0 }
  let preBest = arr[0]
  let preBestIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (result.max < arr[i] - i + preBest) {
      const x = arr[i] - i + preBest
      result = { max: x, indexA: preBestIndex, indexB: i }
    }
    if (preBest < arr[i] + i) {
      preBest = arr[i] + i
      preBestIndex = i
    }
  }
  return result
}

// 时间复杂度O(n^2)，不推荐
const maxXFromStock2 = (arr) => {
  if (arr === null || arr === undefined || arr.length < 2) return undefined
  let result = { max: 0, indexA: 0, indexB: 0 }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const x = arr[i] + arr[j] + i - j
      if (result.max < x) {
        result = { max: x, indexA: i, indexB: j }
      }
    }
  }
  return result
}

const testLog = require("../testLog.js")

const array = [1, 2, 10, 4, 15, 6, 7, 8, 30, 10].concat(
  Array.from({ length: 1000 }, (_, i) => i - i + 1)
)
console.log(array)
// console.log(maxXFromStock(array))
// console.log(maxXFromStock2(array))
testLog(maxXFromStock, [array])
testLog(maxXFromStock2, [array])
