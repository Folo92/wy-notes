// NP-hard 子集和问题

/* 算法实现：找到数组中几个数相加和等于一个固定值
从一个长度为 n 的数组中，选出 m 个数，使得这 m 个数之和等于 sum
简要步骤：
1.要得到所有数字的排列组合，如果是[1,2,3,4,5]取出 3 个，那么可能性就有 10 种 C(5,3)= C(5,2)，全排列 P(n,m)=n!/(n-m)!，组合排列 P(n,m)=n!/m!/(n-m)!，C(5,2)=5!/2!*3!=5*4*3*2*1/[(2*1)*(3*2\*1)]=10
2.用二进制来模拟排列组合的情况，比如array = [1, 2, 3],二进制的111三个位，0表示未选取，1表示已经选取，正好可以排列组合出所有情况
3.用位掩码来计算迭代情况，来化简运算。位移运算来判断当前的数是否被选取
*/

/**
 * @param arr 目标数组
 * @param count 要选取的元素数目
 * @param sum 目标和
 * @returns [] 计算结果的数组
 */
const search = (arr, count, sum) => {
  // 计算二进制数的数字为1的位的数量（用来代表选中元素的个数）
  // 例如，num=21，转化为二进制数10101，有3个数字为1的位，则返回3
  const n = (num) => {
    let count = 0
    while (num) {
      num &= num - 1
      count++
    }
    return count
  }

  let len = arr.length
  // let bit = len > 30 ? (1 << 30) * (1 << (len - 30)) : 1 << len // 所有组合的数量，相当于2的len次方
  let bit = Math.pow(2, len)
  let res = []

  // 遍历所有的选择情况(每一个数值的二进制数都代表了一种组合), 这里忽略了 0 的情况(n = 0)
  for (let i = 1; i < bit; i++) {
    // 如果选择的元素个数等于count
    if (n(i) === count) {
      let s = 0
      let temp = []

      // 获取该组合的元素之和s以及由该组合的元素组成的数组temp
      for (let j = 0; j < len; j++) {
        // 利用位掩码，建立映射，找出选择位上的元素
        // 如果第j+1个元素被选中，则累加到临时的和并添加到临时数组中
        if ((i & Math.pow(2, j)) !== 0) {
          s += arr[j]
          temp.push(arr[j])
        }
        // if ((i & (1 << j)) !== 0) {
        //   s += arr[j]
        //   temp.push(arr[j])
        // }
      }

      // 如果这种选择情况满足和为 M , 添加到结果数组中
      if (s === sum) {
        res.push(temp)
      }
    }
  }

  return res
}

/**
 * @param arr 目标数组
 * @param count 要选取的元素数目
 * @param sum 目标和
 * @returns [] 计算结果的数组
 */
const findSum = (arr, count, sum) => {
  const result = []
  backtrack(arr, count, sum, [], 0, result)
  return result
}

const backtrack = (arr, count, sum, temp, start, result) => {
  if (temp.length === count && temp.reduce((a, b) => a + b, 0) === sum) {
    result.push([...temp])
    return
  }
  if (temp.length > count || start === arr.length) {
    return
  }
  for (let i = start, len = arr.length; i < len; i++) {
    temp.push(arr[i])
    backtrack(arr, count, sum, temp, i + 1, result)
    temp.pop()
  }
}

/**
 * @param arr 目标数组
 * @param sum 目标和
 * @returns bool 是否有匹配结果
 */
const match = (arr, sum) => {
  const newArr = arr.filter((n) => n < sum)
  for (let i = 0, len = newArr.length; i < len; i++) {
    const temp = search(newArr, i + 1, sum)
    console.log(temp)
    if (temp.length > 0) {
      return true
    }
  }
  return false
}

const match2 = (arr, sum) => {
  const newArr = arr.filter((n) => n < sum)
  for (let i = 0, len = newArr.length; i < len; i++) {
    const temp = findSum(newArr, i + 1, sum)
    if (temp.length > 0) {
      return true
    }
  }
  return false
}

/**
 * @param arr 目标数组
 * @param sum 目标和
 * @returns [] 所有匹配结果的数组
 */
const matchList = (arr, sum) => {
  const newArr = arr.filter((n) => n < sum)
  let result = []
  for (let i = 0, len = newArr.length; i < len; i++) {
    const temp = search(newArr, i + 1, sum)
    if (temp.length > 0) {
      result.push(...temp)
    }
  }
  return result
}

const matchList2 = (arr, sum) => {
  const newArr = arr.filter((n) => n < sum)
  let result = []
  for (let i = 0, len = newArr.length; i < len; i++) {
    const temp = findSum(newArr, i + 1, sum)
    if (temp.length > 0) {
      result.push(...temp)
    }
  }
  return result
}

// const { testLog } = require("./testLog.js")
const { testLog, testLogForEach } = require("../testLog.js")
const { arrayFrom, randomArray } = require("../Utils/index.js")

const sum = 20
// const arr = [[1, 2, 3, 4, 5], [1, 2], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3], [1]]
const arr = randomArray(1, sum, 28).map((n) => {
  return randomArray(0, 20, n)
})
const lenArr = arr.map((item) => {
  return item.length
})

// console.table(arr)
console.log(lenArr)
// testLog(match, [lenArr, sum])
// testLog(match2, [lenArr, sum])
// testLog(matchList, [lenArr, sum])
testLog(matchList2, [lenArr, sum])

// console.log((1 << 30) * (1 << 24))
// console.log(Math.pow(2, 54))
// console.log(findSum([1, 5, 2, 4, 3], 2, 5))
// console.log(search([1, 5, 2, 4, 3], 2, 5))
