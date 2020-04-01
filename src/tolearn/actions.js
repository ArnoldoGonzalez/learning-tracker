export const CREATE_SUBJECT = 'CREATE_SUBJECT';
export const createSubject = text => ({
    type: CREATE_SUBJECT,
    payload: { text },
});

export const REMOVE_SUBJECT = 'REMOVE_SUBJECT';
export const removeSubject = text => ({
    type: REMOVE_SUBJECT,
    payload: { text },
});

export const CREATE_MATERIAL = 'CREATE_MATERIAL';
export const createMaterial = text => ({
    type: CREATE_MATERIAL,
    payload: { text },
});

export const REMOVE_MATERIAL = 'REMOVE_MATERIAL';
export const removeMATERIAL = text => ({
    type: REMOVE_MATERIAL,
    payload: { text },
});

export const CREATE_TOPIC = 'CREATE_TOPIC';
export const createTopic = text => ({
    type: CREATE_TOPIC,
    payload: { text },
});

export const REMOVE_TOPIC = 'REMOVE_TOPIC';
export const removeTopic = text => ({
    type: REMOVE_TOPIC,
    payload: { text },
});

export const CREATE_QUESTION = 'CREATE_QUESTION';
export const createQuestion = text => ({
    type: CREATE_QUESTION,
    payload: { text },
});

export const REMOVE_TOPIC = 'REMOVE_TOPIC';
export const removeTopic = text => ({
    type: REMOVE_TOPIC,
    payload: { text },
});

export const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE';
export const markAsComplete = text => ({
    type: MARK_AS_COMPLETE,
    payload: {text},
});