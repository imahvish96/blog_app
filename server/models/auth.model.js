const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    maxlength: 1000,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
