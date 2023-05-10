import {v4 as uuidv4} from 'uuid'
import User from '../schema/user-schema.js'
import { response } from 'express'

export const createUser = async (req, res) => {
    const data =req.body
    const ID = uuidv4();
    // users.push({id:uuidv4(), ...user})
    const newUser = new User(data)
    try {
       await newUser.save();
       await res.status(201).json(newUser)
    } catch (error) {
    await res.status(409).json({message:error.message})
    }
}

export const getAllUsers = async (request, response) => {
    try {
      const users = await User.find({})
      response.status(201).json(users)
    } catch (error) {
        response.status(404)
    }
    }

    // /users/2 => req.params {id:2}
export const getUser = (async (req, res) => { 
    try {
        // const user = await User.find({_id: req.params.id})
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
      } catch (error) {
          res.status(404).json({message:error.message})
      }
})

export const deleteUser = (async (req, res) => {
    try {
        await User.deleteOne({_id:req.params.id})
        res.status(201).json("User deleted Successfully");
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

export const updateUser = (async(req, res)=>{
    let user = req.body;
    const editUser = new User(user);

    try {
       await User.updateOne({_id:req.params.id}, editUser)
       res.status(201).json(editUser)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
})