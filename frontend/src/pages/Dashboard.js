import React from 'react';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';


function Dashboard() {
  const username = 'John Doe';
  const email = 'john.doe@example.com';

  const background = 'linear-gradient(180deg, #000000 0%, #27082c 50%, #51115b 75%, #ca7ed6 100%)';
  const glow = '0 0 30px 10px rgba(65, 11, 102, 0.8)';

  return (
    <div className="dashboard-container">
      {/* Display username and email */}
      <div className="user-info">
        <p>Hello, {username}!</p>
      </div>

      {/* Centered circle with buttons */}
      <div className="circle">
        <span>See Progress</span>
      </div>
      <div className="circle" style={{ background: background, boxShadow: glow }}>
        <span>Daily Tasks</span>
      </div>
    </div>
  );
}

export default Dashboard;
