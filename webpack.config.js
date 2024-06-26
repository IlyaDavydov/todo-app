const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: '[bundle].[contenthash].js', 
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, 
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, 
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' 
    })
  ], 
  devServer: { 
    port: 8000, 
    open: true 
  },
  devtool: 'source-map'
};
