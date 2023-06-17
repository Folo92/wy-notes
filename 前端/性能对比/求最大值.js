const fn1 = (arr) => {
  return Math.max(...arr)
}

const fn2 = (arr) => {
  return arr.reduce((max, cur) => {
    return max > cur ? max : cur
  })
}

const fn3 = (arr) => {
  arr.sort(function (a, b) {
    return b - a
  })
  return arr[0]
}

const fn4 = (arr) => {
  arr.sort(function (a, b) {
    return a - b
  })
  return arr[arr.length - 1]
}

const fn5 = (arr) => {
  let max = arr[0]
  for (let i = 1, len = arr.length; i < len; i++) {
    if (max < arr[i]) max = arr[i]
  }
  return max
}

const { testLog } = require("../testLog.js")

const arr = [Array.from({ length: 10000 }, (_, i) => i)]

testLog(fn1, arr)
testLog(fn2, arr)
testLog(fn3, arr)
testLog(fn4, arr)
testLog(fn5, arr)
