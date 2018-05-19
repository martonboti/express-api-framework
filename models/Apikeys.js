const mongoose = require('mongoose');

const Apikeys = mongoose.model('Apikeys', {
  key: {
    type: String,
    required: true,
    minlength: 10,
    trim: true
  }
});

module.exports = { Apikeys };
