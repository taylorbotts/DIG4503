import pokemons from 'json-pokemon'

export default (req, res) => {
  let result = {'error':'Invalid type!'}

  function typeMatch (p) {
    for (let i = 0; i < p.typeList.length; i++) {
      if (p.typeList[i].toLowerCase() == req.query.type.toLowerCase()) {
        return true
      }
    }
  }

  let pokemon = pokemons.filter(typeMatch)

  if (pokemon.length != 0) {
    result = pokemon
  }

  res.json(result)
}