//返回参数数字的千分位分隔符字符串
function _comma(number) {
  let part = number.toString().split(".")
  let prefix = ""
  let commaStr = ""
  let tmpArr = []
  if (part[0][0] === "-") {
    prefix = "-"
    part[0] = part[0].slice(1)
  }
  let len = part[0].length
  for (let i = 0; i < len / 3; i++) {
    tmpArr.unshift(part[0].slice(Math.max(len - i * 3 - 3, 0), len - i * 3))
  }
  commaStr = tmpArr.join(",")
  if (part.length > 1) {
    tmpArr = []
    len = part[1].length
    for (let i = 0; i < len / 3; i++) {
      tmpArr.push(part[1].slice(i * 3, i * 3 + 3))
    }
    commaStr += "." + tmpArr.join(",")
  }
  return prefix + commaStr
}
const num = -1234567.98656
console.log(_comma(num))
