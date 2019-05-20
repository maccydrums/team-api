const express = require('express');
const methods = require('./methods.js');
const user = require('./user.js');
const helloWorld = require('./helloWorld.js');
const router = express.Router();

//middleware that is spec to this router
router.use(function timelog (req, res, next) {
  console.log('Time:', Date.now())
  next();
})

// router.post('/middlewares', body.body)

router.get('/methods', methods.get);
router.post('/methods', methods.post);
router.put('/methods', methods.put);
router.delete('/methods', methods.delete);

router.post('/users', user.post);
router.get('/users', user.get);

router.get('/', helloWorld.hello);
router.get('/:pathParameter', helloWorld.params);

module.exports = router;
