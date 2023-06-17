/* 函数柯里化
1.返回一个新的函数
2.递归收集所有后置参数
3.最后调用普通函数
*/

function curry(fn) {
  //返回一个新的函数以便接收下一个参数
  return function curried(...args) {
    //判断参数是否已经收集全了
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs))
      }
    }
  }
}

//案例
function calculatePrice(price, taxRate, discount) {
  return price * (1 + taxRate) * (1 - discount)
}

function curriedCalculatePrice(price) {
  return function (taxRate) {
    return function (discount) {
      return price * (1 + taxRate) * (1 - discount)
    }
  }
}
const calculatePriceInUS = curriedCalculatePrice(100)
const calculatePriceInUK = curriedCalculatePrice(100)
const priceInUS = calculatePriceInUS(0.08)(0.1) // 97.2
const priceInUK = calculatePriceInUK(0.2)(0.05) // 102

//把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数
//并且返回接受余下的参数且返回结果的新函数
function curryIt(fn) {
  var length = fn.length,
    args = []
  var result = function (arg) {
    args.push(arg)
    length--
    if (length <= 0) {
      console.log(args.length)
      return fn.apply(this, args)
    } else {
      console.log(args.length)
      return result
    }
  }
  return result
}

const testFunc = (a, b, c) => {
  console.log(a)
  console.log(b)
  console.log(c)
}

const newFunc = curryIt(testFunc)
newFunc(1)
console.log(newFunc.length)
