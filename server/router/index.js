const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/reg', require('./reg'));
router.use('/operations', require('./operations'));
router.get('/', (req, res) => {
  res.send('cyan finance api');
});

module.exports = router;