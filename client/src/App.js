import { Box } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/misc/Nav';
import { Account, Applications, Home } from './pages';

export const App = () => {
  const styles = {
    wrapper: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',

    }
  }
  const [appFilter, setAppFilter] = useState('');

  return (
    <Box sx={styles.wrapper}>
      {window.location.pathname !== '/' ? <Nav setAppFilter={setAppFilter} /> : undefined}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications appFilter={appFilter} />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
