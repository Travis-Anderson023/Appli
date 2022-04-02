import { Box, useMediaQuery } from '@mui/material';
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
      flexDirection: ['column-reverse', 'column'],
      overflow: 'hidden',
      justifyContent: 'space-between',
    }
  }
  const [appFilter, setAppFilter] = useState('');
  const [page, setPage] = useState(1);
  const isSmOrUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <BrowserRouter >
      <Box sx={styles.wrapper}>

        {window.location.pathname !== '/' ? <Nav setAppFilter={setAppFilter} isSmOrUp={isSmOrUp} page={page} setPage={setPage} /> : undefined}

        <Routes >
          <Route path="/" element={<Home isSmOrUp={isSmOrUp} />} />
          <Route path="/applications" element={<Applications appFilter={appFilter} isSmOrUp={isSmOrUp} />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
