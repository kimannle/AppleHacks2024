import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Affirmation from './pages/Affirmation';
import Activity from './pages/Activity';
import Completed from './pages/Completed';
import Progress from './pages/Progress';
import './App.css';
import './styles/StarryNight.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import StarryNight from './ui-components/StarryNight';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="page"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/affirmation" element={<Affirmation />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <StarryNight />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
