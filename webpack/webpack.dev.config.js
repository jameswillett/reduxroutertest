const webpack = require('webpack');
const path = require('path');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(__dirname, '../index.js'),
  ],
  mode: "development",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },{
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
    }],
  },
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
  },
}
