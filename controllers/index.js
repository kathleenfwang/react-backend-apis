
const bodyParser = require('body-parser')
const { createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe} = require('./recipeIndex')
const {
    createPlant,
    getAllPlants,
    getPlantById,
    updatePlant,
    deletePlant,
} = require ('./plantIndex')

module.exports = {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant,
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
}