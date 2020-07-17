const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');

const categorySchema = new Schema({
  user: {
    type: mongoose.ObjectId,
    ref: User,
    required: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  deletedDate: {
    type: Date,
  }
}, {timestamps: {}});

module.exports = mongoose.model('Category', categorySchema, 'categories');
