/**
 * Created by hemingming on 2017/3/3.
 */
//webpack.config.js
const webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
const path=require("path");

module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            },{
                test: /\.less$/,//正则匹配拓展名为···的文件
                include: path.join(__dirname, './css'),//需要被加载文件的路径
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],

    devServer: {
        contentBase: './build',
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8088, //同一台电脑上不能出现同一个 port
        process: true
    }
};
