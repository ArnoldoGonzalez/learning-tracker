import React from 'react';

const MaterialToLearn = ({ material = [] }) => (
    <div className ="material-container">
        <h4>{material.text}</h4>
        <div>
            <a href="www.google.com">${material}</a>
        </div>
    </div>
);

export default MaterialToLearn;