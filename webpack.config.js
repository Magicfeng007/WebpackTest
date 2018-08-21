const path = require('path'); //node内置的模块用来设置路径的
const HtmlWebpackPlugin = require('html-webpack-plugin');//使用html-webpack-plugin根据模板html生成引入script的页面
const CleanWebpackPlugin = require('clean-webpack-plugin');//使用clean-webpack-plugin清除dist文件夹


module.exports = {
    entry: './src/js/entry.js',//入口文件的配置
    devServer: {
        contentBase: 'dist'
    },
    output: {                   //出口，输入的配置
        filename: 'bundle.js',  //输出的文件名
        path: path.resolve(__dirname, 'dist/js/')
    },
    plugins: [new HtmlWebpackPlugin({template:'./index.html'}),
                new CleanWebpackPlugin(['dist'])],
    module: {
        rules: [
            {
                test: /\.css$/,//test不是css文件名
                use: [ 'style-loader','css-loader']//注意有顺序，必须先用style-loader,style-loader作用是将css样式文件应用到页面，css-loader作用则是将css样式文件打包
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',//url-loader基于file-loader，只是如果图片文件小于设定的大小，则将使用base64编码转换为字符串存放在js文件中
                        options: {
                            limit:8192//单位为字节
                        }
                    }
                ]
            }
        ]
    }
};

