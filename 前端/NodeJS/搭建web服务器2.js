const http = require("http")
const path = require("path")
const fs = require("fs")
const mime = require("./mime.json")

const server = http.createServer()
server.on("request", (req, res) => {
  readFile(req, res)
})
server.listen(3030)

function readFile(req, res) {
  const filePath = path.join(__dirname, "www", req.url)
  const extName = path.extname(filePath)
  let type = mime[extName]
  if (type.startsWith("text")) type += "; charset=utf-8"
  res.writeHead(200, {
    "Content-Type": type,
  })
  // 注意点:
  // 1.加载图片等非文本资源时encoding不能为utf8
  // 2.如果服务器响应数据时没有指定响应头，那么在有的浏览器上，响应的数据可能无法显示
  fs.readFile(filePath, function (err, data) {
    if (err) res.end("Server error: " + err)
    res.end(data)
  })
}

// 浏览器输入下面的地址进行测试
// http://localhost:3030/
