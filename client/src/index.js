import {
  ApolloClient, ApolloProvider,
  createHttpLink, InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  console.log('got the token!')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
      default: '#fff',
      paper: '#dfe3ee',
    }
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  typography: {
    h1: {
      fontFamily: "Oxygen, Balsamiq Sans, cursive",
    },
    body1: {
      fontFamily: "Oxygen, cursive",
    },
  },
},
);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
