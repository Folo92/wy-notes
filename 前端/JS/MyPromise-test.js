const MyPromise = require("./MyPromise")
function calc(val) {
  return new MyPromise((resolve, reject) => {
    if (val > 0) {
      resolve(val)
    } else {
      reject(new Error())
    }
  })
}

calc(-5)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
