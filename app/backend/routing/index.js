import Express from 'express';
import User from '../models/User';

const router = Express.Router();

router.get('/api/questions', (req, res) => {
  console.log('Asking for questions');
  let {questions} = require('../services/mock_api');
  res.send(questions)
});

router.get('/api/users/:id', (req, res) => {
  let {getUser} = require('../services/mock_api');
  res.send(getUser(req.params.id))
});

router.get('/api/questions/:id', (req, res) => {
  let {getQuestion} = require('../services/mock_api');
  let question      = getQuestion(req.params.id);
  if (question) {
    res.send(question)
  } else {
    res.status(404).send({reason: 'question not found'})
  }
});

router.post('/api/login', (req, res) => {
  User.find({username: req.body.username, password: req.body.password}, function (err) {
    if (err) {
      res.status(500).send('Something broke!')
    } else {
      res.send({user: true})
    }
  });
});

router.post('/api/logout', (req, res) => {
  res.send({user: false});
});

router.post('/api/signup', (req, res) => {
  console.log('Bitch tryin to sign up', req.body.username);
  new User({username: req.body.username, password: req.body.password}).save(function (err) {
    if (err) {
      res.status(500).send('Something broke!')
    } else {
      res.send({user: true})
    }
  });
});

router.get('*', (req, res, next) => {
  require('../middlewares/universalRenderer').default(req, res, next)
});

export default router;