import React from 'react';
import { Link } from 'react-router-dom';
import StarryNight from '../ui-components/StarryNight'
import '../styles/Home.css';
import '../styles/StarryNight.css'

function Home() {
  return (
    <div className="home-container">
      <StarryNight></StarryNight>
      <div className="star-container"></div>
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
