//生成随机数组,用于测试
function randomArray(min = 0, max = 100, n = 10) {
  // min最小值，max最大值
  let arr = []
  for (let i = 0; i < n; i++) arr.push(Math.floor(Math.random() * (max - min)) + min)
  return arr
}

module.exports = randomArray
