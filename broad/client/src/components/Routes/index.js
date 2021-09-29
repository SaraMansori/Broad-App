import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage'
import Login from '../../pages/auth/Login'
import Signup from '../../pages/auth/Signup'
import SignupInfo from '../../pages/users/SignupInfo'
import SignupGenres from '../../pages/users/SignupGenres'

import * as PATHS from '../../utils/paths';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
      <Route exact path={PATHS.LOGIN} render={() => <Login loggedUser={props.loggedUser} storeUser={props.storeUser} />} />
      <Route exact path={PATHS.SIGNUP} render={() => <Signup loggedUser={props.loggedUser} />} />
      <Route exact path={PATHS.SIGNUP_INFO} render={() => <SignupInfo loggedUser={props.loggedUser} />} />
      <Route exact path={PATHS.SIGNUP_GENRES} render={() => <SignupGenres loggedUser={props.loggedUser} />} />
    </Switch>
  );
};

export default Routes;
