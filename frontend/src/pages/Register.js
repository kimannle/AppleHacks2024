import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegLog.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        fetch("/register", {
            method: 'POST',
            body: formData
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                navigate('/dashboard');
            }
        ).catch(
            error => console.error('Error:', error)
        );
    }

    return (
        <div className="reglog-container">
            <h1> Create Your Account </h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username"> Username </label>
                <input type="text" id="username" name="username" required />

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