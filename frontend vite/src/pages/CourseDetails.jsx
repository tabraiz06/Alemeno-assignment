// src/components/CourseDetails.js
import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Context } from '../components/context/Context';

const CourseDetails = () => {
  const Loctaion= useLocation()
  const { courseId } = useParams();
  //  const [Course, setCourse] = useState({});
  
  const context= useContext(Context)
  const{filteredCourses,filterCourse}=context
  

   
// const filterCourse=async()=>{
  
//   const res=await fetch(`http://localhost:5000/api/courses/${courseId}`,{
//     method:"GET",
//     headers:{"Content-Type":"application/json"}
//   })
// const result =await res.json()
// 
// setCourse(result)
//    }
 
//  useEffect(()=>{
  
//     filterCourse()
  
   
//  },[])

    // Fetch course details from API or dummy data based on courseId
    // Replace this with actual API call or data
    
useEffect(()=>{
  filterCourse(courseId)
},[])


  return (
    <div>
      <h2>Course Details</h2>
      {!filteredCourses._id?<><h1>loading</h1></>:<>
      <h1>{filteredCourses.name}</h1>
      <p>{filteredCourses.description}</p>
      <p>{filteredCourses.instructor}</p>
      <p>{filteredCourses.duration}</p>
      <p>{filteredCourses.location}</p>
      <p>syllabu: {filteredCourses.syllabus[0].topic},{filteredCourses.syllabus[0].content}</p>
      </>}
      
        <div>
        
          {/* Add more details here */}
        </div>
     
    </div>
  );
};

export default CourseDetails;
