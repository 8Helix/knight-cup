import ArrowCircle from './svgs/ArrowCircle';
import { useNavigate } from 'react-router-dom';

function Buttons({ back, next, validateInfo }) {
  const navigate = useNavigate();

  function handleNextClick() {
    if (!validateInfo()) return;
    navigate(next);
  }

  return (
    <div className="buttons container">
      <button className="button white-button" onClick={() => navigate(back)}>
        Back
      </button>
      <button className="button black-button" onClick={handleNextClick}>
        Next <ArrowCircle />
      </button>
    </div>
  );
}

export default Buttons;
