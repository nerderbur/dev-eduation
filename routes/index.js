var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Home', user: req.user.email });
});

router.get('/login', function (req, res, next) {
  res.render('login', {title: 'Log In - Devwright Education', layout: false});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/login');
	}
}

router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/login');
});

// router.get('/newstudent', function(req, res, next) {
//   res.render('newstudent', {title: 'Register'});
// });

// router.get('/singleview', function (req, res, next) {
//   res.render('singleview', {title: 'Single View'});
// });

module.exports = router;
