var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var router = express.Router();


var Schema = mongoose.Schema;

var _cat = new Schema({
    name: { type: String, required: true }
});


var Cat = mongoose.model('Cat', _cat);

/* GET users listing. */
router.get('/', function(req, res, next) {

  Cat.find({}, function (err, docs) {
      if(err){
          throw err;
      }
    res.json(docs);
  });

});

router.delete('/posts'+ "/:cat_id",function(req,res){
    var cat_id=req.params.cat_id;
    var byteLength = Buffer.byteLength(cat_id, 'utf8');

    if(byteLength !== 24){
        return res.status(400).send({message: 'Invalid todo id supplied. Please try again.'});
    }

    Cat.findById(cat_id, function(err, doc){
        if(doc === null){
            return res.status(400).send({message: "No valid todo found with that id."});
        }

        Cat.remove(doc, function(err){
            return res.json({message: "Successfully delete a TODO."});

        });
    });

});



router.post('/posts', function(req, res, next) {
   var name1 =req.body.name;

    var _ct=new Cat({name:name1});

    _ct.save(function(err){
        if(!err){
            res.send('respond with a resource');
        }
        else{
            return console.log(err);
        }

    })

});



router.get('/posts', function(req, res, next) {
    Cat.find({}, function (err, docs) {
        res.json(docs);
    });

});







module.exports = router;
