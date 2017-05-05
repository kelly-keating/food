var express = require('express')
var router = express.Router()
var fs = require('fs')
var recipes = require('./recipes.json')

module.exports = router

router.get('/', (req, res) => {
    res.redirect('/cakes')
})

router.get('/cakes', (req, res) => {
  res.render('home', {recipes})
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

router.get('/newcake', (req,res) => {
  res.render('newcake')
})

var cakesCopy

router.post('/newcake', (req,res) =>{
  fs.writeFile('./recipes.json', JSON.stringify(req.body), (err) => {
  recipes.push(req.body)
   if (err) {
     console.log(err);
   } else res.redirect(`/cakes/${req.params.id}`)
 })
