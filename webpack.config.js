var webpack = require("webpack");
 
var path = require("path");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

console.log('style!css!sass?includePaths[]=' + path.join(__dirname, './node_modules/compass-mixins/lib'));
 
module.exports = {
    entry: {
        index: './src/internalM/index.es6'
    },
    output: {
        path: path.join(__dirname, "dist"), 
        filename: "[name].js",
        publicPath:"dist/", //给require.ensure用
        chunkFilename: "[name].chunk.js"//给require.ensure用
    }, //页面引用的文件
     
    module: {
        loaders: [
            {test: /\.(css|scss|sass)$/, loader: 'style!css!sass?includePaths[]=' + path.join(__dirname, './node_modules/compass-mixins/lib')},
            {test: /\.es6$/,loaders: ['babel?presets[]=es2015'],exclude: /node_modules/},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [commonsPlugin],
    resolve: {
        extensions: ['.js', "", ".css"],
        alias: {
            avalon: path.join(__dirname, 'src/externalM/avalon.mobile.shim'),
            mmState : path.join(__dirname, 'src/externalM/mmState')
        }
    }
}