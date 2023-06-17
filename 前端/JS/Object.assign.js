// Object.assign()主要用于对象合并，将源对象中的属性复制到目标对象中，返回目标对象。

var target = { name: "带你飞", age: 16 }
var source1 = { age: 18 }
var source2 = { age: 20, hobby: "打游戏" }
var result = Object.assign(target, source1, source2)
console.log(result, target === result) // {name: '带你飞', age: 20, hobby: '打游戏'} true

const arr = [{ name: "Tom", age: 16 }, { age: 20 }, { gender: "Male" }, "4", 5]
console.log(Object.assign({}, ...arr))
