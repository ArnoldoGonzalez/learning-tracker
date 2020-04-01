import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createMaterial } from './actions';

const NewMaterial = ({ material = [],
    onCreatePressed }) => {
        const [inputValue, setInputValue] = useState('');
        
        return(
            <div>
                <input
                    className="new-material-input"
                    type="text"
                    placeholder="Type your new material here"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button
                    onClick={() => {
                        const isDuplicateText = material.some(material => material.text === inputValue);
                        if(!isDuplicateText) {
                            onCreatePressed(inputValue);
                            setInputValue('');
                        }
                    }}
                    className ="new-material-button"
                    >
                        Add Material
                    </button>
            </div>
        );
    };

    const mapStateToProps = state => ({
        materials: state.materials,
    });

    const mapDispatchToProps = dispatch => ({
        onCreatePressed: text => dispatch(createMaterial(text)),
    });

    export default connect(mapStateToProps, mapDispatchToProps)(NewMaterial);