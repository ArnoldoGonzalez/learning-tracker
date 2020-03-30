import React from 'react';
import './SubjectToLearn.css';


const SubjectToLearn = ({ subject }) => (
    <div className="subject-container">
        <h3>{subject.text}</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button className="remove-button">Remove</button>
        </div>
    </div>
);

export default SubjectToLearn;