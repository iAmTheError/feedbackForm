import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';
import './AllFeedback.css';

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
        return (
        <div className="feedback-form-container">
            <h1 className="feedback-form-title">Feedback Form</h1>
            <input
                type="text"
                className="feedback-input"
                placeholder="Name"
                value={feedback.name}
                onChange={(e) => setFeedback({...feedback, name: e.target.value})}
            />
            <input
                type="text"
                className="feedback-input"
                placeholder="Your Message"
                value={feedback.message}
                onChange={(e) => setFeedback({...feedback, message: e.target.value})}
            />
            <button className="feedback-submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export function AllFeedback() {
    const [response, setResponse] = useState([])
    const handleRetrieve = async () => {
        try{
            const res = await axios.get('http://localhost:5000/feedback')
            setResponse(res.data)
        } catch (error) {
            console.error('Error retrieving feedback:', error);
        }
    };
    return(
    <div className="all-feedback-container">
        <h1 className="all-feedback-title">All Feedback</h1>
        <ul className="feedback-list">
            {response.map((item, idx) => (
                <li className="feedback-item" key={idx}>
                    <strong>{item.name}</strong>: {item.message}
                </li>
            ))}
        </ul>
        <button className="retrieve-btn" onClick={handleRetrieve}>Retrieve</button>
    </div>)
}