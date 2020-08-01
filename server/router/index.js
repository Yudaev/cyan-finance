const path = require('path');
const express = require('express');
const router = express.Router();
const swaggerSpecification = require('../swagger.js');

router.use('/auth', require('./auth'));
router.use('/reg', require('./reg'));
router.use('/operations', require('./operations'));
router.use('/categories', require('./categories'));

router.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpecification);
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;