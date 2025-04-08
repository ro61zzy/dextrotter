//src/theme/theme

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Use 'light' for light mode
    primary: {
      main: '#0a74da', // Adjust this color to your branding
    },
    secondary: {
      main: '#ff7f50', // Adjust this as well
    },
    background: {
      default: '#121212', // Background color for the app
      paper: '#1e1e1e', // Background color for card-like elements
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Choose your preferred font
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px', // Rounded corners for buttons
        },
      },
    },
  },
});

export default theme;
