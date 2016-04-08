var webpack = require("webpack");
 
var path = require("path");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
 
module.exports = {
    entry: {
        index: './src/internalM/index'
    },
    output: {
        path: path.join(__dirname, "dist"), 
        filename: "[name].js",
        publicPath:"dist/", //给require.ensure用
        chunkFilename: "[name].chunk.js"//给require.ensure用
    }, //页面引用的文件
     
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
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