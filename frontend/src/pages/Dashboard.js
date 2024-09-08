import React, { useState } from 'react';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [showFirstSet, setShowFirstSet] = useState(true); // Track which set to show

  const handleDailyTasksClick = () => {
    // Fade out the first set, then fade in the second set
    setShowFirstSet(false);
  };

  return (
    <div className="dashboard-container">
      {/* Display username */}
      <div className="user-info">
        <p>Hello, John Doe!</p>
      </div>

      {/* First set of circles */}
      <div className={`circle-container ${showFirstSet ? 'fade-in' : 'fade-out'}`}>
        <div className="circle">
          <span>See Progress</span>
        </div>
        <div className="circle circle-special" onClick={handleDailyTasksClick}>
          <span>Daily Tasks</span>
        </div>
      </div>

      {/* Second set of circles */}
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
