import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'
import { BiArrowBack } from "react-icons/bi"

const Login = () => {
 

const onLogin = (e)=>{
  e.preventDefault()

}

  return (
    <div className='m-log'>
     <NavLink to= "/">

<p className='back'><BiArrowBack  className="backarrow" size='1.2rem'/> Back</p>

      </NavLink>
    <div className='w-log'>
 

    <div className='l-container'>
    <span>Log in</span>

<form action='' className='login'>
<div className='Email'>
<label>Email</label>
<input className='mail' type='mail' placeholder='Enter Your Mail'></input>
    </div>
<div className='Pass'>
<label>Password</label>
<input className='password' type='password' placeholder='Enter Your password'></input>
    </div>
    <p>Forget password?</p>

    <button className='l-button' onClick={onLogin}>Login</button>
 

   
</form>
    
     
   <NavLink to = "/register"><button className='C-btn'> Create An account?</button>
       </NavLink> 
    </div>
      
    </div>
    </div>
  )
}

export default Login
