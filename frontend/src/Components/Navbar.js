import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
const Navbar =()=>{
    return(
        <nav className='navbar'>
            <h1>Task Manager</h1>
            <ul>
                <li><Link to ="/">Tasks</Link></li>
                <li><Link to ="/">About</Link></li>
              
            </ul>
        </nav>
    );
};
export default Navbar;