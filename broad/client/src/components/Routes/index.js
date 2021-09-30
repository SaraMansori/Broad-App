import React from 'react';
import * as PATHS from '../../utils/paths';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage'
import Login from '../../pages/auth/Login'
import Signup from '../../pages/auth/Signup'
import SignupInfo from '../../pages/users/SignupInfo'
import SignupGenres from '../../pages/users/SignupGenres'
import BookResults from '../../pages/BookResults';
import Profile from '../../pages/Profile2';
import '../../App.scss';
import Requests from '../../pages/users/Requests';


const Routes = props => {
  return (
    <React.StrictMode>
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
        <Route exact path={PATHS.LOGIN} render={() => <Login loggedUser={props.loggedUser} storeUser={props.storeUser} />} />
        <Route exact path={PATHS.SIGNUP} render={() => <Signup loggedUser={props.loggedUser} />} />
        <Route exact path={PATHS.SIGNUP_INFO} render={() => <SignupInfo loggedUser={props.loggedUser} />} />
        <Route exact path={PATHS.SIGNUP_GENRES} render={() => <SignupGenres loggedUser={props.loggedUser} />} />
        <Route exact path={PATHS.BOOK_RESULTS_TEXT} render={() => <BookResults searchType='text' {...props} />} />
        <Route exact path={PATHS.BOOK_RESULTS_TITLE} render={() => <BookResults searchType='title' {...props} />} />
        <Route exact path={PATHS.BOOK_RESULTS_AUTHOR} render={() => <BookResults searchType='author' {...props} />} />
        <Route exact path={PATHS.BOOK_RESULTS_ISBN} render={() => <BookResults searchType='isbn' {...props} />} />
        <Route exact path={PATHS.BOOK_RESULTS_CATEGORY} render={() => <BookResults searchType='category' {...props} />} />
        <Route exact path={PATHS.REQUESTS} render={() => <Requests loggedUser={props.loggedUser} storeUser={props.storeUser} />} />
        <Route exact path={PATHS.PROFILE} render={() => <Profile loggedUser={props.loggedUser} />} />
      </Switch>
    </React.StrictMode>
  );
};

export default Routes;
