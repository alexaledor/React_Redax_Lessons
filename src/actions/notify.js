import uniqid from 'uniqid';
import { CREATE_NOTIFIER, DELETE_NOTIFIER } from '../constants';

export const createNotifier = (text, status ) => (dispatch) => {
    dispatch({
        type: CREATE_NOTIFIER,
        payload: {
            id: uniqid(),
            text,
            status
        }
    })
}


export const deleteNotifier = id => dispatch => {
    dispatch({
        type: DELETE_NOTIFIER,
        payload: id
    });
}
