// src/components/StudentDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../components/context/Context';

const StudentDashboard = () => {
  // const [enrolledCourses, setEnrolledCourses] = useState([]);
  const context= useContext(Context)
  const{enrolledCourses,fetchEnrolledCourses}=context
const [markCompleted, setmarkCompleted] = useState({statusbar:'completed'});

  useEffect(() => {
    fetchEnrolledCourses()
    // Fetch enrolled courses from API or dummy data
    // Replace this with actual API call or data
    // const dummyEnrolledCourses = [
    //   { id: 1, name: 'Enrolled Course 1', instructor: 'Instructor C' },
    //   { id: 2, name: 'Enrolled Course 2', instructor: 'Instructor D' },
    //   // Add more dummy enrolled courses as needed
    // ];
   
  }, []);

  const markAsCompleted = async(courseId) => {
   
   const res= await fetch(`http://localhost:5000/api/enrolled/courses/${courseId}`,{
    method:"POST",
    headers:{"Content-Type":"application/json",
      "Token":localStorage.getItem('token')
    },
    body: JSON.stringify(markCompleted)
   })
   fetchEnrolledCourses()
  };
  
  // onClick={() => markAsCompleted(course._id)}

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map((course,index) => (
          <div key={index}>
           <h1>Course Name: {course.name}</h1>  
          <h1>Insturctor name:  {course.instructor}</h1>
          <p>Status {course.statusbar}</p>
            <button onClick={()=>markAsCompleted(course._id)}>Mark as Completed</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
