const db = require('../db')
const Recipe = require('../models/recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const recipes = [
    { name: 'Orange Chicken', description: 'chicken, orange, soy sauce, vinegar, agave, flour, beat egg', image: 'https://www.modernhoney.com/wp-content/uploads/2018/01/Chinese-Orange-Chicken-2-1024x729.jpg' },
  ]
  
  await Recipe.insertMany(recipes)
  console.log('created recipes')

}

const run = async () => {
  await main()
  db.close() 
}

run() 