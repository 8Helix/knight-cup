import { Routes, Route } from 'react-router-dom';
import ChessExperience from './components/ChessExperience';
import LandingPage from './components/LandingPage';
import Onboard from './components/Onboard';
import Personalinfo from './components/Personalinfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/personal-information" element={<Personalinfo />} />
      <Route path="/chess-experience" element={<ChessExperience />} />
      <Route path="/onboarding" element={<Onboard />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
