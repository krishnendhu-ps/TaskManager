import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Tasks from './pages/Tasks'; 
import './App.css';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false); 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero isLoggedIn={isLoggedIn} />} /> 
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export default App;
