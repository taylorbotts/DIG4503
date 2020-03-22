const Express = require('express')
const App = Express()
const port = 80
const Database = require('./database.js')

let database = new Database ()

App.get('/movies/name/:name', (req, res) => {
  let result = {'error': 'could not find'}

  // Promise approach
  database.findTitle(req.params.title).then((movie) => {
    if (movie != null) {
      result = movie
    }

    res.json(result)
  })
})

App.get('/movies/score/:score', (req, res) => {
  let result = {'error': 'could not find'}

  // Callback approach
  let movie = database.findScore(req.params.score)

  if (movie != null) {
    result = movie
  }

  res.json(result)
})

App.listen(port, () => {
  console.log('server running...')
})