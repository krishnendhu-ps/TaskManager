import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import '../pages/Tasks';

const Navbar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="home-btn" onClick={handleBack}>
          Home
        </button>
      </div>
      <h1>Task Manager</h1>
      <ul>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
