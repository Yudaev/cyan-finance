const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const omit = require('lodash/omit');
const { tokenSecret } = require('../config');

const Operation = require('../models/operation');

router.use('/', async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'No token' });
  } else {
    const [type, token] = req.headers.authorization.split(' ');

    jwt.verify(token, tokenSecret, (err, payload) => {
      if (err) {
        return res.status(403).json({ message: 'Wrong token' });
      }
      req.user = payload;
      next();
    });
  }
});

router.get('/', async (req, res) => {
  const { user } = req;
  try {
    const operations = await Operation.find({ user }, { user: 0 }).lean();
    res.status(200).json(operations);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/', async (req, res) => {
  const { user } = req;
  const operation = new Operation({ ...req.body, user });

  try {
    const savedOperation = await operation.save();
    await res.status(200).json(omit(savedOperation.toObject(), 'user'));
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put('/:id', async (req, res) => {
  const { user } = req;
  try {
    const operation = await Operation.findOneAndUpdate(
      { user, _id: req.params.id },
      req.body,
      { new: true }
    ).lean();

    await res.json(omit(operation, 'user'));
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete('/:id', async (req, res) => {
  const { user } = req;
  try {
    const operation = await Operation.findOneAndUpdate(
      { user, _id: req.params.id },
      { deletedDate: Date.now() },
      { new: true }
    );
    res.status(200).json(omit(operation.toObject(), 'user'));
  } catch (error) {
    res.status(500).json({ error });
  }
});

// router.delete('/:id', async (req, res) => {
//   const { user } = req;
//   try {
//     const operation = await Operation.findOneAndRemove({ user, _id: req.params.id });
//     res.status(200).json(omit(operation.toObject(), 'user'));
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

module.exports = router;