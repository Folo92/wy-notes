async function test() {
  return 1 // async的函数会在这里帮我们隐士使用Promise.resolve(1)
}
// 等价于下面的代码
function test() {
  return new Promise(function (resolve, reject) {
    resolve(1)
  })
}
// 可见async只是一个语法糖，只是帮助我们返回一个Promise而已
