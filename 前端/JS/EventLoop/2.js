async function async1() {
  console.log("async1 start")
  await async2()
  console.log("async1 end")
}

async function async2() {
  console.log("async2")
}
console.log("script start")
setTimeout(function () {
  console.log("setTimeout")
}, 0)
async1()
new Promise(function (resolve) {
  console.log("promise1")
  resolve()
}).then(function () {
  console.log("promise2")
})
console.log("script end")

// 首先执行同步代码，console.log( 'script start' )
// 遇到setTimeout,会被推入宏任务队列
// 执行async1(), 它也是同步的，只是返回值是Promise，在内部首先执行console.log( 'async1 start' )
// 然后执行async2(), 然后会打印console.log( 'async2' )
// 从右到左会执行, 当遇到await的时候，阻塞后面的代码，去外部执行同步代码
// 进入new Promise,打印console.log( 'promise1' )
// 将.then放入事件循环的微任务队列
// 继续执行，打印console.log( 'script end' )
// 外部同步代码执行完毕，接着回到async1()内部, 继续执行 await async2() 后面的代码，执行 console.log( 'async1 end' ) ，所以打印出 async1 end 。（个人理解：async/await本质上也是Promise，也是属于微任务的，所以当遇到await的时候，await后面的代码被阻塞了，应该也是被放到微任务队列了，当同步代码执行完毕之后，然后去执行微任务队列的代码，执行微任务队列的代码的时候，也是按照被压入微任务队列的顺序执行的）
// 执行微任务队列的代码, 打印 console.log( 'promise2' )
// 进入第二次事件循环，执行宏任务队列, 打印console.log( 'setTimeout' )
/**
 * 执行结果为：
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */
