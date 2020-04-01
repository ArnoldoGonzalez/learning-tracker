import React from 'react';
import { connect } from 'react-redux';
import NewSubjectForm from './NewSubjectForm';
import SubjectToLearn from './SubjectToLearn';
import { removeSubject, markAsComplete } from './actions';
import './ToLearn.css';
// import NewMaterial from './NewMaterial';

const ToLearn = ({ subjects, onRemovedPressed, onCompletedPressed }) => (
    <div className="list-wrapper">
        <NewSubjectForm />
        {subjects.map(subject => <SubjectToLearn 
            subject={subject}
            topic={topic}
            onRemovedPressed={onRemovedPressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    subjects: state.subjects,
});

const mapDispatchToProps = dispatch => ({
    onRemovedPressed: text => dispatch(removeSubject(text)),
    onCompletedPressed: text => dispatch(markAsComplete(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToLearn);