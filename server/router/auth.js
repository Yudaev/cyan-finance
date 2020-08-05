const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pick = require('lodash/pick');
const { tokenSecret } = require('../config.js');

const User = require('../models/user');

/**
 * @swagger
 * /auth/:
 *   post:
 *     tags:
 *       - user
 *     summary: Авторизация
 *     produces:
 *       - application/json
 *     requestBody:
 *      $ref: '#/components/requestBodies/User'
 *     responses:
 *       200:
 *         description: Возвращает пользователя и его токен
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Incorrect email or password.' });
  }

  let user;

  try {
    user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }

  if (!user.comparePassword(password)) {
    return res.status(400).json({ message: 'Wrong password' });
  }

  const userInfo = pick(user, ['_id', 'email']);

  return res.status(200).json({
    token: jwt.sign(userInfo, tokenSecret),
    ...userInfo
  });
});

module.exports = router;
