Promise.resolve()
  .then(() => {
    console.log(0)
    return Promise.resolve(4) // 顺延2位如果是return 4 则打印 0、1、4、2、3、5、6、7
  })
  .then((res) => console.log(res))

Promise.resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })
  .then(() => {
    console.log(7)
  })
/*
此题主要注意的是原生的Promise的then方法中，如果返回的是一个普通值，则返回的值会被立即调用并赋值给resolve函数，
如果返回的是一个thenable，则then方法将会被放入到微队列中执行，
如果返回的是一个Promise.resolve，则会再加一次微任务队列。
即微任务后移，Promise.resolve本身是执行then方法，而then方法本身是在微任务队列中执行，
同时return Promise.resolve时是将resolve调用的返回值 作为上级then中resolve的参数传递，
调用外层then方法时本身是在微队列里面，所以函数的执行顺序是要在微队列中下移两次。

*/
