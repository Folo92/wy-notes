const fn1 = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    1
  }
}
const fn2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    1
  }
}

const { testLog } = require("../testLog.js")

const arr = [Array.from({ length: 10000 }, (_, i) => i)]

testLog(fn1, arr)
testLog(fn2, arr)
testLog(fn2, arr)
testLog(fn1, arr)
