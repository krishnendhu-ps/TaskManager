import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import './App.css';

const App=()=>{
  return (
    <Router>
      <Navbar/>
     <Hero/>
     
    </Router>
  );
};
export default App;