// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]

// 提示：

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109

var twoSum = function (nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j] && result.indexOf(i) == -1 && result.indexOf(j) == -1) {
        result.push(i, j)
      }
    }
  }
  return result
}

var twoSum2 = function (nums, target) {
  let result = []
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) continue
    const complement = target - nums[i]
    if (complement in hash) {
      result.push(hash[complement], i)
    }
    hash[nums[i]] = i
  }
  return result
}

// const nums = [3, 3, 2, 4, 5, 3, 2, 1]
// const target = 6
const nums = [3, 3, 2, 4, 5, 3, 2, 1, 6]
const target = 7
console.log(twoSum(nums, target))
console.log(twoSum2(nums, target))

// let student = { name: "Tom", age: 20 }
// let student2 = new Proxy(student, {
//   get() {
//     student.gender = "male"
//     return student
//   },
//   set(val) {
//     student.name = val
//     student.age = 10
//   },
// })
// student2.name = "Bob"
// console.log(student2.gender)
