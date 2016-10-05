const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/react/theme/styles.scss'),
    path.join(__dirname, '/src/react/index.js')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './src/www',
    hot: true,
    inline: false,
    port: 3000,
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
