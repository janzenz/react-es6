"use strict";

const webpack = require('webpack');
const path = require('path');
const port = 7800;

module.exports = {
  entry: [
  	"webpack-dev-server/client?http://localhost:"+port,
  	"webpack/hot/only-dev-server",
  	"./src/client/app.js",
  ],

  plugins: [
  	new webpack.HotModuleReplacementPlugin() // To generate hot update chunks
  ],

  // Webpack Dev Server
  devServer: {
    hot: true, // Enables HMR in WDS and in libs running in the browser
    port: port,
    contentBase: './dist',
  },

  output: {
    filename: "app.bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/assets/"
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ],
  }
}
