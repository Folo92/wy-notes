/**NodeJS测试 */

// console.log(__dirname)
// console.log(__filename)
// let obj = {
//   //模块中的业务逻辑代码
// }
// ;(function () {
//   //模块中的业务逻辑代码
//   window.xxx = "xxx"
// })()

// let buf1 = Buffer.alloc(5, 16)
// let buf2 = Buffer.from("abc")
// console.log(buf1, buf2) // 注意点: 通过console.log()输出Buffer会自动将存储的内容转换成16进制再输出

// const { sleep } = require("../Utils/index")

const path = require("path")
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))
// console.log(path.sep)
// console.log(path.delimiter)
// console.log(path.isAbsolute("./test/NodeJS"))
// console.log(path.parse(__filename))
// console.log(path.join("/a/b", "c")) // 输出 \a\b\c
// console.log(path.join("/a/b", "/c")) // 输出 \a\b\c
// console.log(path.join("/a/b", "c", "../")) // 输出 \a\b\
// console.log(path.join("/a/b", "c", "../", "d")) // 输出 \a\b\d\
// console.log(path.relative("/a/b/test/111", "/a/b/impl/222")) // 输出 ..\..\impl\222
// console.log(path.resolve("/a/b/test/", "./111.js")) // 输出 d:\a\b\test\111.js
// console.log(path.resolve("/a/b/test/", "../111.js")) // 输出 d:\a\b\111.js
// console.log(path.resolve("/a/b/test/", "/111.js")) // 输出 d:\111.js

const fs = require("fs")
// fs.stat(__filename, function (err, stats) {
//   console.log(stats)
//   if (stats.isFile()) {
//     console.log("当前路径对应的是一个文件")
//   } else if (stats.isDirectory()) {
//     console.log("当前路径对应的是一个文件夹")
//   }
// })
// const stats = fs.statSync(__filename)
// console.log(stats)

// fs.readFile(__filename, "utf-8", function (err, data) {
//   if (err) throw new Error("读取文件失败")
//   console.log(data)
// })
// const data = fs.readFileSync(__filename, "utf-8")
// console.log(data)

// const filePath = path.join(__dirname, "test.txt")
// fs.writeFile(filePath, "writeFile Test", "utf-8", function (err) {
//   if (err) throw new Error("写入数据失败")
//   else console.log("写入数据成功")
// })
// const res = fs.writeFileSync(filePath, "writeFileSync Test", "utf-8")
// console.log(res)

// const filePath = path.join(__dirname, "test.txt")
// fs.appendFile(filePath, "appendFile Test\r\n", "utf-8", function (err) {
//   if (err) throw new Error("追加数据失败")
//   else console.log("追加数据成功")
// })
// const res = fs.appendFileSync(filePath, "appendFileSync Test\r\n", "utf-8")
// console.log(res)

// // 1.拼接读取的路径
// const filePath = path.join(__dirname, "test.txt")
// // 2.创建一个读取流
// const readStream = fs.createReadStream(filePath, { encoding: "utf8", highWaterMark: 1 })
// // 3.添加事件监听
// readStream.on("open", function () {
//   console.log("数据流和文件建立关系成功")
// })
// readStream.on("error", function () {
//   console.log("数据流和文件建立关系失败")
// })
// readStream.on("data", function (data) {
//   console.log("通过读取流从文件中读取到了数据", data)
// })
// readStream.on("close", function () {
//   console.log("数据流断开了和文件的关系，并且数据已经读取完毕了")
// })

// // 1.拼接读取的路径
// const filePath = path.join(__dirname, "test.txt")
// // 2.创建一个读取流
// const writeStream = fs.createWriteStream(filePath, { encoding: "utf8", highWaterMark: 1 })
// // 3.添加事件监听
// writeStream.on("open", function () {
//   console.log("数据流和文件建立关系成功")
// })
// writeStream.on("error", function () {
//   console.log("数据流和文件建立关系失败")
// })
// writeStream.on("close", function () {
//   console.log("数据流断开了和文件的关系")
// })
// let data = "This is a test for writeStream"
// let index = 0
// let timerId = setInterval(() => {
//   writeStream.write(data[index])
//   console.log("写入", data[index++])
//   if (index === data.length) {
//     clearInterval(timerId)
//     writeStream.end()
//   }
// }, 100)

// const readPath = path.join(__dirname, "test.txt")
// const writePath = path.join(__dirname, "test2.txt")
// const readStream = fs.createReadStream(readPath, { encoding: "utf8", highWaterMark: 1 })
// const writeStream = fs.createWriteStream(writePath, { encoding: "utf8", highWaterMark: 1 })
// readStream.on("open", function () {
//   console.log("读取流和文件建立关系成功")
// })
// readStream.on("error", function () {
//   console.log("读取流和文件建立关系失败")
// })
// readStream.on("data", function (data) {
//   writeStream.write(data)
//   console.log("通过读取流从文件中读取到了数据，并写入了新的文件", data)
// })
// readStream.on("close", function () {
//   writeStream.end()
//   console.log("读取流断开了和文件的关系")
// })
// writeStream.on("open", function () {
//   console.log("写入流和文件建立关系成功")
// })
// writeStream.on("error", function () {
//   console.log("写入流和文件建立关系失败")
// })
// writeStream.on("close", function () {
//   console.log("写入流断开了和文件的关系")
// })

// readStream.pipe(writeStream) //利用读取流的管道方法来快速的实现文件拷贝

const str = path.join(__dirname, "abc")
fs.mkdir(str, function (err) {
  if (err) console.log("创建目录失败")
  else console.log("创建目录成功")
})
fs.rmdir(str, function (err) {
  if (err) console.log("删除目录失败")
  else console.log("删除目录成功")
})
fs.readdir(__dirname, function (err, files) {
  if (err) {
    console.log("读取目录失败")
  } else {
    files.forEach((file) => {
      const filePath = path.join(__dirname, file)
      let stats = fs.statSync(filePath)
      if (stats.isFile()) {
        console.log("文件:", file)
      } else if (stats.isDirectory()) {
        console.log("目录:", file)
      }
    })
  }
})
