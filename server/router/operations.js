const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const omit = require('lodash/omit');
const pick = require('lodash/pick');
const { tokenSecret } = require('../config');

const Operation = require('../models/operation');
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
 * /operations/:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *       - operations
 *     summary: Возвращает список операций
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: pageSize
 *        description: |
 *          ##### Количество возвращаемых записей
 *            *0* - Получить все записи.
 *        in: query
 *        schema:
 *          type: number
 *          default: 30
 *      - name: page
 *        description: Номер страницы.
 *        in: query
 *        schema:
 *          type: number
 *          default: 1
 *      - name: filter
 *        description: |
 *          ##### Фильтрование списка, пример: repetitive,expense
 *            * *repetitive*    - только повторяющиеся операции.
 *            * *expense*       - только расходы (конфликтует с income).
 *            * *income*        - только доходы (конфликтует с expense).
 *            * *deleted*       - удаленные операции.
 *        in: query
 *        schema:
 *          type: string
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
  let pageSize = req.query.pageSize || 30;
  pageSize = parseInt(pageSize);
  let page = parseInt(req.query.page);
  const filterArray = req.query.filter
    ? String(req.query.filter).split(',').map(item => item.trim())
    : [] ;

  const filter = {
    user,
    deletedDate: '',
  };
  if (filterArray.includes('repetitive')) {
    filter.repetitive = true;
    pageSize = 0;
    page = 1;
  }
  if (filterArray.includes('deleted')) {
    filter.deletedDate = { $ne: '' };
  }
  if (filterArray.includes('income')) {
    filter.type = 'income';
  } else if (filterArray.includes('expense')) {
    filter.type = 'expense';
  }

  try {
    const operations = await Operation.find(
      filter,
      { user: 0 },
      {
        limit: pageSize,
        skip: page > 0 ? pageSize * (page-1) : 0,
      }
    ).lean();
    res.status(200).json(operations);
  } catch (error) {
    res.status(500).json(error);
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
  const { user, body } = req;
  const categoryReq = body.category || {};
  const category = await Category.findOne({_id: categoryReq._id, user }) || null;

  const operation = new Operation({
    ...pick(body, [
      'value',
      'type',
      'title',
      'description',
      'date',
      'repetitive',
      'repetitiveDay',
    ]),
    category,
    user
  });

  try {
    const savedOperation = await operation.save();
    await res.status(200).json(omit(savedOperation.toObject(), 'user'));
  } catch (error) {
    res.status(500).json(error);
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
  const { user, body } = req;
  try {
    const operation = await Operation.findOneAndUpdate(
      { user, _id: req.params.id },
      pick(body, [
        'value',
        'type',
        'title',
        'description',
        'category',
        'date',
        'repetitive',
        'repetitiveDay',
      ]),

      { new: true }
    ).lean();

    await res.json(omit(operation, 'user'));
  } catch (error) {
    res.status(500).json(error);
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