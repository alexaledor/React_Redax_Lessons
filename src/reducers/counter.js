
import { ADD_COUNT, SUB_COUNT, CHANGE_COURSE, } from '../constants';

const initState = {
    counter: 0,
	course: "",
}

const reducer = ( state = initState, action ) => {
	switch( action.type ){

        case ADD_COUNT:
			return({
				...state,
				counter: state.counter + 1
			});

		case SUB_COUNT:
			return({
				...state,
				counter: state.counter - 1
			});

		case CHANGE_COURSE:
			return({
				...state,
				course: action.payload
			})

        default:
			return state;
    }

}

export default reducer;