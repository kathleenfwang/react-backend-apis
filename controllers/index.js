
const bodyParser = require('body-parser')
const {
  deleteStreamerByStreamerId,
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
  getUserByUserName,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  userLogin
} = require('./userIndex')
module.exports = {
  getUserByUserName,
  deleteStreamerByStreamerId,
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