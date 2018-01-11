import Express from 'express';

const router = Express.Router();

router.post('/api/login', (req, res) => {
  res.send({user: true});
});

router.get('/api/logout', (req, res) => {
  res.send({user: false});
});

router.post('/api/fetchPageData', (req, res) => {
  const delay = 3000 + (Math.random() * 3000);
  console.log(delay, 'delay starts');
  setTimeout(() => {
    console.log('delay ends');
    res.send({user: false});
  }, delay)
});

router.get('*', (req, res, next) => {
  require('../middlewares/universalRenderer').default(req, res, next)
});

export default router;