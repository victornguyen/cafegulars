var webpack               = require('webpack');
var webpackDevMiddleware  = require('webpack-dev-middleware')
var webpackHotMiddleware  = require('webpack-hot-middleware')
var ProgressPlugin        = require('webpack/lib/ProgressPlugin');
var ProgressBar           = require('progress');
var config                = require('./webpack.config');

var app = new (require('express'))();
var port = 3000;

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

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("\n==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
