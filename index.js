var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router()
var app = express()

router.use(function (req, res, next) {
  console.log('Time: ', Date.now())
  console.log('Params: ', req.params)
  console.log('Query: ', req.query)
  console.log('Body: ', req.body)
  console.log('Path: ', req.path)
  console.log('Method: ', req.method)
  console.log('------------------')
  next()
})

router.all('/', function (req, res) {
  res.sendStatus(200)
})

router.all(/(\d{3})/, function (req, res) {
  var statusCode = parseInt(req.params[0], 10)
  res.sendStatus(statusCode)
})

app.use(bodyParser.text({ type: '*/*' }))
app.use(router)

app.listen(3000, function () {
  console.log('pong listening on port 3000!')
})
