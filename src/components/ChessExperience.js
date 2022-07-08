/* eslint-disable jsx-a11y/no-static-element-interactions */
import Frame from './Frame';
import ChessInfoImage from '../imgs/ChessInfo-image.png';
import InfoDescription from './InfoDescription';
import Buttons from './Buttons';
import { useEffect, useState, useContext } from 'react';
import { goFetch } from '../helpers/functions';
import { InfoContext } from '../context/InfoContext';
import './ChessExperience.modules.css';
import ChessForm from './ChessForm';

function ChessExperience() {
  const { info } = useContext(InfoContext);
  const [grandmasters, setGrandmasters] = useState([]);

  function handleValidation() {
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
      <>
        <InfoDescription valid={true} chessPage={true}>
          <>First step is done, continue to finish onboarding</>
          <>Chess experience</>
        </InfoDescription>
        <ChessForm grandmasters={grandmasters} />
        <Buttons
          back="/personal-information"
          next="/onboarding"
          label="Done"
          validateInfo={handleValidation}
        />
      </>
    </Frame>
  );
}

export default ChessExperience;
