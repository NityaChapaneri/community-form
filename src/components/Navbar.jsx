import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure you import the CSS

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.jpg" alt="Logo" />
        <h2>Chaar Gaam Darji Samaj</h2>
      </div>

      <img src="/matajiPic.jpg" alt="Mataji" />

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/main-form">Main Form</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
