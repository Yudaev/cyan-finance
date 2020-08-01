const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const omit = require('lodash/omit');
const pick = require('lodash/pick');
const { tokenSecret } = require('../config');

const Category = require('../models/category');

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
 * /categories/:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *       - categories
 *     summary: Возвращает список категорий
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Массив с категориями
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Category'
 */
router.get('/', async (req, res) => {
  const { user } = req;
  const filter = {
    user,
    deletedDate: '',
  };
  try {
    const items = await Category.find(
      filter,
      { user: 0 },
    ).lean();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});


/**
 * @swagger
 * /categories/:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *       - categories
 *     summary: Добавление категории
 *     produces:
 *       - application/json
 *     requestBody:
 *      $ref: '#/components/requestBodies/Category'
 *     responses:
 *       200:
 *         description: Возвращает добавленную категорию
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 */
router.post('/', async (req, res) => {
  const { user, body } = req;
  const title = body.title && body.title.trim() || null;
  const item = new Category({ title, user });

  try {
    const savedItem = await item.save();
    await res.status(200).json(omit(savedItem.toObject(), 'user'));
  } catch (error) {
    res.status(500).json(error);
  }
});


/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *       - categories
 *     summary: Редактирование категории
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: id
 *        description: _id категории
 *        in: path
 *        schema:
 *          type: string
 *          required: true
 *     requestBody:
 *      $ref: '#/components/requestBodies/Category'
 *     responses:
 *       200:
 *         description: Возвращает измененную категорию
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 */
router.put('/:id', async (req, res) => {
  const { user, body } = req;
  try {
    const item = await Category.findOneAndUpdate(
      { user, _id: req.params.id },
      pick(body, 'title'),
      { new: true }
    ).lean();

    await res.json(omit(item, 'user'));
  } catch (error) {
    res.status(500).json(error);
  }
});

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *      - categories
 *     summary: Удаление категории по ID
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: id
 *        description: _id categories
 *        in: path
 *        schema:
 *          type: string
 *          required: true
 *     responses:
 *       200:
 *         description: Возвращает удаленную категорию
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 */
router.delete('/:id', async (req, res) => {
  const { user } = req;
  try {
    const item = await Category.findOneAndUpdate(
      { user, _id: req.params.id },
      { deletedDate: Date.now() },
      { new: true }
    );
    res.status(200).json(omit(item.toObject(), 'user'));
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.delete('/:id', async (req, res) => {
//   const { user } = req;
//   try {
//     const operation = await Operation.findOneAndRemove({ user, _id: req.params.id });
//     res.status(200).json(omit(operation.toObject(), 'user'));
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = router;