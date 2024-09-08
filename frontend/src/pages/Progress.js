import React, { useContext, useMemo } from 'react';
import "../styles/Progress.css";
import { UserContext } from '../UserContext';

function Progress() {
    const { user } = useContext(UserContext);

    const activityIdsArray = useMemo(() => {
        return JSON.parse(user['Completed activity ids'] || '[]');
    }, [user]);

    const affirmationIdsArray = useMemo(() => {
        return JSON.parse(user['Completed affirmation ids'] || '[]');
    }, [user]);

    const activityCount = activityIdsArray.length;
    const affirmationCount = affirmationIdsArray.length;

    return (
        <div className="progress-container">
            <h1>Progress</h1>
            <div>
                <p>You're lighting up the cosmos!</p>
            </div>
            <div>
                <p>So far, you have completed {affirmationCount} affirmation and {activityCount} activities!</p>
            </div>
        </div>
    );
}

export default Progress;
