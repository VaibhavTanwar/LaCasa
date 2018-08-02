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

router.get('/' , function(req , res , next) {
	res.render('index' , {title : 'Hahahah'});
});

router.get('/login',function(req,res,next) {
    res.render('login' , {title : 'Login'});
});

router.post('/confirm' , function(req , res) {
   let coll = dbo.collection('users');
   let userObj = JSON.parse(req.query.signup)
   coll.findOne({email : userObj.email} , function(err_find , res_find) {
       if(err_find) throw err_find;
       if(!res_find) {
            coll.insertOne(userObj , function(err_insert , res_insert) {
                if(err_insert) throw err_insert;
                console.log("1 document inserted");
                console.log(res_insert);
            });
       }
       else {
            console.log(res_find);
       }
   });

   res.send('Jaa Simran Jaa');
});

router.post('/login' , function(req,res) {
    let coll = dbo.collection('users');
    let loginObj = JSON.parse(req.query.signup);
    coll.findOne(loginObj , function(err_find , res_find) {
        if(res_find)
            res.send('Success');
        else
            res.send('Failed');
    });
});
module.exports = router;
