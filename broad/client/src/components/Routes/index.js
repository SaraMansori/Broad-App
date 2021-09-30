import React from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import HomePage from '../../pages/HomePage';
import Login from '../../pages/auth/Login';
import Signup from '../../pages/auth/Signup';
import SignupInfo from '../../pages/users/SignupInfo';
import SignupGenres from '../../pages/users/SignupGenres';
import Profile from '../../pages/Profile2';
=======
import HomePage from '../../pages/HomePage'
import Login from '../../pages/auth/Login'
import Signup from '../../pages/auth/Signup'
import SignupInfo from '../../pages/users/SignupInfo'
import SignupGenres from '../../pages/users/SignupGenres'
import BookResults from '../../pages/BookResults';

import '../../App.scss';
>>>>>>> 1490b3350e461cf867d4b4045026927ffdb5eeb1

import * as PATHS from '../../utils/paths';

const Routes = props => {
  return (
<<<<<<< HEAD
    <Switch>
      <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
      <Route
        exact
        path={PATHS.LOGIN}
        render={() => <Login loggedUser={props.loggedUser} storeUser={props.storeUser} />}
      />
      <Route exact path={PATHS.SIGNUP} render={() => <Signup loggedUser={props.loggedUser} />} />
      <Route exact path={PATHS.SIGNUP_INFO} render={() => <SignupInfo loggedUser={props.loggedUser} />} />
      <Route exact path={PATHS.SIGNUP_GENRES} render={() => <SignupGenres loggedUser={props.loggedUser} />} />
      <Route exact path={PATHS.PROFILE} render={() => <Profile loggedUser={props.loggedUser} />} />
    </Switch>
=======
    <React.StrictMode>
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
        <Route exact path={PATHS.LOGIN} render={() => <Login loggedUser={props.loggedUser} storeUser={props.storeUser} />} />
        <Route exact path={PATHS.SIGNUP} render={() => <Signup loggedUser={props.loggedUser} />} />
        <Route exact path={PATHS.SIGNUP_INFO} render={() => <SignupInfo loggedUser={props.loggedUser} />} />
        <Route exact path={PATHS.SIGNUP_GENRES} render={() => <SignupGenres loggedUser={props.loggedUser} />} />
        <Route exact path={PATHS.BOOK_RESULTS} render={() => <BookResults {...props} />} />
      </Switch>
    </React.StrictMode>
>>>>>>> 1490b3350e461cf867d4b4045026927ffdb5eeb1
  );
};

export default Routes;
