var webpack           = require('webpack');
var WebpackDevServer  = require('webpack-dev-server');
var ProgressPlugin    = require('webpack/lib/ProgressPlugin');
var ProgressBar       = require('progress');
var config            = require('./webpack.config');

var compiler = webpack(config);

var bar = new ProgressBar('  bundling [:bar] :percent -- :msg', {
  total: 20,
  complete: '=',
  incomplete: ' '
});

compiler.apply(
  new ProgressPlugin(function(percent, msg) {
    bar.update(percent, {
      msg: msg
    });
  })
);

new WebpackDevServer(compiler, {
  contentBase: config.devServer.contentBase,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  // console.log('Listening at localhost:3000');
});
