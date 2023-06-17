// 来自美团
// 8.20笔试
// 小团生日收到妈妈送的两个一模一样的数列作为礼物!
// 他很开心的把玩，不过不小心没拿稳将数列摔坏了!
// 现在他手上的两个数列分别为A和B，长度分别为n和m。
// 小团很想再次让这两个数列变得一样。他现在能做两种操作:
// 操作一是将一个选定数列中的某一个数a改成数b，这会花费|b-a|的时间
// 操作二是选择一个数列中某个数a，将它从数列中丢掉，花费|a|的时间。
// 小团想知道，他最少能以多少时间将这两个数列变得再次相同!
// 输入描述:
// 第一行两个空格隔开的正整数n和m，分别表示数列A和B的长度。
// 接下来一行n个整数，分别为A1 A2...An
// 接下来一行m个整数，分别为B1 B2...Bm
// 对于所有数据，1 <= n,m <= 2000， |Ai|,|Bi| <= 10000
// 输出一行一个整数，表示最少花费时间，来使得两个数列相同。

//如果不考虑顺序，可按下列算法
const changeToSame = (arrA, arrB) => {
  const n = arrA.length
  const m = arrB.length
  let arrTemp = []
  let len = n
  let time = 0
  arrA.sort((a, b) => a - b)
  arrB.sort((a, b) => a - b)
  console.log(arrA, arrB)
  if (n > m) {
    arrTemp = arrA.slice(0, n - m)
    arrA = arrA.slice(n - m, n)
    len = m
  } else {
    arrTemp = arrB.slice(0, m - n)
    arrB = arrB.slice(m - n, m)
  }
  for (let i = 0; i < len; i++) {
    time += Math.abs(arrA[i] - arrB[i])
  }
  console.log(arrTemp)
  arrTemp.forEach((item) => {
    time += item
  })
  return time
}

const testLog = require("../testLog.js")

// const array1 = [9, 11, 1, 3, 25, 5, 7, 13, 15, 19, 17, 21, 23]
// const array2 = [6, 18, 9, 27, 3, 15, 21, 24]
const array1 = [1, 2, 3, 4, 15, 9]
const array2 = [2, 3, 1, 9, 14]
testLog(changeToSame, [array1, array2])
