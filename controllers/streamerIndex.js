const Streamer = require('../models/streamer')
const createStreamer = async (req, res) => {
    // async await only for returning PROMISES 
    const streamer = new Streamer(req.body)
    await streamer.save() 
    return res.status(201).json(streamer)
  }
  
  // these have the req, res functions so dont need to put in app.get(). 
  const getAllStreamers = async (req, res) => {
    const streamers = await Streamer.find()
    return res.status(200).json(streamers)
  }
  const getStreamerByStreamerId = async (req,res) => {
    const {id} = req.params 
    const streamer = await Streamer.findOne({ id: id }) 
    return res.status(200).json(streamer)
  }
  const getStreamerById = async (req, res) => {
    const { id } = req.params
    const streamer = await Streamer.findById(id)
    return res.status(200).json(streamer)
  }
  
  const updateStreamer = async (req, res) => {
    const { id } = req.params 
    await Streamer.findByIdAndUpdate(id, req.body, { new: true }, (err, streamer) => {
      if (err) return res.status(500).send(err)
      if (!streamer) {
        return res.status(500).send('Streamer not found')
      }
      return res.status(200).json(streamer)
    })
  
  }
  const deleteStreamerByStreamerId = async (req,res) => {
    const { id } = req.params 
    try {
      const streamer = await Streamer.findOneAndDelete({id:id})
      res.status(200).json(streamer + ' deleted')
    }
    catch (e) {
      return res.send(id + ' not found')
    }
  }
  const deleteStreamer = async (req, res) => {
    const { id } = req.params 
    try {
      const streamer = await Streamer.findByIdAndDelete(id)
      res.status(200).json(streamer + ' deleted')
    }
    catch (e) {
      return res.send(id + ' not found')
    }
    
  }
  module.exports = {
    deleteStreamerByStreamerId,
    getStreamerByStreamerId,
    createStreamer,
    getAllStreamers,
    getStreamerById,
    updateStreamer,
    deleteStreamer,
  }

