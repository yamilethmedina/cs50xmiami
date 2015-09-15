var express = require('express')
var app = express()
 
app.get('/', function (req, res) { // change prefix from default URL endpoint (ex. if it said '/pirate', you'd have to go to localhost:3000/pirate to see anything'')

  console.log(req);
  res.send('Hello World') // response on server (program any response)
})
 
app.listen(3000) // listens on port 3000