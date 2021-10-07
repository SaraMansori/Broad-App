import React, { useContext } from 'react'
import UserContext from '../../UserContext'
import * as PATHS from '../../utils/paths'
import BookResultsRoutes from './BookResultsRoutes'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import Login from '../../pages/auth/Login'
import Signup from '../../pages/auth/Signup'
import SignupInfoPage from '../../pages/SignupInfoPage/SignupInfoPage'
import SignupGenresPage from '../../pages/SignupGenresPage/SignupGenresPage'
import RequestsPage from '../../pages/RequestsPage/RequestsPage'
import UsersPage from '../../pages/UsersPage/UsersPage'
import BookExchangePage from '../../pages/BookExchangePage/BookExchangePage'
import UserProfilePage from '../../pages/UserProfilePage/UserProfilePage'
import EditUserPage from '../../pages/EditUserPage/EditUserPage'
import ChatPage from '../../pages/ChatPage/ChatPage'
import ExchangedBooksPage from '../../pages/ExchangedBooksPage/ExchangedBooksPage'
import UserDetailsPage from '../../pages/UserDetailsPage/UserDetailsPage'
import ProtectedRoutes from './ProtectedRoutes'
  

const Routes = props => {

  const { loggedUser } = useContext(UserContext)

  return (
    <React.StrictMode>
      <Switch>

        <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
        <Route exact path={PATHS.LOGIN} render={() => <Login />} />
        <Route exact path={PATHS.SIGNUP} render={() => <Signup />} />

        <ProtectedRoutes condition={loggedUser} urlRedirect={PATHS.LOGIN}>
          <Route exact path={PATHS.SIGNUP_INFO} render={() => <SignupInfoPage />} />
          <Route exact path={PATHS.SIGNUP_GENRES} render={() => <SignupGenresPage />} />
          <BookResultsRoutes />
          <Route exact path={PATHS.REQUESTS} render={() => <RequestsPage />} />
          <Route exact path={PATHS.USERS} render={() => <UsersPage />} />
          <Route exact path={PATHS.PROFILE} render={() => <UserProfilePage />} />
          <Route exact path={PATHS.EDIT_PROFILE} render={() => <EditUserPage />} />
          <Route exact path={PATHS.BOOK_EXCHANGE} render={() => <BookExchangePage />} />
          <Route path={PATHS.CHATS} render={() => <ChatPage />} />
          <Route path={PATHS.BOOKS_EXCHANGED} render={() => <ExchangedBooksPage />} />
          <Route exact path={PATHS.USER_DETAILS} render={props => <UserDetailsPage {...props} />} />
        </ProtectedRoutes>

      </Switch>
    </React.StrictMode>
  )

}


export default Routes
