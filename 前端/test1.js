function getLocation() {
  if (navigator.geolocation) {
    //检测是否支持地理定位
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    return "Geolocation is not supported by this browser."
  }
}
function showPosition(position) {
  return "Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude
}

/** 组合函数并执行 */
function combineFn(fns, args) {
  fns.forEach((fn, index) => fn(...args[index]))
}

console.log("﹝﹞〔〕".charCodeAt(3))

let currying = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...arguments) => {
      console.log("args:", args, "arguments:", arguments)
      return currying(fn, ...args, ...arguments)
    }
  } else {
    return fn(...args)
  }
}
// let currying = (fn, ...args) =>
//             fn.length > args.length ?
//             (...arguments) => currying(fn, ...args, ...arguments) :
//             fn(...args)

let addSum = (a, b, c) => a + b + c
let add = currying(addSum)
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1, 2, 3))
