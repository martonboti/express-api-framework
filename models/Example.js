const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    require: true
  },
});

const Example = mongoose.model('Example', ExampleSchema);

module.exports = { Example };
