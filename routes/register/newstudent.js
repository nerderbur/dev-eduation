var mongodb = require('mongodb');

var Student = require('../../models/student');

module.exports = function (req, res) {

  var fname = req.body.fname;
  var mname = req.body.mname;
  var lname = req.body.lname;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  // Validation
  var newStudent = new Student({
    name: {
      fname: fname,
      mname: mname,
      lname: lname
    },
    email: email,
    username: username,
    password: password
  });

  Student.createStudent(newStudent, function(err, student) {
    if(err) throw err;
    console.log(student);
  });

  res.redirect('/');

};
