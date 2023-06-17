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

/**
 * @param {Function} fnArray 由多个测试函数组成的数组
 * @param {Array} args 测试函数的参数数组
 * @returns
 */
const testQueue = (fnArray, args) => {
  let results = []
  fnArray.forEach((fn) => results.push(testLog(fn, args)))
  console.table(results.sort((a, b) => a.time_μs - b.time_μs))
}

/**
 * @param {Function} fn 测试函数
 * @param {Array} argsArray 由多组测试函数的参数数组组成的数组
 * @returns
 */
const testLogForEach = (fn, argsArray) => {
  // console.log(new Date().toLocaleString(), " START")
  console.log(">>>>>>", fn.name)
  argsArray.forEach((args) => testLog(fn, [args]))
  console.log("<<<<<<")
  // console.log(new Date().toLocaleString(), " END")
}

module.exports = { testLog, testQueue, testLogForEach }
