import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from './components/Routes';
import {createTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/core'

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


function App() {
  return (
     <ThemeProvider theme={theme}>
      <CssBaseline />
     
      {/* <NavBar /> */}
      <Routes />
      {/* <Footer /> */}
      </ThemeProvider>   
  );
}

export default App;
