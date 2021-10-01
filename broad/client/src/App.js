import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes';

//BOOTSTRAP
import './App.scss';

//MATERIALUI
//import { Container } from '@material-ui/core'
import Navbar from './components/Layout/Navtop'
import AuthService from './services/auth.service';

const authService = new AuthService();

const App = (props) => {

  const [loggedUser, setLoggedUser] = useState(undefined)

  const storeUser = (user) => setLoggedUser(user)

  const fetchUser = () => {
    authService.isLoggedIn()
      .then(res => storeUser(res.data))
      .catch(err => storeUser(null))
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <Router>
        <Navbar loggedUser={loggedUser} {...props} />

        <Routes loggedUser={loggedUser} storeUser={storeUser} />

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
