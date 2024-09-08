import React from 'react';
import "../styles/Progress.css";

function Progress() {
    return (
        <div className="progress-container">
            <h1>Progress</h1>
            <div>
                <p>You're lighting up the cosmos!</p>
            </div>
            <div>
                <p>So far, you have completed # affirmation and # activites!</p>
            </div>
        </div>
    );
}

export default Progress;