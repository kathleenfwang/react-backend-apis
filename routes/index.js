const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('root')) 

router.post('/plants', controllers.createPlant)
router.get('/plants', controllers.getAllPlants)
router.get('/plants/:id', controllers.getPlantById)
router.put('/plants/:id', controllers.updatePlant)
router.delete('/plants/:id', controllers.deletePlant)

module.exports = router 