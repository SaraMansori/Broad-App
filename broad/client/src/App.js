import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@material-ui/core'
import LightTheme from './components/Layout/Theme'
import Layout from './components/Layout/Layout';
import AuthService from './services/auth.service';

const authService = new AuthService();

const App = () => {

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

  // Cuando haga falta modificar el user en front
  // <Routes loggedUser={loggedUser} storeUser={storeUser} />

  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          {/* <NavBar /> */}
          <Routes loggedUser={loggedUser} />
          {/* <Footer /> */}
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
