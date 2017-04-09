// http://expressjs.com/en/starter/hello-world.html
var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World! \n testing server...')
})

app.listen(3000, function() {
  console.log("Example app listening on port 3000!")
})

// to test run node helloWorld.js 
// Then, load http://localhost:3000/ in a browser to see the output.