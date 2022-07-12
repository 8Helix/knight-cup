import { useContext, useState, useMemo } from 'react';
import Frame from '../components/Frame';
import PersonalinfoImage from '../imgs/Personalinfo-image.png';
import InfoDescription from '../components/InfoDescription';
import Buttons from '../components/Buttons';
import { InfoContext } from '../context/InfoContext';
import './Personalinfo.modules.css';
import PersonalForm from '../components/PersonalForm';
import ErrorBox from '../components/ErrorBox';
import { validChecker } from '../helpers/functions';
import { v4 } from 'uuid';

function Personalinfo() {
  const { info } = useContext(InfoContext);

  const [validInfo, setValidInfo] = useState({
    name: validChecker(info, 'name'),
    email: validChecker(info, 'email'),
    phone: validChecker(info, 'phone'),
    date_of_birth: '',
  });

  let x = useMemo(() => {
    return -1;
  }, [validInfo]);

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
        {Object.values(validInfo).map((item, i) => {
          if (item === false) {
            x++;
            switch (i) {
              case 0:
                return (
                  <ErrorBox
                    title="Invalid level"
                    message="Please enter valid name"
                    setValidInfo={setValidInfo}
                    validInfo={validInfo}
                    x={x}
                    index={i}
                    key={v4()}
                  />
                );
              case 1:
                return (
                  <ErrorBox
                    title="Invalid email"
                    message="Please enter valid email address"
                    setValidInfo={setValidInfo}
                    validInfo={validInfo}
                    x={x}
                    index={i}
                    key={v4()}
                  />
                );
              case 2:
                return (
                  <ErrorBox
                    title="Invalid phone"
                    message="Please enter valid phone number"
                    setValidInfo={setValidInfo}
                    validInfo={validInfo}
                    x={x}
                    index={i}
                    key={v4()}
                  />
                );

              case 3:
                return (
                  <ErrorBox
                    title="Invalid date"
                    message="Please enter valid birth date"
                    setValidInfo={setValidInfo}
                    validInfo={validInfo}
                    x={x}
                    index={i}
                    key={v4()}
                  />
                );
            }
          }
        })}
      </div>
    </Frame>
  );
}

export default Personalinfo;
