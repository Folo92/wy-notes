/** 冒泡排序 */
function bubbleSort(arr) {
  const len = arr.length
  if (len >= 1) {
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1]
          arr[j + 1] = arr[j]
          arr[j] = temp
        }
      }
    }
  }
  return arr
}

/** 冒泡排序优化版(结果不正确，待修改) */
function bubbleSort2Wrong(arr) {
  let len = arr.length
  let lastExchangeIndex = 0
  //无序数列的边界，每次比较只需要比到这里为止
  let sortBorder = len - 1
  if (len >= 1) {
    for (let i = 0; i < len; i++) {
      //有序标记，每一轮的初始是true
      let isSorted = true
      for (let j = 0; j < sortBorder - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1]
          arr[j + 1] = arr[j]
          arr[j] = temp
          //有元素交换，所以不是有序，标记变为false
          isSorted = false
          //把无序数列的边界更新为最后一次交换元素的位置
          lastExchangeIndex = j
        }
      }
      sortBorder = lastExchangeIndex
      if (isSorted) {
        //有序,跳出循环
        break
      }
    }
  }
  return arr
}

/** 选择排序 */
function selectionSort(arr) {
  const len = arr.length
  let minIndex, temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        minIndex = j
        // 将最小数的索引保存
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

/** 选择排序优化版 */
function selectionSort2(arr) {
  const len = arr.length
  let left = 0
  let right = len - 1
  while (left < right) {
    let max = left //记录无序区最大元素下标
    let min = left //记录无序区最小元素下标
    let j = 0
    for (j = left + 1; j <= right; j++) {
      //找最大元素下标
      if (arr[j] < arr[min]) {
        min = j
      }
      //找最小元素下标
      if (arr[j] > arr[max]) {
        max = j
      }
    }
    //最小值如果是第一个则没有必要交换
    if (min != left) {
      let tmp = arr[left]
      arr[left] = arr[min]
      arr[min] = tmp
    }
    //这里很重要，如果最大元素下标是left,前面已经和最小元素交换了，此时最大元素下标应该是min
    if (max == left) {
      max = min
    }
    //最大值如果是最后一个则没必要交换
    if (max != right) {
      let tmp = arr[right]
      arr[right] = arr[max]
      arr[max] = tmp
    }
    left++
    right--
  }
  return arr
}

/** 插入排序 */
function insertSort(arr) {
  const len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

/** 快速排序 */
function quickSort(arr, left, right) {
  let partitionIndex,
    lt = typeof left != "number" ? 0 : left,
    rt = typeof right != "number" ? arr.length - 1 : right
  if (lt < rt) {
    partitionIndex = partition(arr, lt, rt)
    quickSort(arr, lt, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, rt)
  }
  return arr
}

function partition(arr, left, right) {
  // 分区操作
  let index = left + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[left]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, left, index - 1)
  return index - 1
}

// function partition(arr, left, right) {
//   // 分区操作
//   let pivot = left,
//     // 设定基准值（pivot）
//     index = pivot + 1
//   for (let i = index; i <= right; i++) {
//     if (arr[i] < arr[pivot]) {
//       swap(arr, i, index)
//       index++
//     }
//   }
//   swap(arr, pivot, index - 1)
//   return index - 1
// }

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/** 快速排序2 */
const quickSort2 = (array) => {
  if (array.length <= 1) return array //递归终点
  let mid = array.splice(Math.floor(array.length / 2), 1) //抠出分界值
  let left = [],
    right = [] //定义左右数组
  for (let x of array) (x < mid ? left : right).push(x) //分配左右数组，小左大右
  return quickSort2(left).concat(mid, quickSort2(right)) //递归调用，合并返回，左+分界+右
}

/** 归并排序 */
function mergeSort(arr) {
  // 采用自上而下的递归方法
  const len = arr.length
  if (len < 2) {
    return arr
  }
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

/** ES6内置排序 */
function sort(arr) {
  return arr.sort((a, b) => a - b)
}

/** 引入测试函数 */
const { testLog, testQueue } = require("../testLog.js")
const randomArray = require("../randomArray.js")

// const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
const rndArr = randomArray(1, 100, 100)

// let results = []
// results.push(testLog(bubbleSort, [rndArr]))
// // results.push(testLog(bubbleSort2Wrong, [rndArr]))
// results.push(testLog(selectionSort, [rndArr]))
// results.push(testLog(selectionSort2, [rndArr]))
// results.push(testLog(insertSort, [rndArr]))
// results.push(testLog(quickSort, [rndArr]))
// results.push(testLog(quickSort2, [rndArr]))
// results.push(testLog(mergeSort, [rndArr]))
// console.table(results.sort((a, b) => a.time_μs - b.time_μs))

testQueue(
  [bubbleSort, selectionSort, selectionSort2, insertSort, quickSort, quickSort2, mergeSort, sort],
  [rndArr]
)

/** 总结
 * 数组长度100000测试结果如下（时间单位 ms）：
 * 内置方法   sort            16
 * 快速排序   quickSort       36
 * 归并排序   mergeSort       544
 * 插入排序   insertSort      1619
 * 选择排序   selectionSort   3662
 * 冒泡排序   bubbleSort      11619
 */
