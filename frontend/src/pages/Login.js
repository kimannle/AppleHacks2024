import React from 'react';
import '../styles/RegLog.css';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Register form subits and requests

        navigate('/dashboard');

    }

    return (
        <div className="reglog-container">
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username </label>
                <input type="username" id="username" name="username" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;