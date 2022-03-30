import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      light: '#dfe3ee',
      main: '#8b9dc3',
      dark: '#3b5998'
    },
    secondary: {
      main: '#f44336'
    },
    text: {
      primary: '#212121',
    },
    background: {
      default: '#dfe3ee',
      paper: '#dfe3ee',
    }
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  typography: {
    h1: {
      fontFamily: "Chakra Petch, Balsamiq Sans, cursive",
    },
    body1: {
      fontFamily: "Chakra Petch, cursive",
    },
  },
},

);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
