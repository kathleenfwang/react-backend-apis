const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('root')) 

router.post('/plants', controllers.createPlant)
router.get('/plants', controllers.getAllPlants)
router.get('/plants/:id', controllers.getPlantById)
router.put('/plants/:id', controllers.updatePlant)
router.delete('/plants/:id', controllers.deletePlant)
router.post('/recipes', controllers.createRecipe)
router.get('/recipes', controllers.getAllRecipes)
router.get('/recipes/:id', controllers.getRecipeById)
router.put('/recipes/:id', controllers.updateRecipe)
router.delete('/recipes/:id', controllers.deleteRecipe)

module.exports = router 