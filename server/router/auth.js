const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pick = require('lodash/pick');
const { tokenSecret } = require('../config.js');

const User = require('../models/user');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'Incorrect email or password.' });
  }

  const user = await User.findOne({email});

  try {
    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }

  if (!user.comparePassword(password)) {
    return res.status(401).json({ message: 'Wrong password' });
  }

  const userInfo = pick(user, ['_id', 'username']);

  return res.status(200).json({
    token: jwt.sign(userInfo, tokenSecret),
    ...userInfo
  });
});

module.exports = router;
