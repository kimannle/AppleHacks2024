import React from 'react';

function Completed() {
    return (
        <div className="progress-container">
            <h1>You did it!</h1>

            <div>
                <p>Let's go back to the dashboard, so we can see your progress!</p>
            </div>
            <button>Dashboard</button>
        </div>
    );
}

export default Completed;

