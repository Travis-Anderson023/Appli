const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const applicationSchema = new Schema({
  company: {
    type: String,
    required: 'You need to indicate a company!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  date_applied: {
    type: String,
    required: 'You need to add a date!'
  },
  contact_name: {
    type: String,
    required: 'You need to indicate a contact name!'
  },
  contact_phone: {
    type: String,
    trim: true,
  },
  contact_email: {
    type: String,
    required: 'You need to indicate a contact email!',
    trim: true,
  },
  contact_website: {
    type: String,
    trim: true,
  },
  response: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  coverletter: 
    {
      type: Schema.Types.ObjectId,
      ref: 'CoverLetter'
    },
});

const Application = model('Application', applicationSchema);

module.exports = Application;
