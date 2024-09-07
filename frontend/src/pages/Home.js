import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to YouTime</h1>
      <p className="intro-text">
        Fill the night sky with stars through daily affirmations and activities!
      </p>
      <div className="link-container">
        <Link to="/register" className="styled-link">
          Register
        </Link>
        <Link to="/login" className="styled-link">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
