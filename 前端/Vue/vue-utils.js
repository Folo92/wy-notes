const EMPTY_OBJ = Object.freeze({})
const EMPTY_ARR = Object.freeze([])
const NOOP = () => {}
/**
 * Always return false.
 */
const NO = () => false
const onRE = /^on[^a-z]/
const isOn = (key) => onRE.test(key)
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
