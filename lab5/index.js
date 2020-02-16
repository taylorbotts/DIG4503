const Express = require ('express')
const App = Express ()
const port = 80

const chalk = require ('chalk')
const pokemons = require ('json-pokemon')

App.use ('/', Express.static ('public'))

App.get ('/id/:id', (req,res) => {
  let result = {'error':'Invalid ID, Pokemon not found'}
  let match = pokemons.filter (pokemon => 
              pokemon.id == req.params.id)
  
  if (match.length) {
    result = match;
    console.log (chalk.green ('Good path: ' + req.path))
  } else {
    console.log (chalk.red ('Bad path: ' + req.path))
  }
  res.send (result)
})

App.get ('/name/:name', (req,res) => {
  let result = {'error':'Invalid name, Pokemon not found'}
  let match = pokemons.filter (pokemon => 
              pokemon.name.toLowerCase () == req.params.name.toLowerCase () )
  if (match.length) {
    result = match
    console.log (chalk.green ('Good path: ' + req.path))
  } else {
    console.log (chalk.red ('Bad path: ' + req.path))
  }
  res.send (result)
})

App.listen (port, () => {
  console.log ('Server running...')
})