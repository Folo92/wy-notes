/*
  题目：给定n天股价，问只能买入卖出各一次的情况下，求最大盈利额（时间复杂度要求为O(n)）
  输入：[7,1,2,3,4,6,5]    周二以1元买入，周六以6元卖出能够获取最大利润5元
  输出：5
  输入：[7,6,5,4,3,2,1]    股价持续走低，无论怎么买都会亏本，所以盈利额为0
  输出：0
*/

// function maxProfit(arr){
// 	let profit=0
// 	for(let i=0;i<arr.length-1;i++){
// 		for(let j=i+1;j<arr.length;j++){
// 			if(profit<arr[j]-arr[i]) profit=arr[j]-arr[i]
// 		}
// 	}
// }

function maxProfit(arr) {
  let profit = 0
  let minPrice = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) minPrice = arr[i]
    else if (arr[i] - minPrice > profit) profit = arr[i] - minPrice
  }
  return profit
}

//const arr=[7,1,2,3,4,6,5]
//const arr=[7,6,16,2,3,4,6,5,1,8]
import { randomArray } from "../randomArray.js"
const arr = randomArray(1, 100, 20)
console.log(arr)
console.log(maxProfit(arr))
