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

    const handleButtonClick = () => {
        console.log(user)
        fetch(`/complete_activity?id=${activityId}&uid=${user['User id']}`, {
            method: 'GET'
        }).then(
            res => res.json()
        ).then(
            data => {
                if (data.completion_status !== false) {
                    setUser(prevUser => ({
                        ...prevUser,
                        'Completed activity ids': data['Completed activity ids'],
                        'Completed affirmation ids': prevUser['Completed affirmation ids'] || []
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
            <p>{activity}</p>
            <button onClick={handleButtonClick}>Complete Activity</button>
        </div>
    );
}

export default Activity;
