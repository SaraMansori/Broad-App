import { createTheme } from '@material-ui/core/styles';

const LightTheme = createTheme({
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
    fontSize: 16,
  },
});

export default LightTheme;
