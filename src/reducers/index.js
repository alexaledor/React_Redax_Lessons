import { combineReducers } from 'redux';

import posts from './posts';
import counter from './counter';
import notifier from './notifier';


const root_reducer = combineReducers({
	posts,
	counter,
	notifier
});

export default root_reducer;