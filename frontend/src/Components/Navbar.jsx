import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Css/Navbar.css';
import axios from 'axios';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [username, setUsername] = useState(''); // Store the username

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('jwtToken'); // Adjust 'jwtToken' as per your localStorage token key
            if (token) {
                try {
                    const config = {
                        headers: { Authorization: `Bearer ${token}` },
                    };
                    const response = await axios.get(`${process.env.REACT_APP_API_PATH}/users/profile`, config); // Adjust '/api/profile' as per your API endpoint
                    setUsername(response.data.firstname); // Adjust 'username' based on your API response
                } catch (error) {
                    console.error("Error fetching profile:", error.response);
                    // Handle error (e.g., redirect to login if unauthorized)
                }
            }
        };

        fetchProfile();
    }, []);

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
            <span className="username">{username || "Username"}</span>
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
