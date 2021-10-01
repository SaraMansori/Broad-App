import React from 'react';
import * as PATHS from '../../utils/paths';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage'
import Login from '../../pages/auth/Login'
import Signup from '../../pages/auth/Signup'
import SignupInfo from '../../pages/users/SignupInfo'
import SignupGenres from '../../pages/users/SignupGenres'
import RequestsPage from '../../pages/RequestsPage/RequestsPage';
import UsersPage from '../../pages/UsersPage/UsersPage';
import BookResults from '../../pages/BookResults/BookResults';
import Profile from '../../pages/Profile2';
import ChatPage from '../../pages/ChatPage/ChatPage'
import '../../App.scss';


const Routes = props => {
  return (
    <React.StrictMode>
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
        <Route exact path={PATHS.LOGIN} render={() => <Login loggedUser={props.loggedUser} storeUser={props.storeUser} />} />
        <Route exact path={PATHS.SIGNUP} render={() => <Signup loggedUser={props.loggedUser} />} />
        <Route exact path={PATHS.SIGNUP_INFO} render={() => <SignupInfo />} />
        <Route exact path={PATHS.SIGNUP_GENRES} render={() => <SignupGenres />} />
        <Route exact path={PATHS.BOOK_RESULTS_TEXT} render={() => <BookResults searchType='text' {...props} />} />
        <Route exact path={PATHS.BOOK_RESULTS_TITLE} render={() => <BookResults searchType='title' {...props} />} />
        <Route exact path={PATHS.BOOK_RESULTS_AUTHOR} render={() => <BookResults searchType='author' {...props} />} />
        <Route exact path={PATHS.BOOK_RESULTS_ISBN} render={() => <BookResults searchType='isbn' {...props} />} />
        <Route exact path={PATHS.BOOK_RESULTS_CATEGORY} render={() => <BookResults searchType='category' {...props} />} />
        <Route exact path={PATHS.REQUESTS} render={() => <RequestsPage loggedUser={props.loggedUser} storeUser={props.storeUser} />} />
        <Route exact path={PATHS.USERS} render={() => <UsersPage loggedUser={props.loggedUser} storeUser={props.storeUser} />} />
        <Route exact path={PATHS.PROFILE} render={() => <Profile loggedUser={props.loggedUser} />} />
        <Route path={PATHS.CHATS} render={() => <ChatPage loggedUser={props.loggedUser} />} />
      </Switch>
    </React.StrictMode>
  );
};


export default Routes;
