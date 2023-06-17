const fn1 = (arr) => {
  return arr.sort(function (a, b) {
    return b.length - a.length
  })[0]
}

const fn2 = (arr) => {
  let longest = ""
  arr.forEach((str) => {
    if (str.length > longest.length) {
      longest = str
    }
  })
  return longest
}

const fn3 = (arr) => {
  let maxLen = 0
  let longest = ""
  arr.forEach((str) => {
    if (str.length > maxLen) {
      maxLen = str.length
      longest = str
    }
  })
  return longest
}

const fn4 = (arr) => {
  let maxLen = 0
  let longest = ""
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].length > maxLen) {
      maxLen = arr[i].length
      longest = arr[i]
    }
  }
  return longest
}

const fn5 = (arr) => {
  let maxLen = 0
  let longest = ""
  for (let i in arr) {
    if (arr[i].length > maxLen) {
      maxLen = arr[i].length
      longest = arr[i]
    }
  }
  return longest
}

const fn6 = (arr) => {
  let maxLen = 0
  let longest = ""
  for (let str of arr) {
    if (str.length > maxLen) {
      maxLen = str.length
      longest = str
    }
  }
  return longest
}

const { testLog } = require("../testLog.js")

const arr = [Array.from({ length: 10000 }, (_, i) => `${i}`)]

testLog(fn1, arr)
testLog(fn2, arr)
testLog(fn3, arr)
testLog(fn4, arr)
testLog(fn5, arr)
testLog(fn6, arr)
