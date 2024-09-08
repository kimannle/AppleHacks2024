import React, { useState, useEffect, useContext } from 'react';
import '../styles/AcAv.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Activity() {
    const { user, setUser } = useContext(UserContext);
    const [activity, setActivity] = useState("");
    const [activityId, setActivityId] = useState("");

    useEffect(() => {
        fetch("/daily-activity", {
            method: 'GET'
        }).then(
            res => res.json()
        ).then(
            data => {
                setActivity(data.activity);
                setActivityId(data.id);
            }
        ).catch(
            error => console.error('Error:', error)
        );
    }, [user]);

    const navigate = useNavigate();

    const handleButtonClick= () => {
        fetch(`/complete_activity?id=${activityId}&uid=${user.ID}`, {
            method: 'GET'

        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                if (data.completion_status !== false) {
                    setUser(prevUser => ({
                        ...prevUser,
                        completedAffirmationIds: data['Completed activity ids']
                    }));

                    console.log("updated user context");
                    console.log(user);
                    navigate('/completed');
                } else {
                    console.error('Failed to complete activity');
                }
            }
        ).catch(
            error => console.error('Error:', error)
        );
    };

    return (
        <div className="ac-av">
            <h2>The universe has spoken forth today's fated task!</h2>
            <p>{activity}</p>
            <button onClick={handleButtonClick}>I did it!</button>
        </div>
    );
}

export default Activity;
