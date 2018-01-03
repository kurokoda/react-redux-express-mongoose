import express from 'express';

const router = express.Router();

router.get('*', (req, res, next) => {
  require('../middlewares/universalRenderer').default(req, res, next)
});

// mock apis
router.get('api/questions', (req, res) => {
  console.log('Asking for questions');
  let {questions} = require('../services/mock_api');
  res.send(questions)
});

router.get('api/users/:id', (req, res) => {
  let {getUser} = require('../services/mock_api');
  res.send(getUser(req.params.id))
});

router.get('api/questions/:id', (req, res) => {
  let {getQuestion} = require('../services/mock_api');
  let question      = getQuestion(req.params.id);
  if (question) {
    res.send(question)
  } else {
    res.status(404).send({reason: 'question not found'})
  }
});

router.post('api/login', (req, res) => {
  console.log('Bitch tryin to log in', req.body.username);
});

export default router;