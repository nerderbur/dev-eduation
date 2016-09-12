var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/singleview', function (req, res, next) {
  res.render('singleview', {title: 'Single View'});
});

module.exports = router;