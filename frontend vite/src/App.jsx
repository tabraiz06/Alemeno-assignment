// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/CourseDetails';
import StudentDashboard from './pages/StudentDashboard';
import './App.css';
import ContextApi from './components/context/Context';
import Login from'./components/login/Login'
import Register from'./components/register/Register'
import Navbar from './components/Navbar';
function App() {
  return (
    <ContextApi>
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/courses/:courseId" element={<CourseDetails />}/>
           
          <Route path="/dashboard" element={ <StudentDashboard />}/>
           
          
          <Route path="/" element={<CourseList />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
            
          
        </Routes>
      </div>
    </Router>
    </ContextApi>
  );
}

export default App;
