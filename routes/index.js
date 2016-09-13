var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('singleview', { title: 'Home' });
});

router.get('/newstudent', function(req, res, next) {
  res.render('newstudent', {title: 'Register'});
});

router.post('/registerstudent' , function (req, res) {

  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;

  // Define where the MongoDB server is
  var url = 'mongodb://104.236.121.86:27017/demodb1';

  // Connect to the server
  MongoClient.connect(url, function(err, db){
    if (err) {
      console.log('Unable to connect to the Server:', err);
    } else {
      console.log('Connected to Server');

      //Get the documents collection
      var collection = db.collection('student');

      //Get the student data passed from the form
      var student = {
        name:{
          first: req.body.fname,
          middle: req.body.mname,
          last: req.body.lname
        },
        email: req.body.email,
        password: req.body.password,
        date: new Date(),
        last_login: 'Never'
      };

      //Insert the student data into the database
      collection.insert([student], function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/");
        }

        //Close the database
        db.close();
      });

    }
  });

});

// router.get('/singleview', function (req, res, next) {
//   res.render('singleview', {title: 'Single View'});
// });

module.exports = router;
