require('dotenv').config({ path: '../.env' })
const bcrypt = require('bcryptjs')
const {
    validateRegisterInputs,
    validateLoginInputs,
} = require('../utils/validators')
const User = require('../models/User')
const { default: axios } = require('axios')

const registerUser = async (req, res) => {
    const { fname,email, password, dob } = req.body

    const { valid, errors } = validateRegisterInputs(
        fname,
        email,
        password,
        dob
    )

    if (!valid) return res.status(400).send({ errors })

    try {
        const foundUser = await User.findOne({ email })
        if (foundUser)
            return res.status(400).send({
                errors: {
                    email: 'Email address already exists!!! Proceed to Login.',
                },
            })

        const hashedPassword = await bcrypt.hash(password, 13)

        const newUser = new User({
            fname:fname,
            email:email,
            password: hashedPassword,
            dob:dob,
            savedPins:[]
        })

        await newUser.save()
        
        return res.status(200).send({
            message: 'User registered successfully! Proceed to Login.',
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    const { valid, errors } = validateLoginInputs(email, password)

    if (!valid) return res.status(400).send({ errors })

    try {
        const foundUser = await User.findOne({ email })
        if (!foundUser)
            return res.status(400).send({
                errors: {
                    email: 'The email you entered does not belong to any account.',
                },
            })
        const matchPassword = await bcrypt.compare(password, foundUser.password)
        if (!matchPassword)
            return res.status(400).send({
                errors: {
                    password: 'The entered password is incorrect',
                },
            })

        // You can choose to respond with user information without generating a token
        return res.status(200).send({
            ID: foundUser._id,
            email,
            Name: foundUser.fname,
            // You can omit the 'userToken' field
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}


const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate('savedPins')
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
 const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
 const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id).populate('savedPins')
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}
 const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

module.exports={ registerUser , loginUser , getUser, getUsers, deleteUser, updateUser }