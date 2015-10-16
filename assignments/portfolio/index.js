var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;
//
// var corsOptions = {
//   origin: true
// };

// app.use(cors());

// app.get('/', cors(), function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.json({msg: 'This is COS-enabled for all origins!'});
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// app.all('/', function(req, res){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
// });

app.use(express.static(__dirname + '/public')); // looks in public directory, not root directory (protects files)

app.get('/', function(req, res) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(__dirname + '\\index.html')
});

app.post('/', function(req, res) {
    res.send(req.body.spotify);
});

app.listen(port, function() {
          console.log('CORS-enabled web server listening on port ' + port);
});
