import React from 'react';
import "../styles/Completed.css"
import { useNavigate } from 'react-router-dom';

function Completed() {

    const navigate = useNavigate();

    const handleButtonClick= () => {
        navigate('/dashboard');
    };

    return (
        <div className="completed-container">
            <h1>You did it!</h1>

            <div>
                <p>Let's go back to the dashboard, so we can see your progress!</p>
            </div>
            <button onClick={handleButtonClick}>Dashboard</button>
        </div>
    );
}

export default Completed;

