var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var string = fs.readFileSync('index.html');
  var buffer = new Buffer(string.toString());
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
