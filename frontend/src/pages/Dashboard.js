import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import { UserContext } from '../UserContext';

function Dashboard() {
    const { user } = useContext(UserContext);
    const [showFirstSet, setShowFirstSet] = useState(true);

    const handleDailyTasksClick = () => {
        setShowFirstSet(false);
    };

    return (
        <div className="dashboard-container">
            <div className="user-info">
                <p>Hello, {user ? user.username : 'Guest'}!</p>
            </div>

            <div className={`circle-container ${showFirstSet ? 'fade-in' : 'fade-out'}`}>
                <div className="circle">
                    <span>See Progress</span>
                </div>
                <div className="circle circle-special" onClick={handleDailyTasksClick}>
                    <span>Daily Tasks</span>
                </div>
            </div>

            <div className={`circle-container ${!showFirstSet ? 'fade-in' : 'fade-out'}`}>
                <Link to="/affirmation" className="circle">
                    <span>Affirmation</span>
                </Link>
                <Link to="/activity" className="circle circle-special">
                    <span>Activity</span>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
