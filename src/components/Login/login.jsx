import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const Login = () => {
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, Password);
      //alert("Sucessfully login")
      if (user) {
        history('/')
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='login'>

      <Link to="/">
        <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt='amazon logo' />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />


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