var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Student Schema
var StudentSchema = mongoose.Schema({
  name : {
    fname: { type: String },
    mname: { type: String },
    lname: { type: String }
  },
  password: {
    type: String
  },
  email: {
    type: String,
    index: {
      unique: true,
      dropDups: true
    }
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

module.exports.getStudentByEmail = function(email, callback) {
  var query = {email: email};
  Student.findOne(query, callback);
}

module.exports.getStudentById = function(id, callback) {
  Student.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
