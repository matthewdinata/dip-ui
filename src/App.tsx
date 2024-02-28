import './App.css';

// Utils
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className='m-8'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<LandingPage />}
          />
          <Route
            path='/dashboard'
            element={<DashboardPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
