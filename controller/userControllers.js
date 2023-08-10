const asyncHandler =  require("express-async-handler")
const connection = require("../config/dbConfig")
const hash = require("bcryptjs")
const User = require("../model/userModel")
const jwt = require("jsonwebtoken")
const { response } = require("express")
require("dotenv").config()

connection()

const RegisterUser =  asyncHandler(async (req, res) => {
    const reqBody = await req.body
    const  {username, email, password} = reqBody
    if(!username || !password || !email){
        res.status(400)
        throw new Error("All field must be filled")
    }
    const user = await User.findOne({email})

    if(user){
        res.status(400)
        throw new Error("email already exist")
    } else{
        const hashPassword = await hash.hash(password, 10)
        console.log(hashPassword)
        const newUser = await User.create({
            username,
            email,
            password: hashPassword
        });

        res.status(200).json({success:true, message: `${username}, created successfully`, data: newUser});
    }
})

const loginUser =  asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({ email });
    if(!user){
        res.status(400)
        throw new Error(`${email} does not exist`)
    }
    const compare = await hash.compare(password, user.password);
    if(!compare){
        res.status(400)
        throw new Error("Invalid password")
    } else {
        console.log("sure", user)

        const token =  jwt.sign(
            {
                user: {
                  username: user.username,
                  email: user.email,
                  id: user.id,
                },
            },
            process.env.TOKEN_SECRET, {expiresIn: "1m"})

        return res.status(200).json({success: true, data: token})
    }
})

const getAllProfiles =  asyncHandler(async (req, res) => {
   const allProfiles = await User.find()
   return res.status(200).json(allProfiles)
})

const getProfile =  asyncHandler(async (req, res) => {
    const profile = await User.findById(req.params.id)
    return res.status(200).json(profile)
})

const getMyProfile =  asyncHandler(async (req, res) => {
    res.json(req.user)
    console.log(req.user)
})


module.exports = {
    RegisterUser,
    loginUser,
    getProfile,
    getAllProfiles,
    getMyProfile

}