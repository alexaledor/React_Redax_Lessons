import React from 'react'
import { Switch, Route } from 'react-router-dom';

import List from './List';
import SinglePost from './SinglePost';

const ListRoot = () => {
    return(
        <>
            <h1> Posts </h1>
            <Switch>
                <Route exact path="/list/" component={List} />
                <Route exact path="/list/:id" component={SinglePost} />
            </Switch>
        </>
    )
}

export default ListRoot;

