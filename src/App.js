import React from 'react';
import './App.css';
import Header from './components/Header/header.jsx';
import Home from './components/Home/home.jsx';
import Checkout from './components/checkout/checkout.jsx';
import Login from './components/Login/login.jsx';
import Register from './components/Register/register';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    //BEM 
  <Router>
     <div className="app">
          <Routes>
          <Route path="/" element={<><Header/><Home/> </>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/checkout" element={<><Header/><Checkout/></>}/>
          </Routes>
     </div>
     </Router>
  );
}

export default App;
