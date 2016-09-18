var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('singleview', { title: 'Home' });
});

// router.get('/newstudent', function(req, res, next) {
//   res.render('newstudent', {title: 'Register'});
// });

// router.get('/singleview', function (req, res, next) {
//   res.render('singleview', {title: 'Single View'});
// });

module.exports = router;
