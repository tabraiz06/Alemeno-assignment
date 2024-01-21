const express= require ('express')
const Courses= require('../model/courseModel')
const enrolledCourses= require('../model/enrolledCourseModel')
const router= express.Router()
const verifyToken= require('../middleware/verifyToken')


router.get('/courses', async(req,res)=>{
    try {
        const courses= await Courses.find()
        
        res.status(200).json(courses) 
    } catch (error) {
       res.status(400).json({error:error.message}) 
    }
})
router.get('/courses/:id', async(req,res)=>{
    try {
        const filteredcourses= await Courses.findById({_id:req.params.id})
        
        res.status(200).json(filteredcourses) 
    } catch (error) {
       res.status(400).json({error:error.message}) 
    }
})
// for enrolled courses by single users
 router.post('/enrolled/newcourse',verifyToken, async(req,res)=>{
    try {
        const{name, instructor, description,enrollmentstatus,thumbnail}= req.body
        const newEnrollled= await enrolledCourses.create({name, instructor, description,enrollmentstatus,thumbnail, userId:req.user})
        res.status(200).json({message:"successfully enrolled"})
    } catch (error) {
        res.status(400).json(error.message)
    }
 })
 router.get('/enrolled/courses',verifyToken, async(req,res)=>{
    try {
       
        const Enrollled= await enrolledCourses.find({userId:req.user})
        res.status(200).json(Enrollled)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })
 router.post('/enrolled/courses/:id',verifyToken, async(req,res)=>{
   
    try {
       
        const EnrollledUpdated= await enrolledCourses.findByIdAndUpdate({_id:req.params.id},{statusbar:req.body.statusbar})
        res.status(200).json(EnrollledUpdated)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })



 router.post('/enrolled/courses/:id',verifyToken, async(req,res)=>{
   
    try {
        const{progressbar}= req.body
        const newEnrollled= await enrolledCourses.findByIdAndUpdate({_id:req.params.id},{progressbar})
        res.status(200).json(newEnrollled)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })



module.exports=router




