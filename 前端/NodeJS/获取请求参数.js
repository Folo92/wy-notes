const http = require("http")
const url = require("url")
const queryString = require("querystring")

// 获取 GET 请求参数
const str = "http://localhost:3030/login?username=admin&password=123456"
const obj = url.parse(str, true)
console.log(obj)

// 获取 POST 请求参数
const server = http.createServer()
server.on("request", (req, res) => {
  let params = ""
  //注意点: 在NODEJS中, POST请求的参数我们不能一次性拿到，必须分批获取
  req.on("data", (chunk) => {
    params += chunk
  })
  req.on("end", () => {
    let obj = queryString.parse(params)
    console.log(obj)
    res.end(obj.userName + "," + obj.password)
  })
})
server.listen(3030)
