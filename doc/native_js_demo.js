
/*
	Redux native js demo
*/

import { createStore, compose } from 'redux';

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
	
const initState = {
	counter: 0,
	course: ""
}

const ADD_COUNT = "ADD_COUNT";
const SUB_COUNT = "SUB_COUNT";
const CHANGE_COURSE = "CHANGE_COURSE";

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

};


const store = createStore( reducer, composeEnhancers() );


const addAction = { type: ADD_COUNT };
const subAction = { type: SUB_COUNT };
const changeCourse = {
	type: CHANGE_COURSE,
	payload: "React.js"
}

store.dispatch(changeCourse)
store.dispatch(addAction)
store.dispatch(addAction)
store.dispatch(addAction)
store.dispatch(addAction)

console.log( store );

const render = () => {
	const root = document.getElementById('root');
	root.innerHTML = store.getState().counter;
}
render();
store.subscribe( render );

document.addEventListener('DOMContentLoaded', () => {

	const add_btn = document.getElementById('add');
	const sub_btn = document.getElementById('sub');

	add_btn.addEventListener('click', () => {
		store.dispatch( addAction );
	})
	sub_btn.addEventListener('click', () => {
		store.dispatch( subAction );
	})

});