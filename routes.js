var express = require('express')
var router = express.Router()
var fs = require('fs')
var recipes = require('./recipes.json')

module.exports = router

var tempData = [{name:'Cake', imgUrl:'http://matthewpalmer.net/rocket/icon.png'}, {name:'Dessert', imgUrl:'http://matthewpalmer.net/rocket/icon.png'}, {name:'Pies', imgUrl:'http://matthewpalmer.net/rocket/icon.png'}]

router.get('/', (req, res) => {
  // console.log(req.query);
  // if (Object.keys(req.query).length != 0) { //there is no query
  //   res.render('query') //give filtered results
  // } else {
  //   console.log("rendering home");
    res.render('home') //give all results
})

// router.get('/cakes/:id', (req, res) => {
//   var cakes = recipes.foods.find((cakes)=> req.params.id == cakes.id)
//   console.log(cakes);
//   res.render('home', {cakes})
// })


router.get('/cakes/:id', (req, res) => {
  var id = req.params.id
  recipes.find(function(recipe) {
    if (recipe.id == id) {
      res.render('showcake', recipe)
    }
  })

})
