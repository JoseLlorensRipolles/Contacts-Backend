var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var url = 'mongodb://localhost:27017/test';

app.get('/',function(req,res){
	res.send('Hello World');
});

app.post('/contacts',function(req,res){
	//MongoClient.connect(url,function(err,db){
	//assert.equal(null,err);
	console.log("Connected correctly to dbserver.");
	console.log(req.body);
	//db.close;
//})
})

app.listen(3000,function(){
	console.log("Server listening in 3000");
})




