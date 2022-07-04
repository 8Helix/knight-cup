import Frame from './Frame';
import OnBoading from '../imgs/OnBoarding.png';
import SuccessRocket from '../imgs/SuccessRocket.png';

function Onboard() {
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
