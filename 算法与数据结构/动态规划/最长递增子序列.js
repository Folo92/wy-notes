// 最长递增子序列问题

// 输出递增子序列数组长度
let longestIncreaseSubsequence = function (sequence) {
  let memo = {}
  // 递归函数
  const LIS = (seq, n) => {
    if (memo[n] !== undefined) return memo[n]
    if (n == seq.length - 1) return 1
    let maxLen = 1
    for (let i = n, len = sequence.length; i < len; i++) {
      if (seq[i] > seq[n]) {
        maxLen = Math.max(maxLen, LIS(seq, i) + 1)
      }
    }
    memo[n] = maxLen
    return maxLen
  }
  for (let i = 0, len = sequence.length; i < len; i++) {
    LIS(sequence, i)
  }
  // return Object.values(memo)
  return Math.max(...Object.values(memo))
}

// 输出递增子序列数组
let longestIncreaseSubsequence2 = function (sequence) {
  let memo = {}
  // 递归函数
  const LIS = (seq, n) => {
    if (memo[n] === undefined) memo[n] = [seq[n]]
    else return memo[n].length
    if (n == seq.length - 1) return 1
    let maxLen = 1
    for (let i = n, len = sequence.length; i < len; i++) {
      if (seq[i] > seq[n]) {
        const tempLen = LIS(seq, i) + 1
        if (maxLen < tempLen) {
          memo[n] = [seq[n]].concat(memo[i])
          maxLen = tempLen
        }
      }
    }
    return maxLen
  }
  for (let i = 0, len = sequence.length; i < len; i++) {
    LIS(sequence, i)
  }
  // return Object.values(memo)
  return Object.values(memo).sort(function (a, b) {
    return b.length - a.length
  })[0]
}

const arr = [
  [6, 1, 5, 2, 4, 3],
  [4, 2, 1, 8, 3, 5, 7, 6],
]
const { testLog, testLogForEach } = require("../../testLog")

// testLog(longestIncreaseSubsequence, [arr[0]])
testLogForEach(longestIncreaseSubsequence, arr)
testLogForEach(longestIncreaseSubsequence2, arr)
