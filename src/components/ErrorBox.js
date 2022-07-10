import ExclamationCircle from './svgs/ExclamationCircle';
import X from './svgs/X';

function ErrorBox({ title, message, index, x, validInfo, setValidInfo }) {
  function handleClick() {
    setValidInfo((prev) => ({ ...prev, [Object.keys(validInfo)[index]]: '' }));
  }

  return (
    <div className="info-module" style={{ top: `${25 - x * 8}rem` }}>
      <div className="error">
        <div className="error-message">
          <ExclamationCircle />
          <span>{title}</span>
        </div>
        <X handleClick={handleClick} />
      </div>
      <p>{message}</p>
    </div>
  );
}

export default ErrorBox;
