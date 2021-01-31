import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { ADD_COUNT, SUB_COUNT } from '../constants';

const CounterHook = () => {

    const counter = useSelector( state => state.counter.counter );
    const dispatch = useDispatch();

    const add = () => {
        dispatch({ type: ADD_COUNT });
    }

    const sub = () => {
        dispatch({ type: SUB_COUNT });
    }

    return(
        <div>
            <h2>{ counter }</h2>
            <button onClick={add}> + </button>
            <button onClick={sub}> - </button>
        </div>
    );
}

export default CounterHook;
