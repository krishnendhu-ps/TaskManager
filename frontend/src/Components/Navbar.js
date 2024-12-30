import React from 'react';
import '../App.css';
const Navbar =()=>{
    return(
        <nav className='navbar'>
            <h1>Task Manager</h1>
            <ul>
                <li><a href ="#task">Tasks</a></li>
                <li><a href ="#about">About</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;