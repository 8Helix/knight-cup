import { useContext, useState, useEffect } from 'react';
import Frame from './Frame';
import PersonalinfoImage from '../imgs/Personalinfo-image.png';
import InfoDescription from './InfoDescription';
import Buttons from './Buttons';
import { InfoContext } from '../context/InfoContext';
import './Personalinfo.modules.css';
import PersonalForm from './PersonalForm';

function Personalinfo() {
  const { info, setInfo } = useContext(InfoContext);

  const [validInfo, setValidInfo] = useState(() => {
    const data = localStorage.getItem('Info');
    if (data && data.name && data.email && data.phone && data.date_of_birth) {
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
      return false;
    }
    localStorage.setItem('Info', JSON.stringify(info));
    return true;
  }

  useEffect(() => {
    setInfo(() => {
      const data = localStorage.getItem('Info');
      if (data) return { ...JSON.parse(data) };
      return {
        name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        experience_level: '',
        already_participated: true,
        character_id: '',
      };
    });
  }, []);

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
      </div>
    </Frame>
  );
}

export default Personalinfo;
