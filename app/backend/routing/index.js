import Express from 'express';
import User from '../models/User';

const router = Express.Router();

router.post('/api/login', (req, res) => {
  res.send({user: true});
});

router.get('/api/logout', (req, res) => {
  res.send({user: false});
});

router.get('*', (req, res, next) => {
  require('../middlewares/universalRenderer').default(req, res, next)
});

export default router;