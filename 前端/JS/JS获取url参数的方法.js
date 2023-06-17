// 1、循环
function getQuery() {
  const url = decodeURI(location.search) // 获取url中"?"符后的字串(包括问号)
  let query = {}
  if (url.indexOf("?") != -1) {
    const str = url.substr(1)
    const pairs = str.split("&")
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=")
      query[pair[0]] = pair[1]
    }
  }
  return query // 返回对象
}

function getQueryVariable(name) {
  const url = decodeURI(location.search) // 获取url中"?"符后的字串(包括问号)
  let query = {}
  if (url.indexOf("?") != -1) {
    const str = url.substr(1)
    const pairs = str.split("&")
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=")
      if (pair[0] === name) return pair[1] // 返回 参数值
    }
  }
  return false
}

// 2、正则表达式
function getQueryVariable(name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  const result = window.location.search.substr(1).match(reg)
  if (result != null) {
    return decodeURI(result[2])
  } else {
    return null
  }
}
