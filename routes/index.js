const express = require('express');
const user = require('./user.js');
const router = express.Router();
const post = require('./post.js')

//middleware that is spec to this router
router.use(function timelog (req, res, next) {
  console.log('Time:', Date.now())
  next();
})

// router.post('/middlewares', body.body)


router.get('/users', user.get);
router.post('/users', user.post);
// router.put('/:id', user.put);

router.get('/posts', post.get);
router.post('/posts', post.post);
// router.put('/:id', post.put);

module.exports = router;
