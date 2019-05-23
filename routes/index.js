const express = require('express');
const user = require('./user.js');
const router = express.Router();
const post = require('./post.js')
const methods = require('./methods.js');

//middleware that is spec to this router
router.use(function timelog (req, res, next) {
  console.log('Time:', Date.now())
  next();
})

// router.post('/middlewares', body.body)


router.get('/users', user.get);
router.post('/users', user.post);
router.get("/users/:id", user.getById)
router.delete("/users/:id", user.deleteById)
router.put("/users/:id", user.put)
router.patch("/users/:id", user.patch)
// router.put('/:id', user.put);

router.get('/posts', post.get);
router.post('/posts', post.post);
router.get("/posts/:id", post.getById)
router.delete("/posts/:id", post.deleteById)
router.put("/posts/:id", post.put)
router.patch("/posts/:id", post.patch)

router.get('/methods', methods.get);
router.post('/methods', methods.post);
router.put('/methods', methods.put);
router.delete('/methods', methods.delete);

module.exports = router;