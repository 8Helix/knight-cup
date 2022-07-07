/* eslint-disable jsx-a11y/no-static-element-interactions */
import Frame from './Frame';
import ChessInfoImage from '../imgs/ChessInfo-image.png';
import InfoDescription from './InfoDescription';
import Buttons from './Buttons';
import DropDown from './svgs/DropDown';
import { useEffect, useRef, useState } from 'react';
import { goFetch } from '../helpers/functions';
import './ChessExperience.modules.css';

const levelArr = ['Beginner', 'Intermediate', 'Professional'];

function ChessExperience() {
  const [grandmasters, setGrandmasters] = useState([]);
  const [levelOptions, setLevelOptions] = useState(false);
  const [characterOptions, setCharacterOptions] = useState(false);

  const levelRef = useRef(null);
  const masterRef = useRef(null);

  function handleLevelDrop() {
    setLevelOptions((prev) => !prev);
  }

  function handleLevelClick(level) {
    levelRef.current.innerHTML = level;
    setLevelOptions(false);
  }

  function handleCharacterDrop() {
    setCharacterOptions((prev) => !prev);
  }

  function handleMastersClick(name) {
    masterRef.current.innerHTML = name;
    setCharacterOptions(false);
  }

  function handleValidation() {
    localStorage.removeItem('Info');
    return true;
  }

  console.log('render');

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
        <InfoDescription>
          <>First step is done, continue to finish onboarding</>
          <>Chess experience</>
        </InfoDescription>
        <form className="chess-form container">
          <div className="form-selectors">
            <div className="select-box">
              <div className="selected" onClick={handleLevelDrop}>
                <span ref={levelRef}>
                  level of knowledge<span className="asterisk"></span>
                </span>
                <DropDown options={levelOptions} />
              </div>
              <div
                className={
                  levelOptions
                    ? 'options-container active'
                    : 'options-container'
                }
              >
                {levelArr.map((level, i) => (
                  <div
                    key={i}
                    className="level-option"
                    onClick={() => handleLevelClick(level)}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id={level}
                      name="level"
                    />
                    <label htmlFor={level}>{level}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="select-box">
              <div className="selected" onClick={handleCharacterDrop}>
                <span ref={masterRef}>
                  Choose your character<span className="asterisk"></span>
                </span>
                <DropDown options={characterOptions} />
              </div>
              <div
                className={
                  characterOptions
                    ? 'masters-container active'
                    : 'masters-container'
                }
              >
                <p>&#40;Total {grandmasters.length}&#41;</p>
                {grandmasters?.map((item) => (
                  <div
                    key={item.id}
                    className="masters-option"
                    onClick={() => handleMastersClick(item.name)}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id={item.name}
                      name="master"
                    />
                    <div className="masters-info">
                      <label htmlFor={item.name}>{item.name}</label>
                      <img
                        htmlFor="begginer"
                        src={`https://chess-tournament-api.devtest.ge${item.image}`}
                        alt="grandmaster"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="asterisk">
            Have you participated in the Redberry Championship?&nbsp;
          </p>
          <div className="radio-buttons">
            <div className="radio-button">
              <input
                type="radio"
                id="yes"
                name="participation"
                value="yes"
                defaultChecked
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="radio-button">
              <input type="radio" id="no" name="participation" value="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <></>
        </form>
        <Buttons
          back="/personal-information"
          next="/onboarding"
          validateInfo={handleValidation}
        />
      </>
    </Frame>
  );
}

export default ChessExperience;
