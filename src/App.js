import React from 'react';
import Home from './Home.js';
import Resources from './Resources.js';
import Singledata from './Singledata.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route exact path="/resources" component={Resources}/>
          <Route path="/resources/:id" component={Singledata} />
        </Switch>
      </div>
    </Router>
  );
}

