const mongoose= require('mongoose')
const enrolledcourseSchema= new mongoose.Schema({
    userId: {type:mongoose.Schema.ObjectId,
        ref:"user"
    },
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
    progressbar: String,
    statusbar:{
        type:String,
        default:"pending"
    }
})
const enrolledCourses= mongoose.model('enrolledCourse', enrolledcourseSchema)
module.exports=enrolledCourses