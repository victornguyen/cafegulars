var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/scripts/index.js')
  ],
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css?sourceMap',
          'autoprefixer?browsers=last 2 version',
          'sass?sourceMap'
        ].join('!'))
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'url?limit=10000'
      },
      {
        test: require.resolve('react'),
        loader: 'expose?React'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss', '.json'],
    modulesDirectories: ['node_modules', 'src', 'scripts']
  },
  devServer: {
    contentBase: './public/'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),

    new HtmlWebpackPlugin({
      title: 'Cafegulars',
      hash: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin()
  ]
};
