/**
 * 生成随机数组
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @param {number} n 生成数量
 * @returns 随机数组
 */
function randomArray(min, max, n) {
  // min最小值，max最大值
  let arr = []
  for (let i = 0; i < n; i++) arr.push(Math.floor(Math.random() * (max - min)) + min)
  return arr
}

module.exports = randomArray
