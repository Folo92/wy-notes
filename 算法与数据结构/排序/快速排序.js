//快速排序代码简化
const quickSort = (array) => {
  if (array.length <= 1) return array //递归终点
  let mid = array.splice(Math.floor(array.length / 2), 1) //抠出分界值
  let left = [],
    right = [] //定义左右数组
  for (let x of array) (x < mid ? left : right).push(x) //分配左右数组，小左大右
  return quickSort(left).concat(mid, quickSort(right)) //递归调用，合并返回，左+分界+右
}

//const arr = [0, -1, 1, -2, 2];
import { randomArray } from "../../randomArray.js"
const arr = randomArray(1, 100, 20)
console.log(arr)
console.log(quickSort(arr).join(" "))
