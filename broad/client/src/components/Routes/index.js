import React from 'react'
import * as PATHS from '../../utils/paths'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Login from '../../pages/auth/Login'
import Signup from '../../pages/auth/Signup'
import SignupInfoPage from '../../pages/SignupInfoPage/SignupInfoPage'
import SignupGenresPage from '../../pages/SignupGenresPage/SignupGenresPage'
import RequestsPage from '../../pages/RequestsPage/RequestsPage'
import UsersPage from '../../pages/UsersPage/UsersPage'
import BookResultsPage from '../../pages/BookResultsPage/BookResultsPage'
import BookExchangePage from '../../pages/BookExchangePage/BookExchangePage'
import Profile from '../../pages/Profile'
import EditUserInfoPage from '../../pages/EditUserInfoPage/EditUserInfoPage'
import ChatPage from '../../pages/ChatPage/ChatPage'
import ExchangedBooksPage from '../../pages/ExchangedBooksPage/ExchangedBooksPage'
import UserDetailsPage from '../../pages/UserDetailsPage/UserDetailsPage'
import '../../App.scss'


const Routes = props => {

  return (
    <React.StrictMode>
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
        <Route exact path={PATHS.LOGIN} render={() => <Login />} />
        <Route exact path={PATHS.SIGNUP} render={() => <Signup />} />
        <Route exact path={PATHS.SIGNUP_INFO} render={() => <SignupInfoPage />} />
        <Route exact path={PATHS.SIGNUP_GENRES} render={() => <SignupGenresPage />} />
        <Route exact path={PATHS.BOOK_RESULTS_TEXT} render={() => <BookResultsPage searchType='text' />} />
        <Route exact path={PATHS.BOOK_RESULTS_TITLE} render={() => <BookResultsPage searchType='title' />} />
        <Route exact path={PATHS.BOOK_RESULTS_AUTHOR} render={() => <BookResultsPage searchType='author' />} />
        <Route exact path={PATHS.BOOK_RESULTS_ISBN} render={() => <BookResultsPage searchType='isbn' />} />
        <Route exact path={PATHS.BOOK_RESULTS_CATEGORY} render={() => <BookResultsPage searchType='category' />} />
        <Route exact path={PATHS.REQUESTS} render={() => <RequestsPage />} />
        <Route exact path={PATHS.USERS} render={() => <UsersPage />} />
        <Route exact path={PATHS.PROFILE} render={() => <Profile />} />
        <Route exact path={PATHS.EDIT_PROFILE} render={() => <EditUserInfoPage />} />
        <Route exact path={PATHS.BOOK_EXCHANGE} render={() => <BookExchangePage />} />
        <Route path={PATHS.CHATS} render={() => <ChatPage />} />
        <Route path={PATHS.BOOKS_EXCHANGED} render={() => <ExchangedBooksPage />} />
        <Route exact path={PATHS.USER_DETAILS} render={(props) => <UserDetailsPage {...props} />} />
      </Switch>
    </React.StrictMode>
  )

}


export default Routes
