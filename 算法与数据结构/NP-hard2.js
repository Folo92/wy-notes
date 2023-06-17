// NP-hard 子集和问题

const findSum = (arr, sum) => {
  const result = []
  backtrack(arr, sum, [], 0, result)
  return result
}

const backtrack = (arr, sum, temp, start, result) => {
  if (temp.reduce((s, i) => s + arr[i], 0) === sum) {
    result.push([...temp])
    return
  }
  if (start === arr.length) {
    return
  }
  for (let i = start, len = arr.length; i < len; i++) {
    temp.push(i) // 记录数组下标
    backtrack(arr, sum, temp, i + 1, result)
    temp.pop()
  }
}

/**
 * @param arr 目标数组
 * @param sum 目标和
 * @returns [] 所有可匹配元素的数组下标组成的数组
 */
const matchList = (arr, sum) => {
  const lenArr = arr.map((item) => {
    return item.length
  })
  console.log(lenArr)
  let idxArr = findSum(lenArr, sum)
  console.log(idxArr) //打印出来检查详细匹配
  return [...new Set(idxArr.flat())]
}

const { testLog } = require("../testLog.js")
const { randomArray } = require("../Utils/index.js")

const sum = 20
const maxLen = 24
const arr = randomArray(1, sum, maxLen).map((n) => {
  return randomArray(0, 10, n)
})

testLog(matchList, [arr, sum])
