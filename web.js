var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var string = "";

app.get('/', function(request, response) {
  string = fs.readFileSync('index.html');
  var buffer = new Buffer(string,"utf-8");
  response.send(buffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
