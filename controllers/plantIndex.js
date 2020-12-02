const Plant = require('../models/plant')
const createPlant = async (req, res) => {
    // async await only for returning PROMISES 
    const plant = new Plant(req.body)
    await plant.save() 
    return res.status(201).json(plant)
  }
  
  // these have the req, res functions so dont need to put in app.get(). 
  
  const getAllPlants = async (req, res) => {
    const plants = await Plant.find()
    return res.status(200).json(plants)
  }
  
  const getPlantById = async (req, res) => {
    const { id } = req.params
    const plant = await Plant.findById(id)
    return res.status(200).json(plant)
  }
  
  const updatePlant = async (req, res) => {
    const { id } = req.params 
    await Plant.findByIdAndUpdate(id, req.body, { new: true }, (err, plant) => {
      if (err) return res.status(500).send(err)
      if (!plant) {
        return res.status(500).send('Plant not found')
      }
      return res.status(200).json(plant)
    })
  
  }
  
  const deletePlant = async (req, res) => {
    const { id } = req.params 
    try {
      const plant = await Plant.findByIdAndDelete(id)
      res.status(200).json(plant + ' deleted')
    }
    catch (e) {
      return res.send(id + ' not found')
    }
    
  }
  module.exports = {
    createPlant,
    getAllPlants,
    getPlantById,
    updatePlant,
    deletePlant,
  }