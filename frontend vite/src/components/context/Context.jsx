import {  createContext, useEffect, useState } from "react";
import { redirect, useNavigate, useNavigation } from "react-router-dom";


export const Context=createContext()


const ContextApi = ({children}) => {
  // const navigate= useNavigate()
  const [courses, setCourses] = useState([]);
  
 
  const [filteredCourses, setfilteredCourses] = useState({});
  const [enrolledCourses, setenrolledCourses] = useState([]);
  
    
  const fetchCourses=async()=>{
    const res=await fetch('http://localhost:5000/api/courses',{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    const result = await res.json()
    
    setCourses(result)
  }

  const filterCourse=async(id)=>{

    const res=await fetch(`http://localhost:5000/api/courses/${id}`,{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })

if(res){
  const result =await res.json()
   setfilteredCourses(result)
   redirect(`/login`)
}

}


  const fetchEnrolledCourses= async()=>{
    const res=await fetch(`http://localhost:5000/api/enrolled/courses/`,{
  method:"GET",
      headers:{"Content-Type":"application/json",
      "Token":localStorage.getItem('token')
    }
})
const result = await res.json()
setenrolledCourses(result)

  }

  useEffect(()=>{
    fetchEnrolledCourses()
   
  },[])
        
  
    // 
   
   

  return (
    <Context.Provider value={{fetchEnrolledCourses,enrolledCourses,filterCourse,courses, setCourses,fetchCourses,filteredCourses, setfilteredCourses}}>
      {children}
    </Context.Provider>
  )
}

export default ContextApi
