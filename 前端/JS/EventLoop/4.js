console.log(1)
async function fn() {
  console.log(2)
  await console.log(3)
  await console.log(4)
  await console.log("await之后的：", 11)
  await console.log("await之后的：", 22)
  await console.log("await之后的：", 33)
  await console.log("await之后的：", 44)
}
setTimeout(() => {
  console.log(5)
}, 0)
fn()
new Promise((resolve) => {
  console.log(6)
  resolve()
}).then(() => {
  console.log(7)
})
console.log(8)

/**
 * 执行结果为：
 * 1
 * 2
 * 3
 * 6
 * 8
 * 4
 * 7
 * await之后的： 11
 * await之后的： 22
 * await之后的： 33
 * await之后的： 44
 * 5
 */
/*
由此可见，代码执行的时候，只要碰见 await ，都会执行完当前的 await 之后，
把 await 后面的代码放到微任务队列里面。但是定时器里面的 5 是最后打印出来的，
可见当不断碰见 await ，把 await 之后的代码不断的放到微任务队列里面的时候，
代码执行顺序是会把微任务队列执行完毕，才会去执行宏任务队列里面的代码。
*/
