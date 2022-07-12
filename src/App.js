import { Routes, Route } from 'react-router-dom';
import ChessExperience from './pages/ChessExperience';
import LandingPage from './pages/LandingPage';
import Onboard from './pages/Onboard';
import Personalinfo from './pages/Personalinfo';
import { InfoContextProvider } from './context/InfoContext';

function App() {
  return (
    <InfoContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/personal-information" element={<Personalinfo />} />
        <Route path="/chess-experience" element={<ChessExperience />} />
        <Route path="/onboarding" element={<Onboard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </InfoContextProvider>
  );
}

export default App;
