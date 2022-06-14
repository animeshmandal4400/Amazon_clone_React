import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer';
import Home from './components/Home/home.jsx';
import Checkout from './components/checkout/checkout.jsx';
import Login from './components/Login/login.jsx';
import Register from './components/Register/register';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './components/redux/StateProvider';

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only runs when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is  >>' ,authUser);

      if(authUser){
        //the user just logged in the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null

      })
    }
    })
  }, [])

  return (
    //BEM 
  <Router>
     <div className="app">
          <Routes>
          <Route path="/" element={<><Header/><Home/> <Footer/> </>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/checkout" element={<><Header/><Checkout/></>}/>
          </Routes>
     </div>
     </Router>
  );
}

export default App;
