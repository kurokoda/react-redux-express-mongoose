const path         = require('path');
const webpack      = require('webpack');

require('assets-webpack-plugin');

const DEBUG = !(process.env.NODE_ENV === 'production');

if (DEBUG) {
  require('dotenv').config();
}

const config = {
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  entry  : {
    app   : ['./app/app'],
    react: [
      'react',
      'react-bootstrap',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
      'redux',
      'redux-devtools',
      'redux-devtools-dock-monitor',
      'redux-devtools-log-monitor'
    ],
    vendor: [
      'lodash',
      'bluebird',
      'humps',
      'history'
    ]
  },
  resolve: {
    modules: [path.join(__dirname, 'app'), 'node_modules']
  },
  output : {
    path    : path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'API_BASE_URL'
    ])
  ],
  module : {
    rules: [
      {
        test   : /\.js$/,
        loader : 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};

if (DEBUG) {
  config.entry.app.push('webpack-hot-middleware/client?path=/__webpack_hmr');

  config.plugins           = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name   : 'vendor',
      filname: 'vendor.js'
    })
  ]);
  config.output.publicPath = '/';
  config.module.rules.unshift({
    test   : /\.js$/,
    loader : 'react-hot-loader',
    exclude: /node_modules/,
    include: __dirname
  });
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name   : 'vendor',
      filname: '[name].[chunkhash].js'
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]);
}

module.exports = config;
