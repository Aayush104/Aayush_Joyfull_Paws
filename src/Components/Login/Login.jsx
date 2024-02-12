// Import necessary libraries and components
import React, { useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import './Login.css';
// import { BiArrowBack } from 'react-icons/bi';
import axios from 'axios';

const Login = () => {
  const [logemail, setlogEmail] = useState('');
  const [logpassword, setlogPassword] = useState('');
  const navigateTo = useNavigate();
  const [loginError, setLoginError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3002/Login', {
      sentlogEmail: logemail,
      sentlogPassword: logpassword,
    })
    .then((response) => {
      if (response.data.length > 0) {
      
        navigateTo('/main');
      } else {
        navigateTo('/Login')
      }
    })
    .catch((error) => {
      setLoginError("Invalid id!! Please try Again");
      console.error(error);
    });
  };

  return (
    <div className='m-log'>
      <NavLink to='/'>
        <p className='back'>
         Back
        </p>
      </NavLink>
      <div className='w-log'>
        <div className='l-container'>
          <span>Log in</span>
          <form action='' className='login' onSubmit={handleSubmit}>
            <div className='Email'>
              <label>Email</label>
              <input
                className='mail'
                type='email' 
                placeholder='Enter Your Mail'
                onChange={(e) => setlogEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className='Pass'>
              <label>Password</label>
              <input
                className='password'
                type='password'
                placeholder='Enter Your password'
                onChange={(e) => setlogPassword(e.target.value)}
                required
              ></input>
            </div>
          
            <p>Forget password?</p>
            <button className='l-button' type='submit'>
              Login
            </button>
          </form>
          <NavLink to='/register'>
            <button className='C-btn'> Create An account?</button>
          </NavLink>
          {loginError && <p className='error-message'>{loginError}</p>}
        </div>
      
      </div>
    </div>
  );
};

export default Login;
