
import { CREATE_NOTIFIER, DELETE_NOTIFIER } from '../constants';

const initState = {
	notifications: [],
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

        case CREATE_NOTIFIER:
			return({
				...state,
				notifications: [...state.notifications, action.payload ]
            });
            
        case DELETE_NOTIFIER:
			return({
				...state,
				notifications: state.notifications.filter( item => item.id !== action.payload )
			});

        default:
			return state;
    }

}

export default reducer;