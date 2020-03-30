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