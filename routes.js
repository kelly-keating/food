var express = require('express')
var router = express.Router()
var fs = require('fs')

module.exports = router

var tempData = [{title:'Cake', imgURL:'http://matthewpalmer.net/rocket/icon.png'}, {title:'Dessert', imgURL:'http://matthewpalmer.net/rocket/icon.png'}, {title:'Pies', imgURL:'http://matthewpalmer.net/rocket/icon.png'}]

router.get('/', (req, res) => {
  console.log("rendering home");
  res.render('home', {tempData})
})
