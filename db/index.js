const mongoose = require('mongoose') 


MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/plantsDatabase' 

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
  console.log('connected')
  })
  .catch(e => {
    console.error('connection error: ', e.message)
  })

const db = mongoose.connection
module.exports = db