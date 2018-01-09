import Express from 'express';
import User from '../models/User';

const router = Express.Router();

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


router.get('*', (req, res, next) => {
  require('../middlewares/universalRenderer').default(req, res, next)
});

export default router;