/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './styles/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import profileImage from './assests/profile.png';

const FormPage = () => {
  const [isUsernameOpen, setIsUsernameOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [changesSaved, setChangesSaved] = useState(false); // New state for tracking save status

  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailChangesSaved, setEmailChangesSaved] = useState(false);

  const [username, setUsername] = useState(''); // State to store username

  useEffect(() => {
    // Simulating dynamic username fetch
    setUsername('Ranil Wickremasingha');
  }, []);

  const toggleUsernameDropdown = () => setIsUsernameOpen(!isUsernameOpen);
  const toggleEmailDropdown = () => setIsEmailOpen(!isEmailOpen);
  const togglePasswordDropdown = () => setIsPasswordOpen(!isPasswordOpen);

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordError('');
    setChangesSaved(false); // Reset save status when user starts typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError('');
    setChangesSaved(false); // Reset save status when user starts typing
  };

  const validateAndSaveChanges = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("The passwords don't match!");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError('The password must be at least 8 characters long.');
      return;
    }

    console.log('Password updated successfully.');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordError('');
    setChangesSaved(true); // Update save status on successful save
  };

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-center-content">
        <h1>Account Management</h1>
        <img src={profileImage} alt="Profile" className="profile-profile-picture" />
        <h2>{username}</h2> {/* Display dynamic username */}
        <div className='profile-dropdown-container'>
          <div className="profile-dropdown">
            <button className='profile-dropdown-btn' onClick={toggleUsernameDropdown}>
              <span>Username</span> <FontAwesomeIcon icon={isUsernameOpen ? faAngleUp : faAngleDown} />
            </button>
            {isUsernameOpen && (
              <div className="profile-dropdown-content">
                <div className="profile-input-group">
                  <label>Current Username:</label>
                  <input className='current-name-ro' type="text" readOnly placeholder="Current Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label>First Name:</label>
                  <input type="text" placeholder="First Name" />
                  <label>Last Name:</label>
                  <input type="text" placeholder="Last Name" />
                  <button className='profile-btn'>Save Changes</button>
                </div>
              </div>
            )}
          </div>
          <div className="profile-dropdown">
            <button className='profile-dropdown-btn' onClick={toggleEmailDropdown}>
              <span>Email</span> <FontAwesomeIcon icon={isEmailOpen ? faAngleUp : faAngleDown} />
            </button>

            {isEmailOpen && (
              <div className="profile-dropdown-content">
                <div className="profile-input-group">
                  <label>Current Email:</label>
                  <input type="email" placeholder="Current Email" />
                  <label>New Email:</label>
                  <input type="email" placeholder="New Email" />
                  <button className='profile-btn'>Save Changes</button>
                </div>
              </div>
            )}
          </div>
          <div className="profile-dropdown">
            <button className='profile-dropdown-btn' onClick={togglePasswordDropdown}>
              <span>Password</span> <FontAwesomeIcon icon={isPasswordOpen ? faAngleUp : faAngleDown} />
            </button>
            {isPasswordOpen && (
              <div className="profile-dropdown-content">
                <div className="profile-input-group">
                  <label>New Password:</label>
                  <input type="password" value={newPassword} onChange={handleNewPasswordChange} placeholder="New Password" />
                  <label>Confirm Password:</label>
                  <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" />
                  {passwordError && <div className='errormsg-profile'>{passwordError}</div>}
                  <button className='profile-btn' onClick={validateAndSaveChanges}>
                    {changesSaved ? 'Changes Saved' : 'Save Changes'}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="profile-logout-section">
            <button className='profile-btn'>Logout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormPage;
