function binarySearch(arr, target) {
  arr.sort((a, b) => a - b)
  if (!arr.length) return -1 // 考虑边界值
  if (arr.length === 1) return arr[0] === target ? 0 : -1 //只有一位无需进入循环
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    // let mid = Math.floor((start + end) / 2) //取中位数，可能除不尽向下取整
    let mid = (start + end) >> 1 //取中位数，可能除不尽向下取整
    if (arr[mid] === target) {
      return mid
    } else if (target > arr[mid]) {
      // 若目标值大于中位值
      start = mid + 1 //则说明目标值在更右侧，将初始下标右移至中位数右侧，再次循环
    } else {
      // 若目标值小于中位值
      end = mid - 1 //则说明目标值在更左侧，将结束下标左移至中位数左侧，再次循环
    }
  }
  return -1
}

const randomArray = require("../randomArray.js")

const arr = randomArray(1, 10, 10)
arr.sort((a, b) => a - b)
console.log(arr)
console.log(binarySearch(arr, 5))
