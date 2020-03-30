import React from 'react';
import NewSubjectForm from './NewSubjectForm';
import SubjectToLearn from './SubjectToLearn';
import './ToLearn.css';

const ToLearn = ({ tolearn = [{ text: 'Hello' }] }) => (
    <div className="list-wrapper">
        <NewSubjectForm />
        {tolearn.map(subject => <SubjectToLearn subject={subject} />)}
    </div>
);

export default ToLearn;