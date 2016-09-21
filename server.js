var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var assert = require('assert');

var express = require('express');
var app = express();

varJSON = require('JSON');


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support for encoded bodies

var url = 'mongodb://localhost:27017/test';

app.get('/api/contacts',function(req,res){
	MongoClient.connect(url,function(err,db){
		if(!err){
			db.collection('contacts').find().toArray(function(err,docs){
				if(!err){
					res.setHeader('Content-type','application/json');
					//res.send(JSON.stringify(docs));
					res.send(docs);
					console.log("Contact sended correctly")
				}
			})
		}
	})
});


app.post('/api/addContact', function(req, res) {
    console.log(req.body.name + " -> " + req.body.phone);
    MongoClient.connect(url,function(err,db){
    	if(!err){
    		db.collection('contacts').insertOne({
    			name: req.body.name,
    			phone: req.body.phone
    		});
    	}
    })
    res.send(req.body.name + "Saved correctly");
    db.close();
});

app.listen(3000,function(){
	console.log("Server listening in 3000");
})




