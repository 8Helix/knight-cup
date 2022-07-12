import { useNavigate } from 'react-router-dom';
import ArrowCircle from '../components/svgs/ArrowCircle';
import LandingImage from '../imgs/Landing-image.png';
import Frame from '../components/Frame';
import './LandingPage.modules.css';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Frame image={LandingImage}>
      <></>
      <div className="landing-section">
        <h1>
          Chess says
          <div className="paragraph">
            <p>a lot about</p>
          </div>
          who we are
        </h1>
        <button
          className="button black-button"
          onClick={() => navigate('/personal-information')}
        >
          Get Started <ArrowCircle />
        </button>
      </div>
    </Frame>
  );
}

export default LandingPage;
