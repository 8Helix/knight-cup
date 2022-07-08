import ArrowCircle from './svgs/ArrowCircle';
import { useNavigate } from 'react-router-dom';

function Buttons({ back, next, label, validateInfo }) {
  const navigate = useNavigate();

  function handleNextClick() {
    if (!validateInfo()) return;
    navigate(next, { state: { parampa: true } });
  }

  return (
    <div className="buttons container">
      <button className="button white-button" onClick={() => navigate(back)}>
        Back
      </button>
      <button className="button black-button" onClick={handleNextClick}>
        {label} {label === 'Next' ? <ArrowCircle /> : null}
      </button>
    </div>
  );
}

export default Buttons;
