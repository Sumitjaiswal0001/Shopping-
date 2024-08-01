import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name' name="" id="" />
          <input type="Email" placeholder='Email address' name="" id="" />
          <input type="password" placeholder='password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className="login-login">Already have an account? <span>Login</span></p>
        <div className="login-agree">
          <input type="checkbox"  name="" id="" />
          <p>By continuing  i agree to the terms of use & privacy policy </p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
