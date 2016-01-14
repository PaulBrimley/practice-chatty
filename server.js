var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 8080;

app.use(bodyParser.json());
app.options('/',function(req, res, next) {

    res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self'  devmountain.github.io"
    }).send();
})

var messages = ['Hello', 'This is interesting', 'I am trying to understand what I am doing'];

app.get('/', function(req, res, next) {
	res
	.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
	})
	.send(messages);
});

app.post('/', function(req, res, next) {
	messages.push(req.body.message);
	res
	.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self'  devmountain.github.io"
	})
	.send(messages);
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});