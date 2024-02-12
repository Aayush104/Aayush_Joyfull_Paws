import React, { useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';

import axios from 'axios';
import './register.css';
import { delay } from 'framer-motion';

const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigateTo = useNavigate()
  const [userCreated, setUserCreated] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
   

    try {
      const response = await axios.post('http://localhost:3002/register', {
        sentUserName: userName,
        sentEmail: email,
        sentPassword: password,
      });
    
      // Check if the email is unique
      if (response.data.success) {
        console.log('User has been created');
        setMessage('User has been created successfully');
        setUserCreated(true);
        setEmail('');
        setUserName('');
        setPassword('');
      delay(()=>{
        navigateTo('/Login');
      }, 2000)


        
      } else {
        // Handle other server errors gracefully
        setMessage(response.data.message || 'Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    
      if (error.response && error.response.status === 409) {
        console.log("email already exit")
        // HTTP status 409 indicates conflict, meaning the email is not unique
        setMessage('Email already exists. Please use another email.');
      } else {
        // Handle other server errors gracefully
        setMessage('Oops! Something went wrong. Please try again later.');
      }
    } 
    
  };
  return (
    <div className='w-register'>
      <NavLink to='/'>
        <p className='back'>
         Back
        </p>
      </NavLink>

      <div className='m-register'>
        <div className='sign'>
          <span>Welcome to Joyful Paws!</span>
          <span>Sign Up and Spread the Joy! 🐾✨</span>
          <form className='register' id='register' onSubmit={handleSubmit}>
            <div className='s-1'>
              <label>
                <strong>Your Name</strong>
              </label>
              <input
                className='name'
                placeholder='Full name'
                type='text'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className='s-2'>
              <label>
                <strong>Enter email</strong>
              </label>
              <input
                className='mail'
                placeholder='Enter email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='s-3'>
              <label>
                <strong>Enter password</strong>
              </label>
              <input
                className='pass'
                placeholder='Enter password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
           
            <button className='button2' type='submit'>
             Sign Up
            </button>
            <NavLink to='/Login'>
              <p className='already'>Already have an account?</p>
            </NavLink>
          </form>
          {message && <p className={message.includes('successfully') ? 'success' : 'error'}>{message}</p>}
          
        </div>
        <div>
       
        </div>
      </div>
    </div>
  );
};

export default Register;
