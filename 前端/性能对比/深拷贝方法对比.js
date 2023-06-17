/** 实现深拷贝，并用WeakMap解决循环引用导致的死循环问题 */

/** 方法一 */
function deepClone(origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== "object") {
    return origin
  }

  if (origin instanceof Date) {
    return new Date(origin)
  }
  if (origin instanceof RegExp) {
    return new RegExp(origin)
  }
  const hashKey = hashMap.get(origin)
  if (hashKey) {
    return hashKey
  }
  const target = new origin.constructor()
  hashMap.set(origin, target)
  for (let k in origin) {
    // if (origin.hasOwnProperty(k)) {
    //   target[k] = deepClone(origin[k], hashMap)
    // }
    if (Object.prototype.hasOwnProperty.call(origin, k)) {
      target[k] = deepClone(origin[k], hashMap)
    }
  }
  return target
}

/** 方法二 */
function deepClone2(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj // primitives
  if (hash.has(obj)) return hash.get(obj) // cyclic reference
  const result = Array.isArray(obj) ? [] : {}
  hash.set(obj, result) // save the cloned object to the hash
  Object.keys(obj).forEach((key) => {
    if (Object(obj[key]) === obj[key]) {
      // nested object
      result[key] = deepClone2(obj[key], hash)
    } else {
      // primitive
      result[key] = obj[key]
    }
  })
  return result
}

/** 方法三 */
function deepClone3(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/** 方法四 */
function deepClone4(obj) {
  return structuredClone(obj) // 需要Node版本 @17.0.0
}

// var obj = {
//   name: "一百个Chocolate",
//   age: 18,
//   info: {
//     hobby: ["game", "music", { a: 1 }],
//     career: { teacher: 0, engineer: 1 },
//   },
// }
// const newObj = deepClone(obj)
// newObj.info.hobby[2].a = 123
// console.log(obj, newObj)
// console.log(obj.info.hobby, newObj.info.hobby)

/** 下面测试循环引用对象，自定义的deepClone可正常进行深拷贝 */
// const father = { name: "Bob", son: {} }
// const son = { name: "Eric", father: father }
// father.son = son
// const son2 = Object.assign({}, son)
// son2.name = "Tom"
// // const father_copy = JSON.parse(JSON.stringify(father)) // 出错
// const father_copy = deepClone(father)

// console.log(son2, father_copy)
// console.log(Object.entries(father))
// console.log(Object.entries(father_copy))

/** 引入测试函数 */
const { testQueue } = require("../testLog.js")
const randomArray = require("../randomArray.js")

const rndArr = randomArray(1, 100, 100000)

testQueue([deepClone, deepClone2, deepClone3, deepClone4], [rndArr])
