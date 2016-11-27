/**
 * Created by muyi on 2016/11/26.
 */
var webpack =  require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(__dirname);

module.exports = {
    entry:[
        'webpack-dev-server/client?http://0.0.0.0:8888',//资源服务器地址
        'webpack/hot/only-dev-server',
        './js/entry'
    ]
    /*{

        //编译的入口文件
        app: './js/entry',
    }*/,
    output:{
        publicPath: '/dist', //服务器根路径
        path: __dirname+'/dist', //编译到当前目录
        filename: 'app.js' //编译后的文件名字
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                //loaders: ExtractTextPlugin.extract("style", "css",'autoprefixer')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
                //loaders: ExtractTextPlugin.extract("style", "css",'autoprefixer',"less")
            },
            /*{
                test: /\.css$/,
                loaders: ['style', 'css','autoprefixer']
            },
            {
                test: /\.less/,
                loaders: ['style', 'css','autoprefixer', 'less']
            },*/
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=12000&name=[hash].[ext]'
            },
            {
                test: /\.jsx$/,
                loaders: ['jsx', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
            },
            {
                test:[/\.js$/,/\.jsx?$/],
                exclude:/(node_modules)/,
                loader:'babel?presets[]=es2015,presets[]=react',
                include: path.join(__dirname, 'js')
            },

        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('common.js') //将公用模块，打包进common.js
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("/main.css"),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'] //后缀名自动补全
    }
}