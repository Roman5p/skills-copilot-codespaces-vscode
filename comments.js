// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

// Set up the server
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Set up the route
app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    res.json(comments);
  });
});

app.listen(3000);
console.log('Server started: http://localhost:3000/');