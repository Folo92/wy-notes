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
  console.log("lenArr:\n", lenArr)
  let matched = findSum(lenArr, sum)
  console.log("matched:\n", matched, "\nresult:") //打印出来检查详细匹配
  return [...new Set(matched.flat())]
}

////////////////////////// 测试函数 ///////////////////////////

function arrayFrom(length, callback = (_, i) => i) {
  return Array.from({ length: length }, callback)
}

/**
 * 生成随机数组
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @param {number} n 生成数量
 * @returns 随机数组
 */
function randomArray(min, max, n) {
  let arr = []
  arrayFrom(n, () => arr.push(Math.floor(Math.random() * (max - min)) + min))
  return arr
}

const isArray = Array.isArray
const isObject = (val) => val !== null && typeof val === "object"

/**
 * @param {Function} fn 测试函数
 * @param {Array} args 测试函数的参数数组
 * @returns
 */
const testLog = (fn, args) => {
  if (isArray(args)) {
    // 克隆参数，防止参数被函数修改而影响后续测试
    args = args.map((item) => (isObject(item) ? JSON.parse(JSON.stringify(item)) : item))
  } else {
    return "参数格式错误"
  }

  // const t1 = performance.now()
  const start_time = process.hrtime()

  const result = fn.apply(this, args) // 执行函数

  const end_time = process.hrtime(start_time)
  const delta_time = Math.floor(end_time[0] * 1000 * 1000 + end_time[1] / 1000)
  // const t2 = Math.floor((performance.now() - t1) * 1000)

  console.log(result, "------", fn.name, "------", delta_time, "μs")
  return { fn: fn.name, time_ms: Math.floor(delta_time / 1000), time_μs: delta_time }
}

////////////////////////// 开始测试 ///////////////////////////

const sum = 20
const maxLen = 10
const arr = randomArray(1, sum, maxLen).map((n) => {
  return randomArray(0, 10, n)
})

testLog(matchList, [arr, sum])
