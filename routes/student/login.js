var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = passport.authenticate('local', {successRedirect:'/', failureRedirect:'/login', failureFlash: true}),
function(req, res) {
  res.redirect('/');
};
