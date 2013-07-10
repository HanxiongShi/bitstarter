var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var string = "";

app.get('/', function(request, response) {
  
  fs.readFileSync('index.html', function(err,data){
    if(err) throw err;
    console.log(data);
    var buffer = new Buffer(data, "utf8");
    response.send(buffer.toString());
    console.log('index read to buffer');
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
