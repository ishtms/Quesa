var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js',
        login: './src/login.js'
    },
    output: {
        filename: 'public/build/[name].bundle.js',
        sourceMapFilename: 'public/build/[id].bundle.map'
    },
    devtool: '#source-map',
    module: {
         loaders: [
             {
             test: /\.js?$/,
             exclude: /(node_modules)/,
             loader: 'babel-loader',
             query: {
                presets: ['react','es2015']
               }
            }
         ]
    }
}