var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public')); // looks in public directory, not root directory (protects files)

app.get('/', function(req, res) {
  res.send(__dirname + '\\index.html')
});

app.listen(port, function() {
          console.log('Listening on port ' + port);
});
