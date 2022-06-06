import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>

      <Link to="/">
        <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt='amazon logo' />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="text" value={Password} onChange={(e) => setPassword(e.target.value)} />


          <button type='Submit' onClick={signIn} className='login_signIn'>
            Sign in
          </button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </div>
      <p>New to Amazon ?</p>
      <Link to="/register">
        <button className="login-register">Create Your Amazon Account</button>
      </Link>
    </div>

  )
}

export default Login