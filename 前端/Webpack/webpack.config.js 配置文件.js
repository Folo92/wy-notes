// webpack.config.js
// webpack配置文件，指示webpack干哪些活，当你运行指令时，会加载里面的配置。
// 配置代码，commonjs标准。

const { resolve } = require("path") // 绝对路径，resolve 用来拼接绝对路径的方法
const HtmlWebpackPlugin = require("html-webpack-plugin") // 引入html-webpack-plugin
module.exports = {
  entry: "./src/js/index.js",
  // 入 口 文 件
  output: {
    // 输 出 配 置
    filename: "./built.js",
    // 输 出 文 件 名
    path: resolve(__dirname, "build/js")[(__dirname, "文件的目录绝对路径")],
    // 输 出 文 件 路 径 配 置
  },
  module: {
    rules: [
      // 详细 loader 配置，不同文件必须配置不同 loader 处理
      {
        test: /\.css$/, //匹配哪些文件，使用哪些 loader 进行处理
        use: [
          // use 数组中 loader 执行顺序：从右到左，从下到上 依次执行
          // 创建 style 标签，将 js 中的样式资源插入进行，添加到 head 中生效
          "style-loader",
          // 将 css 文件变成 commonjs 模块加载 js 中，里面内容是样式字符串
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 将 less 文件编译成 css 文件
          // 需要下载 less-loader 和 less
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    // 打包HTML资源
    // html-webpack-plugin
    new HtmlWebpackPlugin(),
  ],
  mode: "development",
  // 开 发 环 境
  // mode: 'production'
  // 生 成 环 境
}
