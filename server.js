const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
  extended: true 
}))

const router = require('./router')(app)


app.get('/', function (req, res) {
  res.send('Hello world 123')
})


app.listen(5500,function () {
    console.log('Example app listening on port 5500!')
  })

  module.exports = app