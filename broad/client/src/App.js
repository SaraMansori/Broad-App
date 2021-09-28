import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from './components/Routes';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core'
import AuthService from './services/auth.service';

import { Button } from '@mui/material';

const theme = createTheme({

  palette: {
    type: 'light',
    primary: {
      main: '#805d93',
    },
    secondary: {
      main: '#169873',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightRegular: 600,
    fontWeightMedium: 800,
    fontWeightBold: 900,
    fontWeightLight: 400,
  },

});

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <NavBar /> */}
      <Routes loggedUser={loggedUser} />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
