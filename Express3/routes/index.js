var express = require('express');
var router = express.Router();

var db = require('monk')('mongodb://localhost/course');



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hello world');
  var collection = db.get("grades");
  collection.find(function(err, result) {
    if (err) throw err;
   // res.json(result);
    res.render('index', { title: result });
  });

 // res.render('index', { title: 'Express' });
});



module.exports = router;
