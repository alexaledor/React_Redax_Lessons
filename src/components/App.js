import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';


import Counter from './Counter';
import ConnectedCounter from '../containers/connectedCounter';
import CounterHook from './CounterHook';
import List from './List';
import Notifier from './Notifier';

import store from '../redux/store';
import './index.css';

const App = () => {

  return(
    <BrowserRouter>
      <Provider store={store}>

        <Notifier />

        <h1> Redux! </h1>
        <ul>
          <li> <NavLink to="/clear"> Clear </NavLink></li>
          <li> <NavLink to="/connect"> Connect </NavLink></li>
          <li> <NavLink to="/hook"> Hook </NavLink></li>
          <li> <NavLink to="/list"> List </NavLink></li>
        </ul>

        <Switch>
          <Route exact path="/clear" render={ (props) => {
              return(
                  <Counter 
                  counter="NaN"
                  add={ () => console.log('add')}
                  sub={ () => console.log('sub')}
                  {...props}
              />
              )
          }}/>
          <Route exact path="/connect" component={ConnectedCounter}/>
          <Route exact path="/hook" component={CounterHook}/>
          <Route path="/list" component={List}/>
          

        </Switch>

      </Provider>
    </BrowserRouter>
  )
}

export default App;
