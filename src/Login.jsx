import React from 'react'
import './Login.css'

const Login = () => {
  return (
  
   <center>
    <div style={{margin:"50px"}}>
    <h1>LOGIN FORM</h1>
    </div>
     <div className="frame">
    
  <div className="form">
 
    <h2>Login</h2>
    <div className="inputframe">
      <input type="text" required="required" />
      <span>Username</span>
     <i/>
    </div>
    <div className="inputframe">
      <input type="password" required="required" />
      <span>Password</span>
      <i />
    </div>
    <div className="links">
      <a href="https://akhs1.com/">Forgot password?</a>
      <a href="https://akhs1.com/">Sign Up</a>
    </div>
    <a href="https://akhs1.com/"><input type="submit" defaultValue="Login" /></a>
  </div>
  
</div>
   </center>


  )
}

export default Login
