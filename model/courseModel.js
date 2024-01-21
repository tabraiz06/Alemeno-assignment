const mongoose= require('mongoose')
const courseSchema= new mongoose.Schema({
   
    name:String,
    instructor: String,
    description: String,
    enrollmentStatus: String,
    duration: String,
    schedule: String,
    location: String,
    prerequisites: Array,
    syllabus: Array,
    thumbnail: String,
    statusbar:{
        type:String,
        default:"pending"
    }
})
const Courses= mongoose.model('course', courseSchema)
module.exports=Courses