import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-navbar">
      <div className="nav-navbar-left">
        <Link to="/" className="nav-site-title">
          Book Boulevard
        </Link>
      </div>
      <div className={`nav-navbar-right ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/Shop" onClick={toggleMenu}>Shop</Link></li>
          <li><Link to="/About" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/Testimonials" onClick={toggleMenu}>Testimonials</Link></li>
          <li><Link to="/Profile" onClick={toggleMenu}>Profile</Link></li>
        </ul>
      </div>
      <div className="nav-menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
