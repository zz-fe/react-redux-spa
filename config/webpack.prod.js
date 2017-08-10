const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin')//webpack插件，用于清除目录文件
const rules = require("./webpack.common");

module.exports = {
    entry: './src/index.js', //入口文件
    output: {
        path: path.resolve(__dirname, '../build'), // 指定打包之后的文件夹
        //publicPath: '/assets/', //指定资源文件引用的目录
        // filename: 'bundle.js' // 指定打包为一个文件 bundle.js
        filename: '[name]-[hash].js' // 可以打包为多个文件
    },
    // 使用loader模块
    module: {
          rules:rules
    },
    plugins: [
        new webpack.DefinePlugin({
         'process.env':{
           'NODE_ENV': JSON.stringify('production')
         }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html' // 模版文件
        }),

        new CleanPlugin(['build','dist'],{
          root: path.resolve(__dirname, '../')    //绝对路径
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors' // 将公共模块提取，生成名为`vendors`的chunk
        }),
        new webpack.optimize.UglifyJsPlugin({ //压缩js代码
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name]-[hash].css')
    ]
}
