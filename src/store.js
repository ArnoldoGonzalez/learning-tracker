import { createStore, combineReducers } from 'redux';
import { subjects } from './tolearn/reducers';

const reducers = {
    subjects,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);