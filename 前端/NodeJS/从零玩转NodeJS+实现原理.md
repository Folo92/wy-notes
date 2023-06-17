[TOC]

# 前言

NodeJS 文档： <https://nodejs.cn/api/>
视频链接：<https://www.bilibili.com/video/BV1xL411U7Nh?p=6&vd_source=86a110b2417d72a80b8234f80fdbf868>

# 01 - NodeJS 简介(理解)

## 1. 什么是 Node.js?

Node.js 是一个基于"Chrome V8 引擎”的 JavaScript “运行环境"

## 2. 什么是 V8 引擎?

V8 引擎是一款专门解释和执行 JS 代码的虚拟机，任何程序只要集成了 V8 引擎都可以执行 JS 代码

例如:

将 V8 引警嵌入到浏览器中，那么我们写的 JavaScript 代码就会被浏览器所执行:

将 V8 引擎嵌入到 NodeJS 中，那么我们写的 JavaScript 代码就会被 NodeJS 所执行。

## 3. NodeJS 是一个运行环境

NodeJS 不是一门编程语言，NodeJS 是一个运行环境。

由于这个运行环境集成了 V8 引擎，所以在这个运行环境下可以运行我们编写的 JS 代码。

这个运行环境最大的特点就是提供了操作"操作系统底层的 API"。

通过这些底层 API 我们可以编写出网页中无法实现的功能(诸如: 打包工具，网站服务器等)。

# 02 - NodeJS 运行环境搭建(理解)

## 搭建方式一:

1.  官网下载.msi 安装包: <https://nodejs.org/zh-cn/>
2.  全程下一步
3.  在命令行工具中输入 node -v

## 搭建方式二:

1.  官网下载.zip 安装包: <https://nodejs.org/zh-cn/>
2.  解压下载好的安装包
3.  在高级系统设置中手动配置环境变量 4.在命令行工具中输入 node -v

## 搭建方式三(借助 NVM 安装多个版本 NodeJS)

1.  下载 NVM: <https://github.com/coreybutler/nvm-windows>
2.  在 D 盘创建 dev 目录
3.  在 Dev 目中中创建两个子目录 nvm 和 nodejs，并且把 nvm 包解压进去 nvm 目录中
4.  在 install.cmd 文件上面右键选择\[以管理员身份运行]
    在终端中直接按下回车
    将弹出的文件另存为到 NVM 目录
    打开 settings.txt 文件，修改
    root: D:\Developer Dev\NVM
    path: D: Developer Dev Node
5.  配置环境变量
    NVM HOME: D:\Developer\Dev\NVM
    NVM SYMLINK: D:\Developer\Dev\Node
    在 Path 中添加 %NVM_HOME% %NVM_SYMLINK%
6.  在命令行工具中输入 nvm version

# 03 - NodeJS 执行 JS 代码(掌握)

## Node 程序执行方式

1.  由于浏览器中集成了 V8 引擎，所以可以解释执行 JS 代码

- 可以直接在浏览器控制台中执行 JS 代码
- 可以在浏览器中执行 JS 文件中的 JS 代码

1.  由于 NodeJS 中也集成了 V8 引擎，所以可以解释执行 JS 代码

- 可以直接在命令行工具中编写执行 JS 代码(REPL -- Read Eval Print Loop:交互式解释器)，用 node 指令开始。
- 可以在命令行工具中执行 JS 文件中的 JS 代码。用 node 文件路径 执行。
- 在 IDE 中执行。

# 04 - Node 环境和浏览器环境执行 JS 代码的区别(掌握)

NodeJS 环境和浏览器环境一样都是一个 JS 的运行环境，都可以执行 JS 代码。但是由于宿主不同所以特点也有所不同。

## 1. 内置对象不同

- 浏览器环境中提供了 window 全局对象
- NodeJS 环境中的全局对象不叫 window，叫 **global**

## 2. this 默认指向不同

- 浏览器环境中全局 this 默认指向 window
- NodeJS 环境中全局 this 默认指向 **空对象{}**

## 3. API 不同

- 浏览器环境中提供了操作节点的 DOM 相关 API 和操作浏览器的 BOM 相关 API
- NodeJS 环境中没有 HTML 节点也没有浏览器，所以 NodeJS 环境中没有 DOM/BOM

# 05 - Node 全局属性和方法(掌握)

global 全局对象不需要 require()导入

- \_\_dirname
- \_\_filename
- exports
- module
- require()
- ...

NodeJS 文档：<https://nodejs.cn/api/>

# 06 - Node 自定义模块(掌握)

## 1. 浏览器开发中的模块

在浏览器开发中为了避免命名冲突，方便维护等等。
我们采用类或者立即执行函数的方式来封装 JS 代码，来避免命名冲突和提升代码的维护性。
其实这里的一个类或者一个立即执行函数就是浏览器开发中一个模块

```javascript
let obj = {
  //模块中的业务逻辑代码
}
;(function () {
  //模块中的业务逻辑代码
  window.xxx = xxx
})()
```

存在的问题:没有标准没有规范

## 2 NodeJS 开发中的模块

NodeJS 采用 CommonJS 规范实现了模块系统

## 3 CommonJS 规范

Common.JS 规范规定了如何定义一个模块，如何暴露(导出)模块中的变量函数，以及如何使用定义好的模块。

- 在 CommonJS 规范中一个文件就是一个模块
- 在 CommonJS 规范中每个文件中的变量函数都是私有的，对其他文件不可见的
- 在 CommonJS 规范中每个文件中的变量函数必须通过 exports 暴露(导出)之后其它文件才可以使用
- 在 CommonJS 规范中想要使用其它文件暴露的变量函数必须通过 require()导入模块才可以使用
-

# 07 - Node 模块导出数据几种方式(掌握)

## NodeJS 导出模块中的变量函数有三种方式

- 通过 exports.xxx = xxx 导出
- 通过 module.exports.xxx = xxx 导出
- 通过 global.xxx = xxx 导出
- 注意点:
  无论通过哪种方式导出，使用时都需要先导入(require)才能使用。
  通过 global.xxx 方式导出不符合 CommonJS 规范，不推荐使用。

```js
let name = "abc"
function sum(a, b) {
  return a + b
}
// 方法一
exports.str = name
exports.fn = sum
// 方法二
module.exports.str = name
module.exports.fn = sum
// 方法三（不推荐）
global.str = name
global.fn = sum
```

# 08 - exports 和 module.exports 区别(掌握)

## exports 和 module.exports 区别

- exports 只能通过 exports.xxx 方式导出数据，不能直接赋值。
- module.exports 既可以通过 module.exports.xxx 方式导出数据，也可以直接赋值。
- 注意点:
  在企业开发中无论哪种方式都不要直接赋值，这个问题只会在面试中出现。

```js
function sum(a, b) {
  return a + b
}
// 方法一导出后require得到空对象
exports = sum
// 方法二导出后require可正常使用
module.exports = sum
```

# 09 - NodeJS-Require 注意点(掌握)

## 1. require 导入模块时可以不添加导入模块的类型

如果没有指定导入模块的类型，那么会依次查找.js .json .node 文件。
无论是三种类型中的哪一种，导入之后都会转换成 JS 对象返回给我们。

## 2. 导入自定义模块时必须指定路径

require 可以导入“自定义模块(文件模块)”、“系统模块(核心模块)”、“第三方模块”
导入“自定义模块”模块时前面必须加上路径。
导入“系统模块”和“第三方模块”是不用添加路径。

## 3. 导入“系统模块”和“第三方模块”时不用添加路径的原因

......

# 10 - Node 包和包管理简介(理解)

## 1. 什么是包?

前面说过在编写代码的时候尽量遵守单一原则,
也就是一个函数尽量只做一件事情。
例如: 读取数据函数/写入数据函数/生成随机数函数等等，
不要一个函数既读取数据又写入数据又生成随机数，
这样代码非常容易出错，也非常难以维护。

在模块化开发中也一样，在一个模块(一个文件中)尽量只完成一个特定的功能。
但是有些比较复杂的功能可能需要由多个模块组成，
例如: jQuery 选择器相关的代码在 A 模块，CSS 相关的代码在 B 模块，...
我们需要把这些模块组合在一起才是完成的 jQuery。
那么这个时候我们就需要一个东西来维护多个模块之间的关系。
这个维护多个模块之间关系的东西就是“包”。

简而言之:一个模块是一个单独的文件，一个包中可以有一个或多个模块

## 2. NodeJS 包的管理

在 NodeJS 中为了方便开发人员发布、安装和管理包，NodeJS 推出了一个包管理工具 NPM(Node Package Manager)
NPM 不需要我们单独安装，只要搭建好 NodeJS 环境就已经自动安装好了。
NPM 就相当于电脑上的”QQ 管家软件助手”，通过 NPM 我们可以快速找到我们需要的包，
可以快速安装我们需要的包，可以快速删除我们不想要的包等等。

# 11 - NodeJS-NPM 使用(掌握)

## 1. NPM 包安装方式

- 全局安装 (一般用于安装全局使用的工具，存储在全局 node_modules 中)
  npm install -g 包名 (默认安装最新版本)
  npm uninstall -g 包名
  npm update -g 包名(更新失败可以直接使用 install)
- 本地安装 (一般用于安装当前项目使用的包，存储在当前项目 node_modules 中)
  npm install 包名
  npm uninstall 包名
  npm update 包名

## 2. 初始化本地包

- 初始化 package.json 文件
  npm init
  npm init -y （-y 的含义：yes 的意思，在 init 的时候省去了敲回车的步骤）
- 安装 package.json 中配置的包
  npm i 所有的包都会被安装
  npm i -production 只安装 dependencies 中的包
- 安装指定的包
  npm install 包名 --save 用于开发环境
  npm install 包名 --save-dev 用于生产环境

包描述文件 package.json，定义了当前项目所需要的各种模块，以及项目的配置信息(比如名称、版本、许可证等元数据)。
npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
注意点: package.json 文件中，不能加入任何注释。

- dependencies: 生产环境包的依赖，一个关联数组，由包的名称和版本号组成。
- devDependencies: 开发环境包的依赖，一个关联数组，由包的名称和版本号组成。

1.  将项目拷贝给其它人，或者发布的时候，我们不会将 node_modules 也给别人，因为太大。
2.  因为有的包可能只在开发阶段需要，但是在上线阶段不需要，所以需要分开指定。

## 3. npm 其他命令

查看配置：npm config list

# 12 - NodeJS-NRM-CNPM 使用(理解)

## 1. 什么是 nrm?

由于 npm 默认回去国外下载资源，所以对于国内开发者来说下载会比较慢。
所以就有人写了一个 nrm 工具，允许你将资源下载地址从国外切换到国内。

- npm install -g nrm 安装 NRM
- nrm --version 查看是否安装成功
- npm ls 查看允许切换的资源地址
- npm use taobao 将下载地址切换到淘宝

PS:淘宝资源地址和国外的地址内容完全同步。淘宝镜像与官方同步频率目前为 10 分钟 一次，以保证尽量与国外同步。

## 2. 什么是 cnpm?

由于 npm 默认回去国外下载资源，所以对于国内开发者来说下载会比较慢。
cnpm 就是将下载源从国外切换到国内下载，只不过是将所有的指令从 npm 变为 cnpm 而已。

- npm install cnpm -g - registry=<https://registry.npm.taobao.org> 安装 CNPM
- cnpm -v 查看是否安装成功

使用方式同 npm，例如: npm install jquery 变成 cnpm install jquery 即可。

## 3. 推荐使用第一种方式，即用 nrm 换源

# 13 - NodeJS-Yarn 使用(理解)

## 1. 什么是 YARN

Yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具。
Yarn 是为了弥补 npm5.0 之前的一些缺陷而出现的。
注意点:
在 npm5.0 之前，yarn 的优势特别明显。但是现在 NPM 已经更新到 6.9.x 甚至 7.x 了，随着 NPM 的升级和优化，目前甚至超越了 Yarn，所以还是建议使用 NPM。

## 2. NPM 缺陷:

- npm install 的时候巨慢
  npm 是按照队列执行(串行)安装每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。
- 同一个项目，npm instal1 的时候无法保持一致性。
  “5.0.3”表示安装指定的 5.0.3 版本，
  “\~5.0.3”表示安装 5.0.X 中最新的版本，
  “^5.0.3”表示安装 5.X.X 中最新的版本
- 其他......

## 3. YARN 优点

- 速度快
  并行安装: 而 Yarn 是同步执行所有任务，提高了性能。
  离线模式: 如果之前已经安装过一个软件包，用 Yarn 再次安装时之间从缓存中获取，就不用像 npm 那样再从网络下载了。

- 安装版本统一:
  为了防止拉取到不同的版本，Yarn 有一个锁定文件(lock-file)记录了被确切安装上的模块的版本号。

- 其他......

## 4. YARN 安装

npm install -g yarn
yarn --version

## 5. YARN 使用

- 初始化包
  npm init -y
  yarn init -y

- 安装包
  npm install xxx --save
  yarn add xxx
  npm install xxx --save-dev
  yarn add xxx --dev

- 移除包
  npm uninstall xxx
  yarn remove xxx

- 更新包
  npm update xxx
  yarn upgrade xxx --latest

- 全局安装（移除和更新同理）
  npm install -g xxx
  yarn global add xxx

# 14 - NodeJS 核心 API-Buffer(掌握)

## 1. 什么是 Buffer

Buffer 是 NodeJS 全局对象上的一个类，是一个专门用于存储字节数据的类。
NodeJS 提供了操作计算机底层 API，而计算机底层只能识别 0 和 1，所以就提供了一个专门用于存储字节数据的类。

## 2. 如何创建一个 Buffer 对象

- 创建一个指定大小的 Buffer
  `Buffer.alloc(size[, fill[, encoding]])`
- 根据数组/字符串创建一个 Buffer 对象
  `Buffer.from(string[, encoding])`

(encoding 默认为 utf-8)

```js
let buf1 = Buffer.alloc(5, 16)
console.log(buf1) // <Buffer 10 10 10>
let buf2 = Buffer.from("abc")
console.log(buf2) // <Buffer 61 62 63>
```

注意点: 通过 console.log()输出 Buffer 会自动转换成 16 进制再输出

## 3. Buffer 对象的本质

Buffer 对象的本质就是一个数组。

## 4. Buffer 实例方法

- 将二进制数据转换成字符串
  `buf.toString()`
  返回：\<string> 转换后的字符串数据

- 往 Buffer 中写入数据
  `buf.write(string[, offset[, length]][, encoding])`
  string \<string> 要写入 buf 的字符串。
  offset \<integer> 开始写入 string 之前要跳过的字节数。默认值: 0。
  length \<integer> 要写入的字节数。默认值: buf.length - offset。
  encoding \<string> string 的字符编码。默认值:’utf8'。
  返回：\<integer> 已写入的字节数

- 从指定位置截取新 Buffer
  `buf.slice([start[, end]])`
  start \<integer> 新 Buffer 开始的位置。默认值: 0。
  end \<integer> 新 Buffer 结束的位置 (不包含)。

## 5. Buffer 静态方法

- 检查是否支持某种编码格式
  `Buffer.isEncoding(encoding)`

- 检查是否是 Buffer 类型对象
  `Buffer.isBuffer(obj)`

- 获取 Buffer 实际字节长度
  `Buffer.byteLength(string[, encoding])`
  注意点:一个汉字占用三个字节

- 合并 Buffer 中的数据
  `Buffer.concat(list[, totalLength])`

# 15 - NodeJS 核心 API-path 常用方法(掌握)

path 不在 global 上，要先引入再使用。
`let path = require("path")`
导入系统模块，不用输入路径，直接输入模块名称。

- **path.basename()** 用于获取路径的最后一个组成部分

- **path.dirname()** 用于获取路径中的目录，也就是除最后一个部分以外的内容

- **path.extname()** 用于获取路径中最后一个组成部分的扩展名

- **path.isAbsolute()** 用于判断路径是否是一个绝对路名

- **path.sep** 用于获取当前操作系统中路径的分隔符
  Linux 操作系统是 左斜杠 /
  Windows 操作系统是 右斜杠 \\

- **path.delimiter** 用于获取当前操作系统环境变量的分隔符
  Linux 操作系统是 冒号 :
  Windows 操作系统是 分号 ;

- **path.parse(path)** 用于将路径转换成对象

- **path.format(pathOb,ject)** 用于将对象转换成路径

- **path.join(\[..paths])** 用于拼接路径
  如果参数中有../，那么会自动根据前面的参数生成的路径，去到上一级。

- **path.normalize(path)** 用于规范化路径

- **path.relative(from, to)** 用于计算相对路径

- **path.resolve(\[...paths])** 用于解析路径
  注意点:如果后面的参数是绝对路径，那么前面的参数会被忽略。

- 示例代码

```js
const path = require("path")

console.log(__dirname) // d:\NodeJS
console.log(__filename) // d:\NodeJS\test.js

console.log(path.basename(__dirname)) // NodeJS
console.log(path.basename(__filename)) // test.js
console.log(path.dirname(__filename)) // d:\NodeJS
console.log(path.extname(__filename)) // .js
console.log(path.sep) // \
console.log(path.delimiter) // ;

console.log(path.parse(__filename))
/* {
  root: 'd:\',
  dir: 'd:\NodeJS',
  base: 'test.js',
  ext: '.js',
  name: 'test'
} */

console.log(path.join("/a/b", "c")) // 输出 \a\b\c
console.log(path.join("/a/b", "/c")) // 输出 \a\b\c
console.log(path.join("/a/b", "c", "../")) // 输出 \a\b\
console.log(path.join("/a/b", "c", "../", "d")) // 输出 \a\b\d\

console.log(path.relative("/a/b/test/111", "/a/b/impl/222")) // 输出 ..\..\impl\222

console.log(path.resolve("/a/b/test/", "./111.js")) // 输出 d:\a\b\test\111.js
console.log(path.resolve("/a/b/test/", "../111.js")) // 输出 d:\a\b\111.js
console.log(path.resolve("/a/b/test/", "/111.js")) // 输出 d:\111.js
```

# 16 - NodeJS 核心 API-fs(掌握)

## 1. 查看文件状态

- **fs.stat()** 获取文件信息（异步）

- **fs.statSync()** 获取文件信息（同步）

- 示例代码

```js
const fs = require("fs")
fs.stat(__filename, function (err, stats) {
  console.log(stats)
  if (stats.isFile()) {
    console.log("当前路径对应的是一个文件")
  } else if (stats.isDirectory()) {
    console.log("当前路径对应的是一个文件夹")
  }
})
const stats = fs.statSync(__filename)
console.log(stats)
```

## 2. 文件读取

- **fs.readFile(path\[, options], callback)** 读取文件（异步）

- **fs.readFileSync(path\[, options])** 读取文件（同步）

- 注意点:
  没有指定第二个参数，默认会将读取到的数据放到 Buffer 中。
  第二个参数指定为 utf8，返回的数据就是字符串。

- 示例代码

```js
fs.readFile(__filename, "utf-8", function (err, data) {
  if (err) throw new Error("读取文件失败")
  console.log(data)
})
const data = fs.statSync(__filename)
console.log(data)
```

## 3. 文件写入

- **fs.writeFile(file, data\[, options], callback)** 写入文件（异步）

- **fs.writeFileSync(file, data\[, options])** 写入文件（同步）

- 示例代码

```js
const filePath = path.join(__dirname, "test.txt")
fs.writeFile(filePath, "writeFile Test", "utf-8", function (err) {
  if (err) throw new Error("写入数据失败")
  else console.log("写入数据成功")
})
const res = fs.writeFileSync(filePath, "writeFileSync Test", "utf-8")
console.log(res)
```

## 4. 文件追加

- **fs.appendFile(path, data\[, options], callback)** 追加文件（异步）

- **fs.appendFileSync(path, data\[, options])** 追加文件（同步）

- 示例代码（参考文件写入示例代码）

## 5. 分批读取和写入

- 大文件操作
  前面讲解的关于文件写入和读取操作都是一次性将数据读入内存或者一次性写入到文件中。但是如果数据比较大，直接将所有数据都读到内存中会导致计算机内存爆炸、卡顿、死机等。所以对于比较大的文件我们需要分批读取和写入。

- **fs.createReadStream(path\[, options])**

- **fs.createWriteStream(path\[, options])**

```js
// 1.拼接读取的路径
const filePath = path.join(__dirname, "test.txt")
// 2.创建一个读取流
const readStream = fs.createReadStream(filePath, { encoding: "utf8", highWaterMark: 1 })
// 3.添加事件监听
readStream.on("open", function () {
  console.log("数据流和文件建立关系成功")
})
readStream.on("error", function () {
  console.log("数据流和文件建立关系失败")
})
readStream.on("data", function (data) {
  console.log("通过读取流从文件中读取到了数据", data)
})
readStream.on("close", function () {
  console.log("数据流断开了和文件的关系，并且数据已经读取完毕了")
})
```

```js
// 1.拼接读取的路径
const filePath = path.join(__dirname, "test.txt")
// 2.创建一个读取流
const writeStream = fs.createWriteStream(filePath, { encoding: "utf8", highWaterMark: 1 })
// 3.添加事件监听
writeStream.on("open", function () {
  console.log("数据流和文件建立关系成功")
})
writeStream.on("error", function () {
  console.log("数据流和文件建立关系失败")
})
writeStream.on("close", function () {
  console.log("数据流断开了和文件的关系")
})
let data = "This is a test for writeStream"
let index = 0
let timerId = setInterval(() => {
  writeStream.write(data[index])
  console.log("写入", data[index++])
  if (index === data.length) {
    clearInterval(timerId)
    writeStream.end()
  }
}, 100)
```

## 6. 通过 readStream 和 writeStream 拷贝文件

```js
const readPath = path.join(__dirname, "test.txt")
const writePath = path.join(__dirname, "test2.txt")
const readStream = fs.createReadStream(readPath, { encoding: "utf8", highWaterMark: 1 })
const writeStream = fs.createWriteStream(writePath, { encoding: "utf8", highWaterMark: 1 })
readStream.on("open", function () {
  console.log("读取流和文件建立关系成功")
})
readStream.on("error", function () {
  console.log("读取流和文件建立关系失败")
})
readStream.on("data", function (data) {
  writeStream.write(data)
  console.log("通过读取流从文件中读取到了数据，并写入了新的文件", data)
})
readStream.on("close", function () {
  writeStream.end()
  console.log("读取流断开了和文件的关系")
})
writeStream.on("open", function () {
  console.log("写入流和文件建立关系成功")
})
writeStream.on("error", function () {
  console.log("写入流和文件建立关系失败")
})
writeStream.on("close", function () {
  console.log("写入流断开了和文件的关系")
})
```

## 7. 利用读取流的管道方法快速实现文件拷贝

- **readStream.pipe(writeStream)**

```js
const readPath = path.join(__dirname, "test.txt")
const writePath = path.join(__dirname, "test2.txt")
const readStream = fs.createReadStream(readPath, { encoding: "utf8", highWaterMark: 1 })
const writeStream = fs.createWriteStream(writePath, { encoding: "utf8", highWaterMark: 1 })
readStream.pipe(writeStream) //利用读取流的管道方法快速实现文件拷贝
```

## 8. 目录操作

- 创建目录
  fs.mkdir(path\[,mode], callback)
  fs.mkdirSync(path\[, mode])

- 读取目录
  fs.readdir(path\[, options], callback)
  fs.readdirSync(path\[, options])

- 删除目录
  fs.rmdir(path, callback)
  fs.rmdirSync(path)

- 示例代码

```js
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
```

# 17 - NodeJS 核心 API-搭建 web 服务器(掌握)

1.  什么是 HTTP 模块
    通过 Nodejs 提供的 http 模块，我们可以快速的构建一个 web 服务器，也就是快速实现过去 PHP 服务器的功能(接收浏览器请求、响应浏览器请求等)。

2.  通过 HTTP 模块实现服务器功能步骤
    2.1 导入 HTTP 模块
    2.2 创建服务器实例对象
    2.3 绑定请求事件
    2.4 监听指定端口请求

3.  示例代码

```js
const http = require("http")

// 1.创建一个服务器实例对象
const server = http.createServer()
// 2.注册请求监听
server.on("request", (req, res) => {
  // 告知浏览器返回的数据类型和字符集
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  })
  res.end("web服务器测试") // 结束本次请求并返回数据
})
// 3.指定监听的端口
server.listen(3030)

// 简写
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
    })
    res.end("web服务器测试222")
  })
  .listen(3040)

// 浏览器输入下面的地址进行测试
// http://localhost:3030/
// http://localhost:3040/
```

# 18 - NodeJS 核心 API-http 路径分发(掌握)

1.  什么是路径分发?
    **路径分发** 也称之为 **路由**，就是根据不同的请求路径返回不同的数据。

2.  如何根据不同的请求路径返回不同的数据?
    通过请求监听方法中的 request 对象，我们可以获取到当前请求的路径。通过判断请求路径的地址就可以实现不同的请求路径返回不同的数据。

3.  代码示例

```js
const http = require("http")
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
      res.end("web服务器测试")
    }
  })
  .listen(3040)
```

# 19 - NodeJS 核心 API-http 返回静态网页或资源(掌握)

**注意点:**

1. 用 fs.readFile 加载图片等非文本资源时 encoding 不能为 utf8。
2. 如果服务器响应数据时没有指定响应头，那么在有的浏览器上，响应的数据可能无法显示。

**示例代码:**

```js
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
  fs.readFile(filePath, function (err, data) {
    if (err) res.end("Server error: " + err)
    res.end(data)
  })
}

// 浏览器输入下面的地址进行测试
// http://localhost:3030/
```

# 20 - NodeJS 核心 API-获取请求参数(掌握)

- 如何拿到 Get 请求传递过来的参数
  使用 URL 模块
  **url.format(urlObject)** 将路径转换为对象
  **url.parse(urlString[, parseQueryString[, slashesDenoteHost]])** 将对象转换为路径

- 如何拿到 POST 请求传递过来的参数
  使用 querystring 模块
  **querystring.parse(str[, sep[, eq[, options]]])** 将参数转换为对象
  **querystring.stringify(obj[, sep[, eq[, options]]])** 将对象转换为参数

```js
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
```
