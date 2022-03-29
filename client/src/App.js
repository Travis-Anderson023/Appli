import { Route, Router, Routes } from '@react/router';
import { Home } from './pages/Home';
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
