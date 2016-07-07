const webpack = require('webpack');
const path = require('path');
const mainPath = path.resolve('./src');
const buildPath = path.resolve('./dist');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    mainPath,
  ],
  output: {
    filename: 'bundle.js',
    path: buildPath,
    publicPath: '/dist/',
    chunkFilename: '[name]-[chunkhash].js',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': `http://127.0.0.1:${(process.env.PORT || 3000)}`,
    },
    host: '127.0.0.1'
  }
};
