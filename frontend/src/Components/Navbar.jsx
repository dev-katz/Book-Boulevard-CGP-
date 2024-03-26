import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-navbar">
      <div className="nav-section left">
        <Link to="/" className="nav-site-title">
          Book Boulevard
        </Link>
      </div>
      <div className="nav-section center">
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/Comingsoon" onClick={toggleMenu}>Shop</Link></li>
          <li><Link to="/About" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/Comingsoon" onClick={toggleMenu}>Testimonials</Link></li>
          <li><Link to="/Comingsoon" onClick={toggleMenu}>Profile</Link></li>
        </ul>
      </div>
      <div className="nav-section right">
        <div className="profile-container">
          <span className="username">Username</span>
        </div>
      </div>
      <div className="nav-menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
