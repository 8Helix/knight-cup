import Frame from '../components/Frame';
import ChessInfoImage from '../imgs/ChessInfo-image.png';
import InfoDescription from '../components/InfoDescription';
import Buttons from '../components/Buttons';
import { useEffect, useState, useContext, useMemo } from 'react';
import { goFetch } from '../helpers/functions';
import { InfoContext } from '../context/InfoContext';
import './ChessExperience.modules.css';
import ChessForm from '../components/ChessForm';
import ErrorBox from '../components/ErrorBox';
import { validChecker } from '../helpers/functions';
import { v4 } from 'uuid';

function ChessExperience() {
  const { info, setInfo } = useContext(InfoContext);
  const [grandmasters, setGrandmasters] = useState([]);

  const [validInfo, setValidInfo] = useState({
    experience_level: '',
    character_id: '',
  });

  let x = useMemo(() => {
    return -1;
  }, [validInfo]);

  function handleValidation() {
    setValidInfo({
      experience_level: validChecker(info, 'experience_level'),
      character_id: validChecker(info, 'character_id'),
    });

    if (
      !Object.keys(info).every((element) =>
        element === 'already_participated' ? true : Boolean(info[element])
      )
    ) {
      return false;
    }

    fetch('https://chess-tournament-api.devtest.ge/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    localStorage.removeItem('Info');
    setInfo({
      name: '',
      email: '',
      phone: '',
      date_of_birth: '',
      experience_level: '',
      already_participated: true,
      character_id: '',
    });
    return true;
  }

  useEffect(() => {
    goFetch('https://chess-tournament-api.devtest.ge/api/grandmasters').then(
      (data) => setGrandmasters(data)
    );
  }, []);

  return (
    <Frame image={ChessInfoImage}>
      <div className="quote experience-quote">
        <p>
          <q>
            Many have become chess masters;
            <br /> no one has become the master of chess.
          </q>
          - Siegbert Tarrasch
        </p>
      </div>
      <div className="info-form">
        <InfoDescription valid={true} chessPage={true}>
          <>First step is done, continue to finish onboarding</>
          <>Chess experience</>
        </InfoDescription>
        <ChessForm
          grandmasters={grandmasters}
          validInfo={validInfo}
          setValidInfo={setValidInfo}
        />
        <Buttons
          back="/personal-information"
          next="/onboarding"
          label="Done"
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
                    message="Please choose level of knowledge"
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
                    title="Invalid character"
                    message="Please choose your character"
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

export default ChessExperience;
