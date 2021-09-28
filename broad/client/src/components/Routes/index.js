import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage'
import Login from '../../pages/auth/Login'
import Signup from '../../pages/auth/Signup'
import SignupGenres from '../../pages/auth/SignupGenres'

import * as PATHS from '../../utils/paths';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
      <Route exact path={PATHS.LOGIN} render={() => <Login />} />
      <Route exact path={PATHS.SIGNUP} render={() => <Signup />} />
      <Route exact path={PATHS.SIGNUP_GENRES} render={() => <SignupGenres />} />
    </Switch>
  );
};

export default Routes;
