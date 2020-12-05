const User = require('../models/user')
const Bcrypt = require('bcryptjs');

const createUser = async (request, response) => {
    // async await only for returning PROMISES 
    try {
      request.body.password = Bcrypt.hashSync(request.body.password, 10);
      var user = new User(request.body);
      var result = await user.save();
      response.send(result);
  } catch (error) {
      response.status(500).send(error);
  }
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
  const userLogin =  async (request, response) => {
    try {
        var user = await User.findOne({ username: request.body.username }).exec();
        if(!user) {
            return response.status(400).send({ message: "username invalid" });
        }
        if(!Bcrypt.compareSync(request.body.password, user.password)) {
            return response.status(400).send({ message: "password invalid" });
        }
        return response.send({ message: "Pass" });
    } catch (error) {
        response.status(500).send(error);
    }
};
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
    deleteUser,
    userLogin
  }