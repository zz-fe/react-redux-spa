// 该配置基于webpack2.0 详情查看 https://webpack.js.org/guides/migrating/
const path = require('path'); // 导入路径包
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rules = require("./webpack.common");
module.exports = {
    entry: './src/index.js', //入口文件
    output: {
        path: path.resolve(__dirname, '../build'), // 指定打包之后的文件夹
        // publicPath: '/assets/', //指定资源文件引用的目录
        // filename: 'bundle.js' // 指定打包为一个文件 bundle.js
        filename: '[name].js' // 可以打包为多个文件
    },
    // 使用loader模块
    module: {
        /* 在webpack2.0版本已经将 module.loaders 改为 module.rules 为了兼容性考虑以前的声明方法任然可用，同时链式loader(用!连接)只适用于module.loader
        同时-loader不可省略 */
        rules:rules

    },
    // 配置devServer各种参数
    devServer: {
        // contentBase: "./", // 本地服务器所加载的页面所在的目录
        hot: true, // 配置HMR之后可以选择开启
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // 模版文件
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载插件
        new ExtractTextPlugin('[name].css')
    ],
    devtool: 'source-map', //开启sourceMap便于调试   有错误的时候可以提示源码
    devServer: {
    proxy: {
      '/api':'http://localhost:6666'
    }
  }
}
