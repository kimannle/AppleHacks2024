import React, { useState, useEffect } from 'react';
import '../styles/AcAv.css';

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

    return (
        <div className="ac-av">
            <h2>The universe has a reminder for you!</h2>
            <p>{affirmation}</p>
            <button>I did it!</button>
        </div>
    );
}

export default Affirmation;
