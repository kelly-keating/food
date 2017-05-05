var express = require('express')
var router = express.Router()
var fs = require('fs')

module.exports = router

var tempData = [{name:'Cake', imgUrl:'http://matthewpalmer.net/rocket/icon.png'}, {name:'Dessert', imgUrl:'http://matthewpalmer.net/rocket/icon.png'}, {name:'Pie', imgUrl:'http://matthewpalmer.net/rocket/icon.png'}]

router.get('/', (req, res) => {
  console.log("rendering home");
  res.render('home', {tempData})
})
