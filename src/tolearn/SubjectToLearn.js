import React from 'react';
import MaterialToLearn from './MaterialToLearn'
import './SubjectToLearn.css';


const SubjectToLearn = ({ subject, onRemovedPressed, onCompletedPressed }) => (
    <div className="subject-container">
        <h3>{subject.text}</h3>
        <h4>{}</h4>
        <MaterialToLearn />
        <div className="buttons-container">
            {subject.isCompleted
                ? null 
                : <button 
                    onClick={() => onCompletedPressed(subject.text)}
                    className="completed-button">Mark As Completed</button>}
            <button 
                onClick={() => onRemovedPressed(subject.text)}
                className="remove-button">Remove</button>
        </div>
    </div>
);

export default SubjectToLearn;