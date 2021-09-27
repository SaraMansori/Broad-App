import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import HomePage from './pages/HomePage';

import * as PATHS from './utils/paths';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
