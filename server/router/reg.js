const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pick = require('lodash/pick');
const { tokenSecret } = require('../config');
const User = require('../models/user');
const Category = require('../models/category');
const { initialCategories } = require('../constants');

/**
 * @swagger
 * /reg/:
 *   post:
 *     tags:
 *       - user
 *     summary: Регистрация
 *     produces:
 *       - application/json
 *     requestBody:
 *       $ref: '#/components/requestBodies/UserReg'
 *     responses:
 *       200:
 *         description: Возвращает пользователя и его токен
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */

router.post('/', async (req, res) => {
  const { email, password, password2 } = req.body;

  if (!email || !password || !password2) {
    return res.status(400).json({ message: 'Incorrect email or password' });
  }

  if (!(/.+@.+\..+/i).test(email)) {
    return res.status(400).json({ message: 'Incorrect email' });
  }

  if (password !== password2) {
    return res.status(400).json({ message: 'Passwords does not match' });
  }

  try {
    const user = await User.findOne({email});
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
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

    await initialCategories.forEach(({ title }) => {
      const newCategory = new Category({ title, user: newUser });
      newCategory.save();
    });

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
