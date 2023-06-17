function deepCopy(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj // primitives
  if (hash.has(obj)) return hash.get(obj) // cyclic reference
  const result = Array.isArray(obj) ? [] : {}
  hash.set(obj, result) // save the cloned object to the hash
  Object.keys(obj).forEach((key) => {
    if (Object(obj[key]) === obj[key]) {
      // nested object
      result[key] = deepCopy(obj[key], hash)
    } else {
      // primitive
      result[key] = obj[key]
    }
  })
  return result
}

let obj1 = { 1: {}, 2: "aaa" }
let obj2 = { 1: {}, 2: "bbb" }
obj1[1] = obj2
obj2[1] = obj1
let obj3 = Object.assign({}, obj1)
// let obj4 = JSON.parse(JSON.stringify(test))
let obj5 = deepCopy(obj1)

console.log(obj5)
