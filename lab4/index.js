const Express = require('express');
const App = Express();
const port = 80;

const chalk = require('chalk');
const pokemons = require('json-pokemon');

App.get("/id/:id", (req,res)=>{
    let error = {'error':'invalid path!'};
    let match = pokemons.filter(pokemon => 
        pokemon.id == req.params.id);

    if(match.length){
        res.send(match);
        console.log(chalk.green('Good path! ' + req.path));
    } else {
        res.send(error);
        console.log(chalk.red('Bad path! ' + req.path));
    }
})

App.get("/name/:name", (req,res)=>{
    let error = { 'error': 'invalid path!' };
    let match = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase() == req.params.name.toLowerCase());

    if (match.length) {
        res.send(match);
        console.log(chalk.green('Good path! ' + req.path));
    } else {
        res.send(error);
        console.log(chalk.red('Bad path! ' + req.path));
    }
})

App.listen(port, ()=>{
    console.log('Server up....')
})