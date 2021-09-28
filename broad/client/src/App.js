import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@material-ui/core'
import LightTheme from './components/Layout/Theme'
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          {/* <NavBar /> */}
          <Routes />
          {/* <Footer /> */}
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
