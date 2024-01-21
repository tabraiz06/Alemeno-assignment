// src/components/CourseList.js
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import reactsvg from '../assets/react.svg' 
import { Context } from '../components/context/Context';

const CourseList = () => {
  const navigate= useNavigate()
  const context= useContext(Context)
  const{courses,fetchCourses,setenrolledCourses,filterCourse}=context

 

  useEffect(() => {
    // Fetch courses from API or dummy data
    fetchCourses()
    // Replace this with actual API call or data
    
    
  },[]);
 const viewdetails=(id,index)=>{
    

  filterCourse(id)
  

  }

const enroll=async(id,index)=>{
const res=await fetch(`http://localhost:5000/api/enrolled/newcourse`,{
  method:"POST",
      headers:{"Content-Type":"application/json",
      "Token":localStorage.getItem('token')
    },
      body: JSON.stringify(courses[index])
})
const result = await res.json()

alert(`${result.message}` || ` ${result.error}`)
}


  return (
    <div>
      <h2 className='text-center text-5xl font-bold my-5'>Course List</h2>
      <div className='flex flex-wrap items-center my-[50px] mx-[auto] w-[100%] justify-center'>
        {courses.map((course,index) => (
          <div key={index} className='w-[40%] flex flex-col items-center text-center m-8'>
           
            <div className='flex items-center justify-center object-contain w-[200px]'><img className='w-[60%]' src={reactsvg} alt="" /></div>
            <div>
              <h1>Course name: {course.name}</h1>
              <p>Description: {course.description}</p>
              <p>Insturctor name {course.instructor}</p>
            </div>
<div>
            <button onClick={()=>filterCourse(course._id)}><Link to={`/courses/${course._id}`}>View Details</Link></button>
            <button onClick={()=>enroll(course._id,index)}>Enroll Now</button>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
