import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Nav from './components/navigation/Nav';
import Settings from './components/pages/Settings';
import QuickStart from './components/pages/QuickStart';
import Timer from './components/timer/Timer';

function App() {
  return (
    <HashRouter basename="/">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Timer />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/quick-start">
          <QuickStart />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
