const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/react/index.js')
  ],
  devServer: {
    contentBase: './src/www',
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true
  },
  output: {
    path: buildPath, // Path of output file
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: [nodeModulesPath],
      },
      {
        // scss loader
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          }
        ]
      }
    ],
  },
};
