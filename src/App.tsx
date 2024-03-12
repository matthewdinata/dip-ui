import './App.css';

// Utils
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import { ChatbotPage } from './pages/ChatbotPage';

function App() {
  return (
    // I removed the div as i couldnt line up the div properly in mobile view. Uncomment if you really want to use this, i will find a way to realign my divs
    // <div className='m-8'>
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
          <Route
            path='/chatbot'
            element={<ChatbotPage />}
          />
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
