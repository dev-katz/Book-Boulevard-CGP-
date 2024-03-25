import React, { useState } from 'react';
import './styles/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import ProfilePicture from '../Components/ProfileSection';

const FormPage = () => {
  const [isUsernameOpen, setIsUsernameOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const toggleUsernameDropdown = () => {
    setIsUsernameOpen(!isUsernameOpen);
  };

  const toggleEmailDropdown = () => {
    setIsEmailOpen(!isEmailOpen);
  };

  const togglePasswordDropdown = () => {
    setIsPasswordOpen(!isPasswordOpen);
  };

  return (
    <div className="container">
      <h1>Account Management</h1>
      <ProfilePicture imageUrl="path_to_profile_image" alt="Profile Image" /> 

      <div className="dropdown">
        <button onClick={toggleUsernameDropdown}>Username <FontAwesomeIcon icon={isUsernameOpen ? faAngleUp : faAngleDown} /></button>
        {isUsernameOpen && (
          <div className="dropdown-content">
            <h2>Username</h2>
            <div className="input-group">
              <label>Current Username:</label>
              <input type="text" placeholder="Current Username" />
              <label>First Name:</label>
              <input type="text" placeholder="First Name" />
              <label>Last Name:</label>
              <input type="text" placeholder="Last Name" />
              <button>Save Changes</button>
            </div>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={toggleEmailDropdown}>Email <FontAwesomeIcon icon={isEmailOpen ? faAngleUp : faAngleDown} /></button>
        {isEmailOpen && (
          <div className="dropdown-content">
            <h2>Email</h2>
            <div className="input-group">
              <label>Current Email:</label>
              <input type="email" placeholder="Current Email" />
              <label>New Email:</label>
              <input type="email" placeholder="New Email" />
              <button>Save Changes</button>
            </div>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={togglePasswordDropdown}>Password <FontAwesomeIcon icon={isPasswordOpen ? faAngleUp : faAngleDown} /></button>
        {isPasswordOpen && (
          <div className="dropdown-content">
            <h2>Password</h2>
            <div className="input-group">
              <label>Current Password:</label>
              <input type="password" placeholder="Current Password" />
              <label>New Password:</label>
              <input type="password" placeholder="New Password" />
              <label>Confirm Password:</label>
              <input type="password" placeholder="Confirm Password" />
              <button>Save Changes</button>
            </div>
          </div>
        )}
      </div>
      <div className="logout-section">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default FormPage;
