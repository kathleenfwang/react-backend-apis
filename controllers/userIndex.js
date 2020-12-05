const User = require('../models/user')
const createUser = async (req, res) => {
    // async await only for returning PROMISES 
    const user = new User(req.body)
    await user.save() 
    return res.status(201).json(user)
  }
  
  // these have the req, res functions so dont need to put in app.get(). 
  
  const getAllUsers = async (req, res) => {
    const users = await User.find()
    return res.status(200).json(users)
  }
  
  const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json(user)
  }
  
  const updateUser = async (req, res) => {
    const { id } = req.params 
    await User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
      if (err) return res.status(500).send(err)
      if (!user) {
        return res.status(500).send('User not found')
      }
      return res.status(200).json(user)
    })
  
  }
  
  const deleteUser = async (req, res) => {
    const { id } = req.params 
    try {
      const user = await User.findByIdAndDelete(id)
      res.status(200).json(user + ' deleted')
    }
    catch (e) {
      return res.send(id + ' not found')
    }
    
  }

  module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
  }