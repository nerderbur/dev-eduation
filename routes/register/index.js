var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


/*
* [POST]
* Script for registering a new student.
*/
router.post('/student' , require('./newstudent.js'));

module.exports = router;
