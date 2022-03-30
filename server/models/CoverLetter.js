const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const coverletterSchema = new Schema({
  text: {
    type: String,
    required: 'You need to have a cover letter!',
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const CoverLetter = model('CoverLetter', coverletterSchema);

module.exports = CoverLetter;
