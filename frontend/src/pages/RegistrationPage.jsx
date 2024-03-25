import React, { useState } from 'react';
import './styles/RegistrationPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function RegistrationPage() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_PATH}/users/register`, { firstname, lastname, email, password });
            // On successful registration, show success message
            Swal.fire(
                'Registered!',
                'Your account has been created successfully.',
                'success'
            );
            // Redirect to login page or reset form as needed
        } catch (error) {
            console.error(error);
            // On registration error, show error message
            Swal.fire(
                'Oops...',
                'Something went wrong with your registration. Please try again.',
                'error'
            );
        }
    };
    return (
        <div className="registration-page">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <div className="input-container">
                    <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                    <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
                <div className='buttons-reg-form'>
                    <button type="submit" className="Login-button">Register</button>
                    <Link to={"/LoginPage"}><button className="Login-button" data="Login"></button></Link>
                </div>
            </form>
        </div>
    );
}

export default RegistrationPage;
