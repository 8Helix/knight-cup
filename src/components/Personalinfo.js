import Frame from './Frame';
import PersonalinfoImage from '../imgs/Personalinfo-image.png';
import InfoDescription from './InfoDescription';
import Buttons from './Buttons';

function Personalinfo() {
  return (
    <Frame image={PersonalinfoImage}>
      <div className="personalinfo-quote quote">
        <p>
          <q>When you see a good move, look for a better one.</q>
          -Emanuel Lasker
        </p>
      </div>
      <>
        <InfoDescription>
          <>Start creating your account</>
          <>Personal information</>
        </InfoDescription>
        <form className="personal-form container">
          <input placeholder="Name*" />
          <input placeholder="Email address*" />
          <input placeholder="Phone number*" />
          <input placeholder="Date of birth*" />
        </form>
        <Buttons back="/" next="/chess-experience" />
      </>
    </Frame>
  );
}

export default Personalinfo;
