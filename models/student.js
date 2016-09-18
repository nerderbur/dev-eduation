var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Student Schema
var StudentSchema = mongoose.Schema({
  name : {
    fname: { type: String },
    mname: { type: String },
    lname: { type: String }
  },
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
}, {collection: 'student'});

var Student = module.exports = mongoose.model('Student', StudentSchema);

module.exports.createStudent = function(newStudent, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newStudent.password, salt, function(err, hash) {
      newStudent.password = hash;
      newStudent.save(callback);
    });
  });
}
