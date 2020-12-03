const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, 
    done: {type: Boolean, default: false},
    date: {type: Number, default: Math.floor(Date.now() / 1000) }
  }, 
 {timestamps:true}
)

module.exports = mongoose.model('recipes',Recipe)