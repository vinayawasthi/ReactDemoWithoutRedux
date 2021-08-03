import React from 'react';
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route exact path="/not-found" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;