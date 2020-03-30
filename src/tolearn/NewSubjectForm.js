import React, { useState } from 'react';
import './NewSubjectForm.css';

const NewSubjectForm = () => {
    const [inputValue, setInputValue] = useState('');
    return(
    <div clasName="new-subject-form">
        <input 
            className="new-subject-input"
            type="text"
            placeholder="Type your now Subject here"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
        <button className="new-subject-button">Add subject</button>
    </div>
    );
};

export default NewSubjectForm;