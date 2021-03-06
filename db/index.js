require('dotenv').config();
const mongoose = require('mongoose') 


MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
  console.log('connected')
  })
  .catch(e => {
    console.error('connection error: ', e.message)
  })

const db = mongoose.connection
module.exports = db