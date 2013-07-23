var express = require('express');
var app = express();
app.use(express.logger());

var string = fs.readFile('index.html', 'utf8');
var buffer = new Buffer(string,"utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
