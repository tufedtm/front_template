const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './front_src',
  output: {
    path: './static',
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'less-loader'
            }
          ]
        })
      }, {
        test: /\.png$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin('build.css'),
  ]
};
