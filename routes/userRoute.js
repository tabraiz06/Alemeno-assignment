const express= require('express')
const User= require('../model/userModel')
const router= express.Router()
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const secret_key= process.env.SECRET_KEY
 
router.post('/register', async(req,res)=>{
    const {name,email,phone,password}=req.body
    try {
       const userExist= await User.findOne({email}) 
       if(userExist){
        res.status(400).json({message:'email already registerd'})
        
       }
       else{
        const securePassword=await bcrypt.hash(password,10)
        const newUser= await User.create({name, email, phone, password:securePassword})
        const data={
         user: newUser.id
        }
        const Token= await jwt.sign(data, secret_key)
        res.status(200).json({message:'registration successfull',  Token})
       }
       
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post('/login', async(req,res)=>{
    const {email,password}=req.body
    try {
        const userExist= await User.findOne({email})  
        if(!userExist){
            res.status(400).json({message:'invalid credentials'})
           }
       const comparePassword= await bcrypt.compare(password,userExist.password) 
       if(!comparePassword){
        res.status(400).json({message:'invalid password'})
       }  
       const data= {
        user:userExist.id
       } 
       const Token= await jwt.sign(data, secret_key)
       res.status(200).json({message:'login successfull',  Token})

    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports= router