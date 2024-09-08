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
            <div>
                <h1>Hello, {user ? user.username : 'Guest'}!</h1>
            </div>

            <div className={`circle-container ${showFirstSet ? 'fade-in' : 'fade-out'}`}>
                <div className="circle">
                    <Link to="/progress" className="circle">
                        <span>See Progress</span>
                    </Link>
                </div>
                <div className="circle circle-special" onClick={handleDailyTasksClick}>
                    <div className="circle-div">
                        <span>Daily Tasks</span>
                    </div>
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
