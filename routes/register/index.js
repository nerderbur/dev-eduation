var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


/*
* [POST]
* Script for registering a new student.
*/
router.post('/student' , require('./newstudent.js'));

/*
* [POST]
* Script for registering a new parent.
*/
router.post('/parent' , require('./newparent.js'));

/*
* [GET]
* Page for registering.
*/
router.get('/', function (req, res, next) {
  res.render('register', {title: 'Register | Devwright Education', layout:false});
});

module.exports = router;
