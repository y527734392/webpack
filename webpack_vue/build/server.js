/**
 * Created by muyi on 2016/12/13.
 */
//引入必要模块
var express = require("express");
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var opn = require('opn');

//创建一个express势力
var app = express();

//调用webpack并把配置传递过去
var compiler = webpack(config);

//使用webpack-dev-middleware
var devMiddleware = require('webpack-dev-middleware')(compiler,{
    publicPath : config.output.publicPath,
    stats: {
        colors:true,
        chunks:false,
    },
});
//使用webpack-hot-middleware
var hotMidlleware = require('webpack-hot-middleware')(compiler);
var hotMiddleware = require('webpack-hot-middleware')(compiler);

//注册中间件
app.use(devMiddleware);
app.use(hotMiddleware);


var port = 8889;
// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' });
        cb();
    })
});

var uri = 'http://yt.com:' + port


//监听8889端口,开启服务器
app.listen(8889,function(err){
    if(err){
        console.log(err);
        return
    }
    console.log("Listening 8889");
});

// when env is testing, don't need open it
if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
}