import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, Container } from '@material-ui/core'
import LightTheme from './components/Layout/Theme'
import Navbar from './components/Layout/Navbar'
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

  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container>
          <Routes loggedUser={loggedUser} storeUser={storeUser} />
        </Container>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
