const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const urldb = "mongodb://localhost:27017/fooooooo";
const bodyParser = require('body-parser');

var dbo;

MongoClient.connect(urldb , { useNewUrlParser: true } , function(err , db){
	if(err)
		throw err;
	dbo = db.db('users');
});

router.post('/confirm' , function(req , res) {
  let coll = dbo.collection('users');
  let userObj = JSON.parse(req.query.obj);
  coll.findOne({email : userObj.email} , function(err_find , res_find) {
      if(err_find) throw err_find;
      if(!res_find) {
           coll.insertOne(userObj , function(err_insert , res_insert) {
               if(err_insert) throw err_insert;
               console.log("1 document inserted");
               res.send('SUCCESS');
           });
      }
      else {
           console.log(res_find);
      }
  });
});

router.post('/login' , function(req,res) {
  let coll = dbo.collection('users');
  let loginObj = JSON.parse(req.query.obj);
  coll.findOne(loginObj , function(err_find , res_find) {
    if(res_find)
      res.send('SUCCESS');
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about1.html', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/indexbanner.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/portfolio1.html', function(req, res, next) {
  res.render('portfolio', { title: 'Express' });
});
router.get('/loginform.html', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});
router.get('/details', function(req, res, next) {
  res.render('details', { title: 'Express' });
});


module.exports = router;
