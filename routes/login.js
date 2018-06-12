var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://srini:srini8865@ds153980.mlab.com:53980/sweet',['login']);

//Get all tasks
router.get('/login', function(req, res, next){
  db.login.find(function(err, login){
    if(err){
        res.send(err);
    }
    res.json(login);
  });
});


//Get single task
router.get('/login/:id', function(req, res, next){
  db.login.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, login){
    if(err){
        res.send(err);
    }
    res.json(login);
  });
});

//Save task
router.post('/login', function(req, res, next){
  // res.status(400);
  var login = req.body;
  res.send(login)
  // if(!login.title || login.isDone + ''){
  //   res.status(400);
  //   res.json({
      
  //     "error" : "Bad Data !!"
  //   })
  // } else {
  //   db.login.save(login, function(err , login){
  //     if(err){
  //       res.send(err)
  //     }
  //     res.json(login)
  //   })
  // }
});

//Delete task
router.delete('/login/:id', function(req, res, next){
  db.login.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, login){
    if(err){
        res.send(err);
    }
    res.json(login);
  });
});

module.exports = router;