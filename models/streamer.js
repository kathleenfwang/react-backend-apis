const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Streamer = new Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true } 
  }, 
  {timestamps:true}
)

module.exports = mongoose.model('streamers',Streamer)