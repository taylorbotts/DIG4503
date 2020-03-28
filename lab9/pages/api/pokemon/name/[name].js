import getPokemon from 'json-pokemon'

export default (req, res) => {

  let result = {'error':'Could not find name!'}

  let pokemon = getPokemon.filter(p => p.name.toLowerCase() == req.query.name.toLowerCase())

  if (pokemon !== null) {
    result = pokemon
  }

  res.json(result)

}