// 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。
// 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num--
    }
    steps++
  }
  return steps
}

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps2 = function (num) {
  let steps = 0
  while (num > 0) {
    steps += (num & 1) + 1
    num >>= 1
  }
  return steps > 0 ? steps - 1 : 0
}

const { testLog } = require("../testLog.js")

const arr = [14, 8, 123, 2, 1]
arr.forEach((item) => {
  testLog(numberOfSteps2, [item])
})
