var express = require('express')
var router = express.Router()
var fs = require('fs')
var recipes = require('./recipes.json')

module.exports = router

router.get('/', (req, res) => {
    res.render('home')
})


router.get('/cakes/:id', (req, res) => {
  var id = req.params.id
  console.log(recipes);
  var recipe = recipes.find(function(recipe) {
   return recipe.id == id
  })
  if (recipe) {
    res.render('showcake', recipe)
  } else {
    res.send('couldnt find it')
  }
})
