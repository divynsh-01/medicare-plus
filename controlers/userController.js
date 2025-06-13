// in this we will create api logic for the users like login, register, getprofile,updateprofile,bookappointment,cancelapp,dispplaying the booked app, payment gateway


 
import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
// API to register the user
const registerUser=async(req,res)=>{
  try {
    const {name,email,password}=req.body
    if(!email || !name || !password){
      return res.json({success:false,message:"Missing Details"})
    }
    //validating email formate
    if(!validator.isEmail(email)){
      return res.json({success:false,message:"Enter a valid Email"}) 
    }
  //validating strong pass
    if(password.length<8){
      return res.json({success:false,message:"Enter a strong password"})
    }
    // hashing user password
     const salt=await bcrypt.genSalt(10)
     const hashedPassword=await bcrypt.hash(password,salt)

     const userData={
      name,
      email,
      password:hashedPassword
     }
      //save the user data into the database

      const newUser= new userModel(userData)
      const user=await newUser.save()
      const token=jwt.sign({id:user._id},process.env.JWT_SECRET)

      res.json({success:true,token})
       




  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
    
  }
}

//API for user login
const loginUser=async(req,res)=>{
  try {
    const {email,password}=req.body
    const user = await userModel.findOne({email})
    if(!user){
       return res.json({success:false,message:"User does not exist"})
    }
    
  //match the pass if the user exist
  const isMatch=await bcrypt.compare(password,user.password)

  if(isMatch){
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.json({success:true,token})
  }
  else{
    res.json({success:true,message:"Invalid password"})
  }

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}

//API to get user profile data
const getProfile=async(req,res)=>{
  try {
    const {userId}=req.body
    //find the user
    const userData=await userModel.findById(userId).select('-password')
    res.json({success:true,userData})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
    
  }
}

export {registerUser,loginUser,getProfile}