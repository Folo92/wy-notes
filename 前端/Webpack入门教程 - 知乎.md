一.为什么要用webpack
--------------

现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

*   **模块化**，让我们可以把复杂的程序细化为小的文件;
*   类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能转换为JavaScript文件使浏览器可以识别；
*   Scss，less等CSS预处理器；

这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常繁琐的，这就为WebPack类的工具的出现提供了需求。

二.什么是webpack
------------

WebPack可以看做是**模块打包机**：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用：

![](https://pic2.zhimg.com/v2-c03136522667979a16fa34ef9e2f65a9_b.jpg)

webpack的重要功能包括：代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布。

三.如何使用webpacK
-------------

### 1.准备

选择一个空文件夹（本文的文件夹名字为webpackapp，下称根目录），在该文件夹下运行`npm init --y`生成一个默认配置的 package.json文件。

### 2.安装

一般情况下使用本地安装模式：npm install --save-dev webpack，该命令会默认安 装最新的版本。

### 3.前期配置

（1）在根目录下新建src文件夹，用于存放js,html，和css文件；

（2）在src目录下新建index.js，并新建index.html文件引入index.js;

```text
// index.js
console.log("hello,webpack!") 
```

```text
//index.html
<!DOCTYPE html>
<html>
      <head>
          <meta charset="UTF-8" />
          <title>webpack学习入门</title>
      </head>
      <body>
          <script src="./index.js"></script>
      </body>
</html>
```

（3）在根目录下新建webpack配置文件，默认为webpack.config.js；

（4）配置webpack.config.js文件如下：

```text
// webpack.config.js
let path = require('path')modulex.exports = {
    mode:'development',                         //模式：development、production
    entry: './src/index.js',                    //入口
    output:{                                    //出口
        filename:'byndle.js',                   //打包文件名
         path:path.resolve(__dirname,'dist'),   //必须是绝对路径
    }
}
```

四.webpack基础配置
-------------

### 1.entry

```text
string | [string] | object { <key>: string | [string] } | (function: () => string |
[string] | object { <key>: string | [string] })
```

起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。动态加载的模块**不是**入口起点。

简单规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点:

```text
// webpack.config.js
let path = require('path')modulex.exports = {
    entry: './src/index.js',                    //入口
}
```

### 2.output

位于对象最顶级键(key)，包括了一组选项，指示 webpack 如何去输出、以及在哪里输出。

*   filenam:表示打包输出文件的名字;
*   path:表示打包输出的路径，必须是一个绝对名。其中，“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录:

```text
//webpack.config.js
let path = require('path')

modulex.exports = {
    entry: './src/index.js',                     //入口
    output:{
        filename:'byndle.js',                    //打包文件名
         path:path.resolve(__dirname,'dist'),    //必须是绝对路径
    }
}
```

**注：可以在第三步中生成的package.json文件中配置scripts，由此来快速对项目进行相关操作**。修改package.json，如下：

```text
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
 },
```

当我们运行`npm start`命令时，npm会找到以上配置的webpack命令并执行，结果如下：

![](https://pic3.zhimg.com/v2-001dc2142a871a4c89e7c7083c6113e2_b.jpg)

### 3.devServer

借用devServer可以监听启动一个本地服务器，监听本地代码的变化，这对于我们开发体验大有裨益。要使用devServer配置项，首先安装：`npm install --save-dev webpack-dev-server`。

| 配置选项 | 功能描述 |
| --- | --- |
| contentBase | 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录） |
| port | 设置默认监听端口，如果省略，默认为”8080“ |
| inline | 设置为true，当源文件改变时会自动刷新页面 |
| historyApiFallback | 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html |

加入相关配置后的代码如下，这些只是devServer常用配置项，更多配置细节点击[此处](https://link.zhihu.com/?target=https%3A//www.webpackjs.com/configuration/dev-server/)。

```text
let path = require('path')modulex.exports = {
    mode: 'development',
    entry: './src/index.js',                    //入口
    output:{
        filename:'byndle.js',                   //打包文件名
         path:path.resolve(__dirname,'dist'),    //必须是绝对路径
    },
    devServer:{
        historyApiFallback: true,               //不跳转
        open: false,                            //是否打开浏览器，默认为否
        inline: true,                           //实时刷新
        port: "8101",                           //监听端口号，默认8080
        host: "10.172.1.119",                   //指定使用一个 host,默认是 localhost
        hot: true,                              //启用模块热替换特性
        clientLogLevel:"warning",               //日志级别:none, error, warning或者info(默认)
        proxy: {                                //设置代理，可以解决跨域问题
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
                pathRewrite: {"^/api" : ""}
              }
        }
    }
 }
```

在`package.json`中的`scripts`对象中添加如下命令，用以开启本地服务器：  

```text
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "server": "webpack-dev-server"
 },
```

### 4.devtool

选择一种格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度，以下是几种常见的配置：  

| devtool选项 | 配置结果 |
| --- | --- |
| source-map | 在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度； |
| cheap-module-source-map | 在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便； |
| eval-source-map | 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项； |
| cheap-module-eval-source-map | 这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点； |

正如上表所述，上述选项由上到下打包速度越来越快，不过同时也具有越来越多的负面作用，较快的打包速度的后果就是对打包后的文件的的执行有一定影响。  

### 5.plugins

`plugins`选项用于以各种方式自定义 webpack 构建过程，用来拓展和强化webpack的功能。webpack内置插件列表的详细信息，请点[这里](https://link.zhihu.com/?target=https%3A//www.webpackjs.com/plugins/)，使用`webpack.[plugin-name]`可以使用这些内置插件。当然，优秀的你也可以写属于自己的插件，详细步骤请[点击](https://link.zhihu.com/?target=https%3A//www.webpackjs.com/contribute/writing-a-plugin/)。

plugins接收一个数组，它们执行相关的任务，会在整个构建过程中生效。下面是一个复杂的例子：

```text
var webpack = require('webpack');
// 导入非 webpack 自带默认插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

// 在配置中添加插件
plugins: [
  // 构建优化插件
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].min.js',
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false,
    }
  }),
  new ExtractTextPlugin({
    filename: 'build.min.css',
    allChunks: true,
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  // 编译时(compile time)插件
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  // webpack-dev-server 强化插件
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]
```

### 6.moudle

webpack通过moudle加载不同的`loader`，**调用外部的脚本或工具，实现对不同格式的文件的处理**，比如说分析转换scss为css，或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件，对React的开发而言，合适的Loaders可以把React的中用到的JSX文件转换为JS文件，下面介绍几种我们在实际开发中常用的配置。

(1)bebel

①定义：Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中，主要应用如下：

*   让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
*   让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；

②安装：`npm install --save-dev babel-loader @babel/core @babel/cli @babel/preset-env @babel/polyfill @babel/preset-react`

③使用：在`webpack`中配置Babel后完整配置如下:

```text
let path = require('path')
module.exports = {
    devtool:"source-map",
    mode: "development",
    entry: './src/index.js',                    //入口
    output:{
        filename:'bundle.js',                   //打包文件名
        path:path.resolve(__dirname,'dist'),    //必须是绝对路径
    },
    devServer:{
        historyApiFallback: true,               //不跳转
        open: false,                            //是否打开浏览器，默认为否
        inline: true,                           //实时刷新
        port: "8101",                           //监听端口号，默认8080
        host: "localhost",                      //指定使用一个 host,默认是 localhost
        hot: true,                              //启用模块热替换特性
        clientLogLevel:"none",                  //日志级别:none, error, warning或者info(默认)
        proxy: {                                //设置代理，可以解决跨域问题
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
                pathRewrite: {"^/api" : ""}
              }
        }
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}
```

(2)CSS

①背景：webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。

②安装：npm install --save-dev style-loader css-loader

③配置：在webpack配置CSS如下：

```text
module.exports = {
   ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
};
```