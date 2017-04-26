var webpack = require('webpack');
console.log(__dirname + '/public/res/js')
var config = {
  context: __dirname + '/public/res/js', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/public/res/js', // `dist` is the destination
    filename: 'app.bundle.js',
  },
};

module.exports = config;