const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, 
    done: {type: Boolean, default: false}
  }, 
  {timestamps:{ currentTime: () => Math.floor(Date.now() / 1000) }}
)

module.exports = mongoose.model('recipes',Recipe)