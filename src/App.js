import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './components/navigation/Nav';
import Settings from './components/pages/Settings';
import Timer from './components/timer/Timer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Timer />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
