import React, { useState, useEffect } from 'react';
import '../styles/AcAv.css';
import { useNavigate } from 'react-router-dom';


function Affirmation() {
    const [affirmation, setAffirmation] = useState("");

    useEffect(() => {
        fetch("/daily-affirmation", {
            method: 'GET'
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                setAffirmation(data);
            }
        ).catch(
            error => console.error('Error:', error)
        );
    }, []);

    const navigate = useNavigate();

    const handleButtonClick= () => {
        navigate('/completed');
    };

    return (
        <div className="ac-av">
            <h2>The universe has a reminder for you!</h2>
            <p>{affirmation}</p>
            <button onClick={handleButtonClick}>I did it!</button>
        </div>
    );
}

export default Affirmation;
