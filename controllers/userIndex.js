const User = require('../models/user')
const Bcrypt = require('bcryptjs');

const createUser = async (request,response) => {
    // async await only for returning PROMISES
    try { 
      // check if user already exists
      var user = await User.findOne({ username: request.body.username }).exec();
      if (!user) {
    const newUser = new User(request.body)
    await newUser.save() 
    return response.status(201).json(newUser)
      }
      else {
        return response.status(400).json({ message: "username already exists" });
      }
    }
    catch (e) {
      response.status(500).send(e);
    }
  }
  // these have the request, response functions so dont need to put in app.get(). 
  
  const getAllUsers = async (request, response) => {
    const users = await User.find()
    return response.status(200).json(users)
  }
  
  const getUserById = async (request, response) => {
    const { id } = request.params
    const user = await User.findById(id)
    return response.status(200).json(user)
  }
  
  const updateUser = async (request, response) => {
    const { id } = request.params 
    await User.findByIdAndUpdate(id, request.body, { new: true }, (err, user) => {
      if (err) return response.status(500).send(err)
      if (!user) {
        return response.status(500).send('User not found')
      }
      return response.status(200).json(user)
    })
  
  }
  const userLogin =  async (request, response) => {
    try {
        var user = await User.findOne({ username: request.body.username }).exec();
        if(!user) {
            return response.status(400).json({ message: "username invalid" });
        }
        if(!Bcrypt.compareSync(request.body.password, user.password)) {
            return response.status(400).json({ message: "password invalid" });
        }
        return response.json({ message: "Pass" });
    } catch (error) {
        response.status(500).send(error);
    }
};
  const deleteUser = async (request, response) => {
    const { id } = request.params 
    try {
      const user = await User.findByIdAndDelete(id)
      response.status(200).json(user + ' deleted')
    }
    catch (e) {
      return response.send(id + ' not found')
    }
    
  }

  module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    userLogin
  }