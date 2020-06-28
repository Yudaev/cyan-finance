const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const { saltRounds } = require('../config.js');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    const salt = bcryptjs.genSaltSync(parseInt(saltRounds));
    this.password = bcryptjs.hashSync(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = function (candidate) {
  return bcryptjs.compareSync(candidate.toString(), this.password);
}

module.exports = mongoose.model('User', userSchema, 'users');
