var webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './client.js',
  output: {
    path: './public/js/build/',
    publicPath: '/public/js/build/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: require.resolve('babel-loader') }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],

  devtool: 'source-map',
  watch: true,
  keepalive: true
};
