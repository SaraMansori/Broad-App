import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Login from '../../pages/auth/Login';
import Signup from '../../pages/auth/Signup';

import * as PATHS from '../../utils/paths';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
      <Route exact path={PATHS.LOGIN} component={Login} />
      <Route exact path={PATHS.SIGNUP} component={Signup} />
    </Switch>
  );
};

export default Routes;
