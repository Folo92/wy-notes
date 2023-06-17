// 来自微软
// 给定一个字符串s，只含有0~9这些字符
// 你可以使用来自s中的数字，目的是拼出一个最大的回文数
// 使用数字的个数，不能超过s里含有的个数
// 比如 :
// 39878，能拼出的最大回文数是 : 898
// 00900，能拼出的最大回文数是 : 9
// 54321，能拼出的最大回文数是 : 5
// 最终的结果以字符串形式返回
// str的长度为N，1 <= N <= 100000
// 测试链接 : https://leetcode.cn/problems/largest-palindromic-number/

const largestPalindromic = (num) => {
  let prefix = "" //前缀
  let mid = "" //中间数字
  //关键点：从9到0逆序循环
  for (let i = 9; i >= 0; i--) {
    const count = num.split(`${i}`).length - 1 //统计数字个数
    if (mid === "" && count % 2 === 1) mid = `${i}` //数字个数为奇数时，锁定该数字为中间数字
    if (i === 0 && prefix === "") break //如果循环到0还没前缀，则跳出循环（防止0成为前缀）
    prefix += `${i}`.repeat(Math.floor(count / 2)) //拼接前缀
  }
  if (prefix === "" && mid === "") return "0" //全部为"0"的特殊情况
  else return prefix + mid + prefix.split("").reverse().join("") //拼接回文数字
}

const testLog = require("../testLog.js")

const arr = ["12233344445555567890", "12310", "0000", "11000000000000"]
arr.forEach((str) => {
  testLog(largestPalindromic, [str])
})
