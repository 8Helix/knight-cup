import ArrowCircle from './svgs/ArrowCircle';
import { useNavigate } from 'react-router-dom';

function Buttons({ back, next }) {
  const navigate = useNavigate();
  return (
    <div className="buttons container">
      <button className="button white-button" onClick={() => navigate(back)}>
        Back
      </button>
      <button className="button black-button" onClick={() => navigate(next)}>
        Next <ArrowCircle />
      </button>
    </div>
  );
}

export default Buttons;
