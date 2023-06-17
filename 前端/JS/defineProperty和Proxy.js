let obj1 = {}
let value = null
Object.defineProperty(obj1, "num", {
  enumerable: true, //是否可枚举
  // writable: true, //是否可写。writable和set是同一个作用，只能用一个。
  configurable: true, //是否可配置
  get: function () {
    console.log("执行了 get 操作")
    return value
  },
  set: function (newValue) {
    console.log("执行了 set 操作")
    value = newValue
  },
})
obj1.num = 2 // 执行了 set 操作
console.log("obj1.value", obj1.num) // 执行了 get 操作 // 1

let obj2 = { a: 1 }
let proxyObj = new Proxy(obj2, {
  get: function (target, prop) {
    return prop in target ? target[prop] : undefined
  },
  set: function (target, prop, value) {
    target[prop] = value
  },
})
console.log(proxyObj.a) // 1
console.log(proxyObj.b) // 0
proxyObj.a = 666
console.log(proxyObj.a) // 666
