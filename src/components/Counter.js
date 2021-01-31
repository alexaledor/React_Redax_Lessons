 import React from 'react'

const Counter = ({ counter, add, sub }) => {
    console.log(counter, add, sub );
    return(
        <div>
            <h2>{ counter }</h2>
            <button onClick={add}> + </button>
            <button onClick={sub}> - </button>
        </div>
    );
}

export default Counter;

