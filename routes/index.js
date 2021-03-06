const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
var cors = require('cors')
router.use(cors())
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
router.post('/users', controllers.createUser)
router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
// router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)
router.post('/users/login', controllers.userLogin)
router.post('/streamers', controllers.createStreamer)
router.get('/streamers', controllers.getAllStreamers)
router.get('/streamers/:id', controllers.getStreamerById)
router.get('/streamers/id/:id', controllers.getStreamerByStreamerId)
router.delete('/streamers/id/:id', controllers.deleteStreamerByStreamerId)
router.put('/streamers/:id', controllers.updateStreamer)
router.delete('/streamers/:id', controllers.deleteStreamer)
module.exports = router 