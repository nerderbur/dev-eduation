var mongodb = require('mongodb');

var Parent = require('../../models/parent');

module.exports = function (req, res) {

  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  // Validation
  var newParent = new Parent({
    name: {
      fname: fname,
      lname: lname
    },
    email: email,
    username: username,
    password: password
  });

  Parent.createParent(newParent, function(err, parent) {
    if (err) throw err;
    console.log(parent);
  });

  res.redirect('/');

};
