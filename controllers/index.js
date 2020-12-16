
const bodyParser = require('body-parser')
const {
  getStreamerByStreamerId,
  createStreamer,
  getAllStreamers,
  getStreamerById,
  updateStreamer,
  deleteStreamer,
} = require('./streamerIndex')
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
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  userLogin
} = require('./userIndex')
module.exports = {
  getStreamerByStreamerId,
  createStreamer,
  getAllStreamers,
  getStreamerById,
  updateStreamer,
  deleteStreamer,
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant,
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe, 
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  userLogin
}