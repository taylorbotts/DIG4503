import getPokemon from 'json-pokemon'

export default (req, res) => {

  let result = {'error': 'Could not find ID: ' + req.query.id }

  let pokemon = getPokemon.filter(p => p.id == req.query.id)

  if (pokemon !== null) {
    result = pokemon
  }

  res.json(result)

}