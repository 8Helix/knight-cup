import './InfoDescription.modules.css';
import CheckAll from './svgs/CheckAll';

function InfoDescription({ children, valid, chessPage }) {
  return (
    <>
      <div className="start">
        <p className="container">{children[0]}</p>
      </div>
      <div className="step container">
        <div className="step-number active-step">
          {valid ? <CheckAll /> : <>1</>}
        </div>
        <div className="line-box">
          <div className="line"></div>
        </div>
        <div className={chessPage ? 'step-number active-step' : 'step-number'}>
          2
        </div>
      </div>
      <div className="step-description container">
        <p>Personal information</p>
        <p>Chess experience</p>
      </div>

      <div className="step-title container">
        <h3>{children[1]}</h3>
        <p>This Is Basic Informaton Fields</p>
      </div>
    </>
  );
}

export default InfoDescription;
