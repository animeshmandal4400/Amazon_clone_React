import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';

const Register = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');



    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, Password);
            alert("Sucessfully created")
            if (user) {
                history('/login')
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='register'>
            <Link to="/">
                <img className='register__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />
            </Link>
            <div className="register__container">

                <h1>Create Account</h1>
                <form >

                    <h5>Your name</h5>

                    <input type="text" placeholder="First and last name" value={name} onChange={(e) => setName(e.target.value)} />


                    <h5>Mobile number</h5>
                    <div className="mobileNumber">
                        <select className='option'>
                            <option>IN +91</option>
                        </select>

                        <input type="text" placeholder="Mobile number" />

                    </div>

                    <h5>Email</h5>

                    <input type="email" placeholder="Email" Value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>

                    <input type="password" placeholder="At least 6 characters" Value={Password} onChange={(e) => setPassword(e.target.value)} />

                    <button className='register__button' type='submit' onClick={register}>
                        <h4>Sign Up</h4>
                    </button>
                    <div className="detail">
                        <p>Already have an account?</p>
                        <Link to="/login" className='signIn'>
                            <p>Sign in</p>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register