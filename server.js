var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || '3000';
var app = express();
var db = require('./db/nosql/config.js');
var Cobra = require('./db/nosql/models/cobra.js');

var SQLdb = require('./db/sql/config.js');
var SQLCobra = require('./db/sql/models/cobra.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/angular'));
// app.get('/', function(req, res) {
// 	res.send('Hello!');
// })

app.post('/api/cobras', function(req, res) {
	var name = req.body.name;
	var age = req.body.age;

	Cobra.create({name: name, age: age}, function(err, cobra){
		if(err){
			res.send(err);
		}
		Cobra.find(function(err, cobras) {
			if(err){
				res.send(err);
			}
			res.json(cobras);
		})
	})

})

app.get('/api/cobras', function(req, res){
	Cobra.find(function(err, cobras) {
			if(err){
				res.send(err);
			}
			res.json(cobras);
		});
})

app.post('/api/sqlcobras', function(req, res) {
	var name = req.body.name;
	var age = req.body.age;

	SQLCobra.create({ name: name, age: age})
	.then((SQLCobra) => {
		console.log(SQLCobra);
		res.send(SQLCobra);
	})
})

app.get('/api/sqlcobras', function(req, res) {
	SQLCobra.findAll()
	.then(function(cobras) {
		res.json(cobras);
	})
})

app.listen(port, function() {
	console.log('Listening on: ', port, '!');
})
module.exports = app;