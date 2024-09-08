import React, { useState, useEffect } from 'react';
import '../styles/AcAv.css';
import { useNavigate } from 'react-router-dom';

function Activity() {
    const [activity, setActivity] = useState("");

    useEffect(() => {
        fetch("/daily-activity", {
            method: 'GET'
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                setActivity(data);
            }
        ).catch(
            error => console.error('Error:', error)
        );
    }, [``]);

    const navigate = useNavigate();

    const handleButtonClick= () => {
        navigate('/completed');
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
