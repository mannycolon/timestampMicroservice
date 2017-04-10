var express = require('express')
var moment = require('moment')
var app = express()

app.set('port', process.env.PORT || 8000)

function getResult(date) {
  var validDate = moment(date)
  if(validDate.isValid())
    return {
      unix: moment(date, 'x').format('x')/1000,
      natural: moment(date, "MMMM D, YYYY").format("MMMM D, YYYY")
    }
  else
    return {
      unix: null,
      natural: null
    }
}

app.get('/', function(req, res) {
  res.send('Hello! \n timestamp server now running...')
})

app.get('/:query', function(req, res) {
  var query = req.params.query
  var date = new Date(isNaN(query) ? query : query*1000)
  var result = getResult(date)
  res.json(result)
})

app.listen(app.get('port'), function() {
  console.log("App listening on port " + app.get('port'))
})