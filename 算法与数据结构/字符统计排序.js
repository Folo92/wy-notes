// 输入一个只包含小写英文字母和数字的字符串，按照不同字符统计个数由多到少输出统计结果，
// 如果统计的个数相同，则按照ASCII码由小到大排序输出。

//方法一
function sortCharsA(str) {
  let obj = {}
  let res = ""
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1
  }
  let arr = Object.entries(obj) //返回一个给定对象自身可枚举属性的键值对数组
  //console.log(arr);
  arr.sort((a, b) => {
    if (a[1] == b[1]) return a[0].charCodeAt() - b[0].charCodeAt()
    else return b[1] - a[1]
  })
  for (let item of arr) res += item[0]
  return res
}

//方法二
function sortCharsB(str) {
  //
  const chars = [...new Set(str.split(""))]
  const tempArr = chars.map((char) => {
    return char.concat(str.split("").filter((item) => item == char).length)
  })
  tempArr.sort((a, b) => {
    if (a.slice(1) == b.slice(1)) return a[0].charCodeAt() - b[0].charCodeAt()
    else return parseInt(b.slice(1)) - parseInt(a.slice(1))
  })
  return tempArr.map((item) => item[0]).join("")
}

let str = "6uym66c0l609vb6mg75q90zyf9d4styi257709"
console.log(sortCharsA(str))
console.log(sortCharsB(str))
