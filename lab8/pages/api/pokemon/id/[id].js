import getPokemon from 'json-pokemon/getPokemon'

export default (req, res) => {

  let result = {'error': 'Could not find ID' }

  let pokemon = getPokemon.getPokemonById(req.query.id)

  if (pokemon !== null) {
    result = pokemon
  }

  res.json(result)

}