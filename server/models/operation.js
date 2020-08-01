const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');
const Category = require('../models/category');

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
  category: {
    type: mongoose.ObjectId,
    ref: Category,
    index: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  repetitive: {
    type: Boolean,
    default: false,
    index: true,
  },
  repetitiveDay: {
    type: Number,
    default: 1,
  },
  description: {
    type: String,
  },
  deletedDate: {
    type: Date,
  }
}, {timestamps: {}});

module.exports = mongoose.model('Operation', operationSchema, 'operations');
