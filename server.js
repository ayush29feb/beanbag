// ==========
// BASE SETUP
// ==========

// call the packages we need
var express 	= require('express');							// call express
var app 		= express();									// define our app using express
var bodyParser 	= require('body-parser');
var session     = require('express-session');
var path 		= require('path');
var port = 8000;


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('index', { name: 'Bean Bag'});
});

app.listen(port);
console.log('The Hacking Begins at Port ' + port);