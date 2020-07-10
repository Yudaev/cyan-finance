const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');

const operationSchema = new Schema({
  user: {
    type: mongoose.ObjectId,
    ref: User,
    required: true,
    index: true,
  },
  title: {
    type: String,
  },
  value: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    index: true,
  },
  date: {
    type: Date,
    required: true,
  },
  repetitive: {
    type: Boolean,
    index: true,
  },
  repetitiveDay: {
    type: Number,
  },
  description: {
    type: String,
  },
  deletedDate: {
    type: Date,
  }
}, {timestamps: {}});

module.exports = mongoose.model('Operation', operationSchema, 'operations');
