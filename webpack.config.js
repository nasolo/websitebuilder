const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "./bin"),
        filename:'bundle.js'
    },
    devServer:{

        inline: true,
        contentBase: './src',
        port: 3000

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}


module.exports = webpackConfig;