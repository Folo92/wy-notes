//接受两个参数分别为字符串、子字符串，要求返回子字符串在字符串中出现的频次。
const _searchStrIndexOf = (str, target) => {
  let count = -1
  let index = -1
  do {
    index = str.indexOf(target, index + 1)
    count++
  } while (index > -1)
  return count
}
console.log(_searchStrIndexOf("aaaaa", "aaa"))
