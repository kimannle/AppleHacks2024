// Register the 

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegLog.css';
import StarryNight from '../ui-components/StarryNight';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Register form subits and requests

        navigate('/dashboard');

    }

    return (
        <div className="reglog-container">
            <StarryNight />
            <h1> Create Your Account </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> Email Address </label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <div>
                    <button type="submit" className="register-button">Register</button>
                </div>
                <p className="login-redirect">
                    Already have an account? <Link to="/login" className="styled-link">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;