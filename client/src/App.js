import { Box } from '@mui/material';
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

  return (
    <Box sx={styles.wrapper}>
      {window.location.pathname !== '/' ? <Nav /> : undefined}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
