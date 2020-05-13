import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './components/navigation/Nav';
import Settings from './components/pages/Settings';
import QuickStart from './components/pages/QuickStart';
import Timer from './components/timer/Timer';
import { changeSound } from './actions/index';

class App extends React.Component {
  componentDidMount() {
    const sound = localStorage.getItem('sound');
    if (sound) {
      const { changeSound } = this.props;
      changeSound(sound);
    }
  }

  render() {
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
}

export default connect(null, {
  changeSound,
})(App);
