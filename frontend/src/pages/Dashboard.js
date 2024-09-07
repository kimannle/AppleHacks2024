import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  const username = 'John Doe';
  const email = 'john.doe@example.com';

  return (
    <div className="dashboard-container">
      {/* Display username and email */}
      <div className="user-info">
        <p>{username}</p>
        <p>{email}</p>
      </div>

      {/* Centered circle with buttons */}
      <div className="circle-container">
        <div className="circle">
          <button className="dashboard-button">Activity</button>
          <button className="dashboard-button">Progress</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
