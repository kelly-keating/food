var express = require('express')
var router = express.Router()
var fs = require('fs')

module.exports = router

router.get('/', (req, res) => {
  console.log("rendering home");
  res.render('home')
})
