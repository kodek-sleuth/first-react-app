const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { join, resolve } = require('path');


module.exports = {
  entry:  ['./dist/main.js'],
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.ico$/,
        loader: 'file-loader'
     },
     {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
          'API_HOST': 'https://first-react-app-first.herokuapp.com'
        }
      })
  ]
};