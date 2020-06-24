import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Nav from './navigation/Nav';
import Settings from './pages/Settings';
import QuickStart from './pages/QuickStart';
import Timer from './timer/Timer';
import { changeSound, setTheme } from '../actions';
import { LOCALSTORAGE } from '../configs';

import GlobalStlyes, { darkTheme, lightTheme } from '../styles/GlobalStyles';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const sound = localStorage.getItem(LOCALSTORAGE.sound);
    const theme = localStorage.getItem(LOCALSTORAGE.theme.key);
    if (theme) {
      dispatch(setTheme(theme));
    }
    if (sound) {
      dispatch(changeSound(sound));
    }
  }, [dispatch]);

  return (
    <ThemeProvider
      theme={theme === LOCALSTORAGE.theme.light ? lightTheme : darkTheme}
    >
      <GlobalStlyes />
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
    </ThemeProvider>
  );
};

export default App;
