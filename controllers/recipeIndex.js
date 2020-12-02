const Recipe = require('../models/recipe')
const createRecipe = async (req, res) => {
    // async await only for returning PROMISES 
    const recipe = new Recipe(req.body)
    await recipe.save() 
    return res.status(201).json(recipe)
  }
  
  // these have the req, res functions so dont need to put in app.get(). 
  
  const getAllRecipes = async (req, res) => {
    const recipes = await Recipe.find()
    return res.status(200).json(recipes)
  }
  
  const getRecipeById = async (req, res) => {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    return res.status(200).json(recipe)
  }
  
  const updateRecipe = async (req, res) => {
    const { id } = req.params 
    await Recipe.findByIdAndUpdate(id, req.body, { new: true }, (err, recipe) => {
      if (err) return res.status(500).send(err)
      if (!recipe) {
        return res.status(500).send('Recipe not found')
      }
      return res.status(200).json(recipe)
    })
  
  }
  
  const deleteRecipe = async (req, res) => {
    const { id } = req.params 
    try {
      const recipe = await Recipe.findByIdAndDelete(id)
      res.status(200).json(recipe + ' deleted')
    }
    catch (e) {
      return res.send(id + ' not found')
    }
    
  }

  module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
  }