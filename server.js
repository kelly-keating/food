var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var router = require('./routes.js')

var app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use('/', router)


module.exports = app
