const http = require("http")

// 1.创建一个服务器实例对象
const server = http.createServer()
// 2.注册请求监听
server.on("request", (req, res) => {
  // 告知浏览器返回的数据类型和字符集
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  })
  if (req.url.startsWith("/login")) {
    res.end("登录")
  } else if (req.url.startsWith("/index")) {
    res.end("首页")
  } else {
    res.end("web服务器测试") // 结束本次请求并返回数据
  }
})
// 3.指定监听的端口
server.listen(3030)

// 简写
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
    })
    if (req.url.startsWith("/login")) {
      res.end("登录")
    } else if (req.url.startsWith("/index")) {
      // 通过write方法来返回数据，可以返回多次
      // write方法不能结束本次请求，所以还需要调用end方法来结束本次请求
      res.write("首页1")
      res.write("首页2")
      res.end()
    } else {
      res.end("web服务器测试") // 结束本次请求并返回数据
    }
  })
  .listen(3040)

// 浏览器输入下面的地址进行测试
// http://localhost:3030/
// http://localhost:3040/
