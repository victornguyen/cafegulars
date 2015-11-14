var webpack             = require('webpack');
var path                = require('path');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
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
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(scss|css)$/,
        loader: [
          'style',
          'css',
          'autoprefixer?browsers=last 2 version',
          'sass'
        ].join('!')
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
    extensions: ['', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', 'src', 'scripts']
  },
  devServer: {
    contentBase: './public/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cafegulars',
      hash: true,
      template: 'src/index.html',
      inject: 'body'
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin()
  ]
};
