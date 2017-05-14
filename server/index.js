var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
var server = http.Server(app);

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
  console.log('dirname: ' + __dirname);
});