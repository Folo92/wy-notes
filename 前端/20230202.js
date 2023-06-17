//阿里面试题
var length = 1
function fn() {
  console.log(this.length)
}
var obj = {
  length: 100,
  action: function (callback) {
    callback()
    arguments[0]()
  },
}
var arr = [1, 2, 3, 4]
obj.action(fn, ...arr)
