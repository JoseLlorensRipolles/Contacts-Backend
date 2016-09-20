var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var url = 'mongodb://localhost:27017/test';

app.get('/',function(req,res){
	res.send('Hello World');
});

// POST http://localhost:8080/api/users
// parameters sent with 
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
    res.send(req.body.name);
    db.close();
});

app.listen(3000,function(){
	console.log("Server listening in 3000");
})




