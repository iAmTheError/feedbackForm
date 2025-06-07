import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to FeedbackHub!</h1>
      <p className="home-desc">
        FeedbackHub is a simple platform where you can share your thoughts and read feedback from others.<br/>
        Use the links below to add your own feedback or view what others have shared.
      </p>
      <div className="home-links">
        <Link to="/addfeedback" className="home-link">Add Feedback</Link>
        <Link to="/viewfeedback" className="home-link">View Feedback</Link>
      </div>
    </div>
  );
}
