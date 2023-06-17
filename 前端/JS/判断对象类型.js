// 判断js数据类型最简方法
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

console.log(getType()) //"Undefined"
console.log(getType("")) //"String"
console.log(getType(1)) //"Number"
console.log(getType(1n)) //"BigInt"
console.log(getType(Symbol("uid"))) //"Symbol"
console.log(getType(true)) //"Boolean"
console.log(getType([])) //"Array"
console.log(getType({})) //"Object"
console.log(getType(null)) //"Null"
console.log(getType(function () {})) //"Function"

const isType = (type) => {
  return (obj) => {
    console.log(Object.prototype.toString.call(obj))
    console.log(`[object ${type}]`)
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}
const isArray = isType("Array")
const isFun = isType("Function")
console.log(isArray([1, 2, 3]))
console.log(isFun(function () {}))
