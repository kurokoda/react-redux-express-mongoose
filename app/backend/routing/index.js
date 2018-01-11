import Express from 'express';

const router = Express.Router();

router.post('/api/login', (req, res) => {
  res.send({user: true});
});

router.get('/api/logout', (req, res) => {
  res.send({user: false});
});

router.post('/api/fetchPageData', (req, res) => {
  const delay = 1000 + (Math.random() * 2000);
  setTimeout(() => {
    res.send({user: false});
  }, delay)
});

router.get('*', (req, res, next) => {
  require('../middlewares/universalRenderer').default(req, res, next)
});

export default router;