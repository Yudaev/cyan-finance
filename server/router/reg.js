const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pick = require('lodash/pick');
const { tokenSecret } = require('../config');

const User = require('../models/user');

router.post('/', async (req, res) => {
  const { email, password, password2 } = req.body;

  if (!email || !password || !password2) {
    return res.status(401).json({ message: 'Incorrect email or password.' });
  }

  if (password !== password2) {
    return res.status(401).json({ message: 'Passwords does not match' });
  }

  try {
    const user = await User.findOne({email});
    if (user) {
      return res.status(401).json({ message: 'User already exists' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }

  const newUser = new User({
    email,
    password,
  });

  try {
    await newUser.save();
    const userInfo = pick(newUser, ['_id', 'email']);
    res.status(200).json({
      token: jwt.sign(userInfo, tokenSecret),
      ...userInfo
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
