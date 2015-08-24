var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/scripts/'),
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      query: {stage: 0}
    }]
  }
};
