import Frame from '../components/Frame';
import OnBoading from '../imgs/OnBoarding.png';
import SuccessRocket from '../imgs/SuccessRocket.png';
import './OnBoard.modules.css';
import { Navigate, useLocation } from 'react-router-dom';

function Onboard() {
  const { state } = useLocation();

  if (!state) return <Navigate to="/" />;

  return (
    <Frame image={OnBoading}>
      <></>
      <div className="onboard">
        <img src={SuccessRocket} alt="Success Rocket" />
        <h4>Onboarding completed!</h4>
      </div>
    </Frame>
  );
}

export default Onboard;
