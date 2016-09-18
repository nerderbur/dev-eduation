var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Parent Schema
var ParentSchema = mongoose.Schema({
  name: {
    fname: { type: String },
    lname: { type: String }
  },
  password: {
    type: String
  },
  email: {
    type: String,
    index: true
  }
}, {collection: 'parent'});

var Parent = module.exports = mongoose.model('Parent', ParentSchema);

module.exports.createParent = function(newParent, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newParent.password, salt, function(err, hash) {
      newParent.password = hash;
      newParent.save(callback);
    });
  });
}
