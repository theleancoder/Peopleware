var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  id: String,
  email: String,
  password: String
});
