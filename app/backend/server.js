/* global __dirname */

import bluebird from 'bluebird';
import bodyParser from 'body-parser';
import compression from 'compression';
import Express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import clearRequireCacheOnChange from './lib/clearRequireCacheOnChange';
import User from './models/User';

const server    = new Express();
const port      = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://heroku_tzsj43z0:v7f2hvfq8eaqhd84v44t2bt4ef@ds033186.mlab.com:33186/heroku_tzsj43z0';

server.use(compression());
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  server.use(Express.static(path.join(__dirname, '../..', 'public')))
} else {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig        = require(path.join(__dirname, '../..', 'webpack.config'));
  const webpack              = require('webpack');
  const compiler             = webpack(webpackConfig);
  const hotMiddleware        = webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
  });

  server.use('/assets', Express.static(path.join(__dirname, '..', 'assets')));
  server.use(Express.static(path.join(__dirname, '../..', 'dist/css')));
  server.use(hotMiddleware);
  server.use(webpackDevMiddleware(compiler, {
    publicPath      : webpackConfig.output.publicPath,
    serverSideRender: true,
    stats           : {
      colors : true,
      hash   : true,
      timings: true,
      chunks : false
    }
  }));

  clearRequireCacheOnChange({rootDir: path.join(__dirname, '..')})
}

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

mongoose.connection.on('open', function () {
  console.log('Database connected');
});
mongoose.Promise = bluebird.Promise;
mongoose.connect(MONGO_URI, {useMongoClient: true});

// ROUTES

server.get('/api/questions', (req, res) => {
  console.log('Asking for questions');
  let {questions} = require('./services/mock_api');
  res.send(questions)
});

server.get('/api/users/:id', (req, res) => {
  let {getUser} = require('./services/mock_api');
  res.send(getUser(req.params.id))
});

server.get('/api/questions/:id', (req, res) => {
  let {getQuestion} = require('./services/mock_api');
  let question      = getQuestion(req.params.id);
  if (question) {
    res.send(question)
  } else {
    res.status(404).send({reason: 'question not found'})
  }
});

server.post('/api/login', (req, res) => {
  User.find({username: req.body.username, password: req.body.password}, function (err) {
    if (err) {
      res.status(500).send('Something broke!')
    } else {
      res.send({user: true})
    }
  });
});

server.post('/api/logout', (req, res) => {
  res.send({user: false});
});

server.post('/api/signup', (req, res) => {
  console.log('Bitch tryin to sign up', req.body.username);
  new User({username: req.body.username, password: req.body.password}).save(function (err) {
    if (err) {
      res.status(500).send('Something broke!')
    } else {
      res.send({user: true})
    }
  });
});

server.get('*', (req, res, next) => {
  require('./middlewares/universalRenderer').default(req, res, next)
});

server.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("something went wrong...")
});

console.log(`Server is listening to port: ${port}`);
server.listen(port);
