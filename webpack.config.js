const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './client/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 3030
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: 'graphql-tag/loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jam Jar',
      template: path.resolve(__dirname, 'client', 'index.html'),
      filename: path.join(__dirname, 'dist/index.html')
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new DashboardPlugin(),
    new ExtractTextPlugin('dist/styles.css')
  ]
}

module.exports = config
