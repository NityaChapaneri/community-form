import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src="/community-form/logo.jpg" alt="Logo" />
        <h2>Chaar Gaam Darji Samaj</h2>
      </div>
      
<img src="/community-form/matajiPic.jpg" alt="Mataji" />
       
      

      
      <ul>
        
        <li><Link to="/">Login</Link></li>
        <li><Link to="/main-form">Main Form</Link></li>
        <li> <Link to="/dashboard">Dashboard</Link> </li>
      </ul>

      


      
    </nav>
  );
};

export default Navbar;
