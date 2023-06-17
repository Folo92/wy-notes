const EMPTY_OBJ = Object.freeze({})
const EMPTY_ARR = Object.freeze([])
const NOOP = () => {}
const NO = () => false // Always return false.
const isModelListener = (key) => key.startsWith("onUpdate:")
const extend = Object.assign
const remove = (arr, el) => {
  const i = arr.indexOf(el)
  if (i > -1) {
    arr.splice(i, 1)
  }
}
const hasOwnProperty$1 = Object.prototype.hasOwnProperty
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key)
const isArray = Array.isArray
const isMap = (val) => toTypeString(val) === "[object Map]"
const isSet = (val) => toTypeString(val) === "[object Set]"
const isDate = (val) => toTypeString(val) === "[object Date]"
const isRegExp = (val) => toTypeString(val) === "[object RegExp]"
const isFunction = (val) => typeof val === "function"
const isString = (val) => typeof val === "string"
const isSymbol = (val) => typeof val === "symbol"
const isObject = (val) => val !== null && typeof val === "object"
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
const objectToString = Object.prototype.toString
const toTypeString = (value) => objectToString.call(value)
const toRawType = (value) => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1)
}
const isPlainObject = (val) => toTypeString(val) === "[object Object]"
const isIntegerKey = (key) =>
  isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

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
  // min最小值，max最大值
  let arr = []
  arrayFrom(n, () => arr.push(Math.floor(Math.random() * (max - min)) + min))
  // for (let i = 0; i < n; i++) arr.push(Math.floor(Math.random() * (max - min)) + min)
  return arr
}

function sleep(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(), delay))
}
// ;(async function () {
//   console.log(111)
//   await sleep(2000)
//   console.log(222)
// })()

module.exports = {
  EMPTY_OBJ,
  EMPTY_ARR,
  NOOP,
  NO,
  isModelListener,
  extend,
  remove,
  hasOwn,
  isArray,
  isMap,
  isSet,
  isDate,
  isRegExp,
  isFunction,
  isString,
  isSymbol,
  isObject,
  isPromise,
  objectToString,
  toTypeString,
  toRawType,
  isPlainObject,
  isIntegerKey,
  swap,
  arrayFrom,
  randomArray,
  sleep,
}
