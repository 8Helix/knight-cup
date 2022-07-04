import Frame from './Frame';
import ChessInfoImage from '../imgs/ChessInfo-image.png';
import InfoDescription from './InfoDescription';
import Buttons from './Buttons';

function ChessExperience() {
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
            <select name="level" id="level">
              <option value="" hidden>
                level of knowledge *
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="professional">Professional</option>
            </select>
            <select name="character" id="character">
              <option value="" hidden>
                Choose your character
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="professional">Professional</option>
            </select>
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
        <Buttons back="/personal-information" next="/onboarding" />
      </>
    </Frame>
  );
}

export default ChessExperience;
