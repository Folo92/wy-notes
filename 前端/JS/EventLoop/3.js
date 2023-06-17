console.log(1)
async function fn() {
  console.log(2)
  new Promise((resolve) => {
    resolve()
  }).then(() => {
    console.log("XXX")
  })
  await console.log(3)
  console.log(4)
}
fn()
new Promise((resolve) => {
  console.log(6)
  resolve()
}).then(() => {
  console.log(7)
})
console.log(8)

// 执行结果为：1 2 3 6 8 XXX 4 7
/*
前面的 1 2 3 6 8 不再解析，重点是后面的 XXX 4 7，由此可见 await console.log(3) 之后的代码 console.log(4) 是被放入到微任务队列了，
代码 console.log("XXX") 也是被压入微任务队列了，console.log("XXX")是在 console.log(4) 之前，
所以当同步任务执行完毕之后，执行微任务队列代码的时候，优先打印出来的是 XXX ，然后才是 4 。
*/
