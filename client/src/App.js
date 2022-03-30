import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account, CoverLetters, Home, Resumes, Signup } from './pages';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
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

export const App = () => {
  const styles = {
    wrapper: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',

    }
  }

  return (
    <ApolloProvider client={client}>
      <Box sx={styles.wrapper}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resumes" element={<Resumes />} />
            <Route path="/cover-letters" element={<CoverLetters />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ApolloProvider>
  );
}
