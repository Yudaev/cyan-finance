const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const operationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
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
    type: String, // 28.05.2020; 28/05/2020
    validate: {
      validator: (date) => /(\d{1,2})\D(\d{1,2})\D(\d{4})/.test(date),
      message: props => `${props.value} is not a valid date`,
    },
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
}, {timestamps: {}});

operationSchema.pre('save', function (next) {
  if (this.isModified('date')) {
    const [full, day, month, year] = this.date.match(/(\d{1,2})\D(\d{1,2})\D(\d{4})/);
    this.date = new Date (year, month - 1, day);
  }
  next();
});


module.exports = mongoose.model('Operation', operationSchema, 'operations');
