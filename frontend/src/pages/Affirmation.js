import React, { useState, useEffect, useContext } from 'react';
import '../styles/AcAv.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Affirmation() {
    const { user, setUser } = useContext(UserContext);
    const [affirmation, setAffirmation] = useState("");
    const [affirmationId, setAffirmationId] = useState("");

    useEffect(() => {
        fetch("/daily-affirmation", {
            method: 'GET'
        }).then(
            res => res.json()
        ).then(
            data => {
                setAffirmation(data.affirmation);
                setAffirmationId(data.id);
            }
        ).catch(
            error => console.error('Error:', error)
        );
    }, [user]);

    const navigate = useNavigate();

    const handleButtonClick = () => {
        fetch(`/complete_affirmation?id=${affirmationId}&uid=${user['User id']}`, {
            method: 'GET'
        }).then(
            res => res.json()
        ).then(
            data => {
                if (data.completion_status !== false) {
                    setUser(prevUser => ({
                        ...prevUser,
                        'Completed affirmation ids': data['Completed affirmation ids'],
                        'Completed activity ids': prevUser['Completed activity ids'] || []
                    }));

                    console.log("updated user context");
                    console.log(user);
                    navigate('/completed');
                } else {
                    console.error('Failed to complete affirmation');
                }
            }
        ).catch(
            error => console.error('Error:', error)
        );
    };

    return (
        <div className="ac-av">
            <p>{affirmation}</p>
            <button onClick={handleButtonClick}>Complete Affirmation</button>
        </div>
    );
}

export default Affirmation;
