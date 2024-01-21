import React from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate= useNavigate()
  const token= localStorage.getItem('token')
  const LogOut=()=>{
    localStorage.removeItem('token')
    navigate('/')
    
  }
  return (
    <div>
      <div className="flex">
        <ul className='flex h[2rem] w-full bg-zinc-200 gap-4 h-[3rem] items-center justify-center text-xl font-bold'>
          <Link to="/">  <li>Home</li></Link>
          {!token? <>
            <Link to="/login">  <li>Login</li></Link>
          <Link to='/register'> <li>Sign up</li></Link>
          </>:<>
          <Link to='/dashboard'> <li>Dashbord</li></Link>
          <Link to='/' onClick={LogOut}> <li >Log Out</li></Link>
          </>}
         

         
        </ul>
      </div>
    </div>
  )
}

export default Navbar
