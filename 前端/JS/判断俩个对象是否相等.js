// 判断对象是否相等的步骤：
// 1.判断两者是不是对象
// 2.判断两者是不是同一个对象
// 3.判断两者长度是否一致
// 4.判断两者的所有key和value是否相等
// 5.递归判断属性值中的对象，循环1-4步骤

const isObject = (val) => val !== null && typeof val === "object"

function isEqual(obj1, obj2) {
  // 如果不是对象，直接比较并且返回
  if (!isObject(obj1) || !isObject(obj2)) return obj1 === obj2
  // 如果是同一个对象，直接返回true
  if (obj1 === obj2) return true
  // 如果key的长度不一致，返回false
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  // 递归比较
  for (let key in obj1) {
    if (!isEqual(obj1[key], obj2[key])) return false
  }
  return true
}

const obj1 = { a: 1, b: 2, c: { d: 4 } }
const obj2 = { a: 1, b: 2, c: { d: 4 } }
const obj3 = { a: 1, b: "2", c: { d: 4 } }
const obj4 = { a: 1, b: 2, c: { d: "4" } }
const obj5 = { a: 1, b: 2, c: { d: 4 }, e: 5 }
console.log(isEqual(obj1, obj2)) // true
console.log(isEqual(obj1, obj3)) // false
console.log(isEqual(obj1, obj4)) // false
console.log(isEqual(obj1, obj5)) // false

const { randomArray } = require("../Utils/index")
console.log(randomArray(1, 100, 10))
