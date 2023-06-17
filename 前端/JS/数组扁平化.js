/**
 * @description 实现数组扁平化（forEach + 递归）
 * @param {Array} arr 数组
 */
const flatten1 = (arr) => {
  let result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) result = result.concat(flatten1(item))
    else result.push(item)
  })
  return result
}

/**
 * @description 实现数组扁平化（reduce + 递归）
 * @param {Array} arr 数组
 */
const flatten2 = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur)
  }, [])
}

/**
 * @description 实现数组扁平化（栈思想）
 * @param {Array} arr 数组
 */
const flatten3 = (arr) => {
  const result = []
  const stack = arr.slice()
  while (stack.length !== 0) {
    const val = stack.pop()
    if (Array.isArray(val)) {
      stack.push(...val)
    } else {
      result.unshift(val)
    }
  }
  return result
}

/**
 * @description 实现数组扁平化（reduce + 递归）
 * @param {Array} arr 数组
 * @param {number} num 拍平的层数（默认全部拍平）
 */
const flatten4 = (arr, num = Infinity) => {
  return num > 0
    ? arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten4(cur, num - 1) : cur)
      }, [])
    : arr.slice()
}

Array.prototype.flatten = function (num) {
  return flatten4(this, num)
}

const array = [1, 2, [3, 4], [5, [6, 7], [8, [9, 10]]]]

console.log(array.flat()) //es6自带方法实现拍平，默认拍平一层
console.log(array.flat(Infinity)) //es6自带方法实现全部拍平
console.log(array.flatten())
