const Express = require('express')
const App = Express()
const port = 80

const MongoDB = require('mongodb')
const MongoClient = MongoDB.MongoClient

const URL = 'mongodb+srv://taylorbotts:GE9dyFZQqHItt8Rf@cluster0-tc9sb.mongodb.net/'

let collection = null

MongoClient.connect(URL, (error, connection) => {
  if (error) {
    throw error
  }

  let database = connection.db('DIG4503-78')
  collection = database.collection('Movies')


})

const cors = require('cors')
App.use(cors())

App.get('/movies/title/:title', (req, res) => {
  let result = {'Error':'Not found'}

  if (collection != null) {
    
    collection.find({'title': new RegExp(req.params.title)})
    .limit(100)
    .toArray()
    .then((cursorArray) => {

      if (cursorArray.length != 0) {
        result = cursorArray
      }

      res.json(result)
    })

  } else {
    res.json(result)
  }

})

App.listen(port, () => {
  console.log('server running...')
})