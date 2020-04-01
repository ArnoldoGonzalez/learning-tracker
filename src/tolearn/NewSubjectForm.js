import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createSubject } from './actions'
import './NewSubjectForm.css';

const NewSubjectForm = ({ subjects, onCreatePressed }) => {
    const [inputSubject, setSubjectsValue, inputTopic, setTopicValue, inputQuestion, setQuestionValue] = useState('');
    
    return(
        <div clasName="new-subject-form">
            {/* <input 
                className="new-subject-input"
                type="text"
                
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} /> */}
                <form>
                    <label>Subject</label>
                    <input name="subject" placeholder="Type your now Subject here"
                    value={inputSubject}
                    onChange={e => setSubjectsValue(e.target.value)} />
                    
                    <label>Topic</label>
                    <input name="topic" placeholder="Type your now Topic here" 
                    value={inputTopic}
                    onChange={e => setTopicValue(e.target.value)} />

                    <label>Question</label>
                    <input name="question" placeholder="Type your now Question here"
                    value={inputQuestion}
                    onChange={e => setQuestionValue(e.target.value)} />
                    
                    <input type="submit" />

                </form>
            <button 
                onClick={() => {
                    const isDuplicateText =
                        subjects.some(subject => subject.text === inputSubject);
                    if(!isDuplicateText) {
                        onCreatePressed({inputSubject, inputTopic, inputQuestion});
                        setSubjectsValue('');
                    }
                }}
                className="new-subject-button">
                Add subject
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    subjects: state.subjects,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createSubject(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSubjectForm);