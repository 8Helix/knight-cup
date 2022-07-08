import { useContext, useState } from 'react';
import Frame from './Frame';
import PersonalinfoImage from '../imgs/Personalinfo-image.png';
import InfoDescription from './InfoDescription';
import Buttons from './Buttons';
import { InfoContext } from '../context/InfoContext';
import './Personalinfo.modules.css';
import PersonalForm from './PersonalForm';
import ExclamationCircle from './svgs/ExclamationCircle';
import X from './svgs/X';

function Personalinfo() {
  const { info } = useContext(InfoContext);

  const [validInfo, setValidInfo] = useState(() => {
    if (info.name && info.email && info.phone && info.date_of_birth) {
      return {
        name: true,
        email: true,
        phone: true,
        date_of_birth: true,
      };
    } else {
      return {
        name: '',
        email: '',
        phone: '',
        date_of_birth: '',
      };
    }
  });

  function handleValidation() {
    if (!Object.values(validInfo).every((element) => element === true)) {
      const error = Object.values(validInfo).map((element) => {
        if (element === '' || !element) return false;
        return true;
      });
      setValidInfo({
        name: error[0],
        email: error[1],
        phone: error[2],
        date_of_birth: error[3],
      });
      return false;
    }
    localStorage.setItem('Info', JSON.stringify(info));
    return true;
  }

  return (
    <Frame image={PersonalinfoImage}>
      <div className="personalinfo-quote quote">
        <p>
          <q>When you see a good move, look for a better one.</q>
          -Emanuel Lasker
        </p>
      </div>
      <div className="info-form">
        <InfoDescription
          valid={
            Object.values(validInfo).every((element) => element === true)
              ? true
              : false
          }
        >
          <>Start creating your account</>
          <>Personal information</>
        </InfoDescription>
        <PersonalForm validInfo={validInfo} setValidInfo={setValidInfo} />
        <Buttons
          back="/"
          next="/chess-experience"
          label="Next"
          validateInfo={handleValidation}
        />
        <div className="info-module" style={{ top: '25rem' }}>
          <div className="error">
            <div>
              <ExclamationCircle />
              <span className="red">Invalid email</span>
            </div>
            <X />
          </div>
          <p>Please enter valid email address</p>
        </div>
        <div className="info-module" style={{ top: '17rem' }}></div>
        <div className="info-module" style={{ top: '9rem' }}></div>
        <div className="info-module" style={{ top: '1rem' }}></div>
      </div>
    </Frame>
  );
}

export default Personalinfo;
