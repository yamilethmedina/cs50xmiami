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


app.get('/login', function(req, res) {
var scopes = ['user-read-private', 'user-read-email', 'playlist-modify-public', 'playlist-modify-private'];
var my_client_id = '5fe01282e44241328a84e7c5cc169165';
var redirect_uri = 'http://localhost:3000/callback';
res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + my_client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri));
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

<<<<<<< HEAD
// app.post('/', function(req, res) {
//     res.send(req.body.spotify);
// });

=======
>>>>>>> parent of 3d1b93a... might change button to form?
app.listen(port, function() {
          console.log('CORS-enabled web server listening on port ' + port);
});
