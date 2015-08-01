module.exports = {
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx']
  },
  entry: './client.js',
  output: {
    path: './public/js/build/',
    publicPath: '/public/js/build/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: require.resolve('babel-loader') },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [],

  devtool: 'source-map',
  watch: true,
  keepalive: true
};
