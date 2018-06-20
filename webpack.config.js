'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    // Add source map support
    devtool: "#cheap-source-map",
    entry: "./src/client.js",
    output: {
        path: __dirname,
        filename: "static/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko'],
        modules: ['./', 'node_modules']
    },
    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 3001,
        contentBase: [path.join(__dirname, "src")],
    },
};
