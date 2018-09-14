var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('static'));

app.get('/*', function (req, res) {
  res.sendfile(path.join(__dirname, '/static/main.html'));
});


var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port)
});
