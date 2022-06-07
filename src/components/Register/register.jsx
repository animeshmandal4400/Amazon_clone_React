import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"
import { auth } from '../../firebase';

const Register = () => {
    //const history = useNavigate();
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();


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

                    <input type="text" placeholder="First and last name" />


                    <h5>Mobile number</h5>
                    <div className="mobileNumber">
                        <select className='option'>
                            <option>IN +91</option>
                        </select>

                        <input type="text" placeholder="Mobile number" />

                    </div>

                    <h5>Email</h5>

                    <input type="text" placeholder="Email" value={email} onClick={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>

                    <input type="text" placeholder="Atleast 6 numbers" value={Password} onClick={(e) => setPassword(e.target.value)} />

                    <button className='register__button' type='submit' onClick={register}>
                        <h5>Continue</h5>
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