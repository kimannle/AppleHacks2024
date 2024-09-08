import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegLog.css';
import { UserContext } from '../UserContext';

function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const queryString = new URLSearchParams(formData).toString();

        fetch(`/login?${queryString}`, {
            method: 'GET'
        }).then(
            res => res.json()
        ).then(
            data => {
                if (data.error) {
                    console.error('Error:', data.error);
                    alert(`Login failed: ${data.error}`);
                } else {
                    console.log(data);
                    setUser(data);
                    // setUser({
                    //     ...data,
                    //     completedActivityIds: '[]',
                    //     completedAffirmationIds: '[]'
                    // });
                    navigate('/dashboard');
                }
            }
        ).catch(
            error => console.error('Error:', error)
        );
    }

    return (
        <div className="reglog-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />

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
