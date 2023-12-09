import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import './register.css'

const Register = () => {
  return (
    <>
    <div className='w-register'>

   
    <NavLink to= "/">

<p className='back'><BiArrowBack  className="backarrow" size='1.2rem'/> Back</p>

      </NavLink>



      <div className='m-register'>
<div className='sign'>
<span>Welcome to Joyful Paws!</span>
<span>Sign Up and Spread the Joy! 🐾✨

</span>
<form action='' className='register'>
<div className='s-1'>
<label><strong>Your Name</strong></label>
<input className='name' placeholder='Full name' type='text'/>
</div>
<div className='s-2'>
<label><strong>Enter mail</strong></label>
<input className='mail' placeholder='Enter mail' type='email'/>
</div>
<div className='s-3'>
<label><strong>Enter password</strong></label>
<input className='mail' placeholder='Enter password' type='email'/>
</div>
<button className='button2'>Sign Up</button>


</form>
</div>
<img src=''></img>

<div>

</div>
      </div>
      </div>
   
    </>
  )
}

export default Register
