/**
 * Created by muyi on 2016/11/27.
 */
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new webpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    hot:true,
    historyApiFallback:true,
});
server.listen(8888,'127.0.0.1',function(err,result){
    if(err){
        return console.log(err);
    }
    console.log('listen is localhost:8888');
});
