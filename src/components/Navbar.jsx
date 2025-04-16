import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.jpg" alt="Logo" className="logo" />
        <h2>Chaar Gaam Darji Samaj</h2>
      </div>
       
      <img src="/matajiPic.jpg" alt="Mataji" className="mataji-pic" />

      
      <ul>
        
        <li><Link to="/">Login</Link></li>
        <li><Link to="/main-form">Main Form</Link></li>
        <li> <Link to="/dashboard">Dashboard</Link> </li>
      </ul>

      


      
    </nav>
  );
};

export default Navbar;
