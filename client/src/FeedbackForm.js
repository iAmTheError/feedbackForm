import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm() {
    const [feedback, setFeedback] = useState({'name': '', 'message': ''});
    const [response, setResponse] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/feedback', feedback);
            feedback.name = '';
            feedback.message = '';
            console.log('Feedback submitted successfully');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    const handleRetrieve = async () => {
        try{
            const res = await axios.get('http://localhost:5000/feedback')
            setResponse(res.data)
        } catch (error) {
            console.error('Error retrieving feedback:', error);
        }
    };
        

    return (
        <div>
            <h1>Feedback Form</h1>
            <input type="text" placeholder="Name" value={feedback.name} onChange={(e) => setFeedback({...feedback, name: e.target.value})} />
            <input type="text" placeholder="Your Message" value={feedback.message} onChange ={(e) => setFeedback({...feedback, message: e.target.value})} />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {response.map((item, idx) => (
                    <div key={idx}>
                        <strong>{item.name}</strong>: {item.message}
                    </div>
                ))}
            </div>
            <button onClick={handleRetrieve}>Retrieve</button>
        </div>
    )
}