import { CREATE_SUBJECT, REMOVE_SUBJECT } from './actions';

export const subjects = (state = [], action) => {
    const { type, payload } = aciton;

    switch (type) {
        case CREATE_SUBJECT: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_SUBJECT: {
            const { text } = payload;
            return state.filter(subject => subject.text !== text);
        }
        default:
            return state;
    }
}