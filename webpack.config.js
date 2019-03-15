const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  entry: {
    home: path.resolve(__dirname, 'src/js/script.js'),
    // precio: path.resolve(__dirname, 'src/js/precio.js'),
    // contacto: path.resolve(__dirname, 'src/js/contacto.js')
  },
  devServer: {
    port: 9000
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        loader: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
    })
  ]
}