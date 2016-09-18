var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Student = require('../../models/student');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  function(email, password, done) {
    Student.getStudentByEmail(email, function(err, user) {
      if (err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }

      Student.comparePassword(password, user.password, function(err, isMatch) {
        if(err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {message: 'Invalid password'});
        }
      });
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Student.getStudentById(id, function(err, user) {
    done(err, user);
  });
});

/*
* [POST]
* Script for loging students in
*/
router.post('/login' ,
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/login', failureFlash: true}),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
