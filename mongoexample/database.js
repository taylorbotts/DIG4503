const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://taylorbotts:GE9dyFZQqHItt8Rf@cluster0-tc9sb.mongodb.net/'

class Database {
  constructor () {
    
    this.collection = null
    this.connection = null
    
    MongoClient.connect(url, (err, connection) => {

      if (err) {
        throw err
      }

      this.connection = connection

      const database = connection.db('DIG4503-78')
      this.collection = database.collection('Movies')

    })
  }

  findScore (score) {
    // MongoDB callback request
    if (this.collection) {
      this.collection.findOne({
        'score': score
      }, {}, (error, result) => {
        return result
      })
    } else {
      return null
    }
  }

  findTitle (title) {
    // MongoDB promise request
    if (this.collection != null) {
      return this.collection.findOne({'title': title})
    }
  }

}

module.exports = Database