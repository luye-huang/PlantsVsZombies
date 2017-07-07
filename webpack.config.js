const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/entry.js','webpack/hot/only-dev-server'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash:8].js'
  },
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.js?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
        exclude: /node_modules/,
        loader: 'babel-loader',
        // query: {
        //   presets: ['react','env']
        // }
        // ,
        options: {
          presets: ['es2015', 'es2016', 'es2017', 'stage-0', 'react'],  //babel presets ，首先需要react解析react然后再es语法编译成js
          plugins: ['transform-decorators-legacy']
        }
        // test: /\.js$/,
        // exclude: /node_modules/,
        // // use: ['babel-loader'],
        // loader: 'babel-loader',
        // query: {
        //   presets: ['es2015', 'react']
        // }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png)$/,
        loader: 'url-loader'
      }
      ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 7001,
    hot: true
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      minify:{
        removeComments: true,
        //collapseWhitespace: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]

}