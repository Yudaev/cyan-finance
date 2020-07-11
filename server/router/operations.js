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

/**
 * @swagger
 *
 * /operations/:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *       - operations
 *     summary: Возвращает список операций
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Массив с операциями
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Operation'
 */
router.get('/', async (req, res) => {
  const { user } = req;
  try {
    const operations = await Operation.find({ user }, { user: 0 }).lean();
    res.status(200).json(operations);
  } catch (error) {
    res.status(500).json({ error });
  }
});


/**
 * @swagger
 * /operations/:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *       - operations
 *     summary: Добавление операции
 *     produces:
 *       - application/json
 *     requestBody:
 *      $ref: '#/components/requestBodies/Operation'
 *     responses:
 *       200:
 *         description: Возвращает добавленную операцию
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Operation'
 */
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


/**
 * @swagger
 * /operations/{id}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - operations
 *     summary: Изменение операции по ID
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: id
 *        description: _id операции
 *        in: path
 *        schema:
 *          type: string
 *          required: true
 *     requestBody:
 *      $ref: '#/components/requestBodies/Operation'
 *     responses:
 *       200:
 *         description: Возвращает измененную операцию
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Operation'
 */
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

/**
 * @swagger
 * /operations/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *      - operations
 *     summary: Удаление операции по ID
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: id
 *        description: _id операции
 *        in: path
 *        schema:
 *          type: string
 *          required: true
 *     responses:
 *       200:
 *         description: Возвращает удаленную операцию
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Operation'
 */
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