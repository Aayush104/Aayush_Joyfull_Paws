import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './register.css';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios.post('http://localhost:3002/register', {
      sentUserName: userName,   // Make sure these names match the expected names on the server
      sentEmail: email,
      sentPassword: password
    })
    .then(() => {
      console.log('User has been created');
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
  };
  

  return (
    <>
      <div className='w-register'>
        <NavLink to='/'>
          <p className='back'>
            <BiArrowBack className='backarrow' size='1.2rem' /> Back
          </p>
        </NavLink>

        <div className='m-register'>
          <div className='sign'>
            <span>Welcome to Joyful Paws!</span>
            <span>Sign Up and Spread the Joy! 🐾✨</span>
            <form action='' className='register' id='register' onSubmit={handleSubmit}>
              <div className='s-1'>
                <label>
                  <strong>Your Name</strong>
                </label>
                <input
                  className='name'
                  placeholder='Full name'
                  type='text'
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className='s-2'>
                <label>
                  <strong>Enter mail</strong>
                </label>
                <input
                  className='mail'
                  placeholder='Enter mail'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='s-3'>
                <label>
                  <strong>Enter password</strong>
                </label>
                <input
                  className='pass'
                  placeholder='Enter password'
                  type='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className='button2' type='submit'>
                Sign Up
              </button>
              <NavLink to='/Login'>
                <p className='already'>Already have an account?</p>
              </NavLink>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Register;
