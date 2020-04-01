import { CREATE_SUBJECT, REMOVE_SUBJECT, CREATE_MATERIAL, REMOVE_MATERIAL, CREATE_TOPIC, REMOVE_TOPIC, CREATE_QUESTION, REMOVE_QUESTION MARK_AS_COMPLETE } from './actions';

export const subjects = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_SUBJECT: {
            const { text } = payload;
            const newSubject = {
                text,
                isCompleted: false,
            };
            return state.concat(newSubject);
        }
        case REMOVE_SUBJECT: {
            const { text } = payload;
            return state.filter(subject => subject.text !== text);
        }
        case MARK_AS_COMPLETE: {
            const { text } = payload;
            return state.map(subject => {
                if (subject.text === text) {
                    return { ...subject, isCompleted: true };
                }
                return subject;
            });
        }
        default:
            return state;
    }
}

export const topic = (state = [], action) => {
    const { type, payload} = action;
    
    switch (type) {
        case CREATE_TOPIC: {
            const { text } = payload;
            const newTopic = {
                text,
                isCompleted: false,
            };
            return state.concat(newTopic);
        }
        case REMOVE_TOPIC: {
            const { text } = payload;
            return state.filter(topic => topic.text !== text);
        }
        default:
            return state;
    }
}

export const question = (state = [], action) => {
    const { type, payload} = action;

    switch (type) {
        case CREATE_TOPIC: {
            const { text } = payload;
            const newTopic = {
                text,
                isCompleted: false,
            };
            return state.concat(newTopic);
        }
        case REMOVE_TOPIC: {
            const { text } = payload;
            return state.filter(topic => topic.text !== text);
        }
        default:
            return state;
    }
}

export const materials = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_MATERIAL: {
            const { text } = payload;
            const newMaterial = {
                text,
                isCompleted: false,
            };
            return state.concat(newMaterial);
        }
        case REMOVE_MATERIAL: {
            const { text } = payload;
            return state.filter(material => material.text !== text);
        }
        default:
            return state;
    }
}