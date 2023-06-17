//1
console.log("1") //2
setTimeout(function () {
  console.log("2")
  process.nextTick(function () {
    console.log("3")
  })
  new Promise(function (resolve) {
    console.log("4")
    resolve()
  }).then(function () {
    console.log("5")
  })
})
//3
process.nextTick(function () {
  console.log("6")
})
//4
new Promise(function (resolve) {
  console.log("7")
  resolve()
}).then(function () {
  console.log("8")
})
//5
setTimeout(function () {
  console.log("9")
  process.nextTick(function () {
    console.log("10")
  })
  new Promise(function (resolve) {
    console.log("11")
    resolve()
  }).then(function () {
    console.log("12")
  })
})

// 先执行1 输出1
// 执行到2，把setTimeout放入异步的任务队列中（宏任务）
// 执行到3，把process.nextTick放入异步任务队列中（微任务）
// 执行到4，上面提到promise里面是同步任务，所以输出7，再将then放入异步任务队列中（微任务）
// 执行到5，同2
// 上面的同步任务全部完成，开始进行异步任务
// 先执行微任务，发现里面有两个微任务，分别是3，4压入的，所以输出6 8
// 再执行一个宏任务，也就是第一个setTimeout
// 先输出2，把process.nextTick放入微任务中，再如上promise先输出4，再将then放入微任务中
// 再执行所以微任务输出输出3 5
// 同样的，再执行一个宏任务setTImeout2，输出9 11 在执行微任务输出10 12
// 所以最好的顺序为：1 7 6 8 2 4 3 5 9 11 10 12
