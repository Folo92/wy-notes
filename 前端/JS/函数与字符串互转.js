function sum(a, b) {
  return a + b
}

const sumStr = sum.toString() // 函数转为字符串

// 方法一(注意：eval可以解析任何字符串，不安全，尽量不要使用)
const newSum = eval("(false || " + sumStr + ")") // 字符串转为函数
// 方法二
const newSum2 = new Function("a", "b", "return a + b") // 字符串转为函数

console.log(newSum(2, 5)) // 7
console.log(newSum2(2, 5)) // 7
