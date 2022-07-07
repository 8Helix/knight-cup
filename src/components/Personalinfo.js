import Frame from './Frame';
import PersonalinfoImage from '../imgs/Personalinfo-image.png';
import InfoDescription from './InfoDescription';
import Buttons from './Buttons';
import CheckCircle from './svgs/CheckCircle';
import { useContext, useRef, useState } from 'react';
import {
  setFocus,
  displayError,
  returnOriginalStyle,
  returnTypingStyle,
  setDateClick,
  setDateFocus,
} from '../helpers/functions';
import { InfoContext } from '../context/InfoContext';

function Personalinfo() {
  const { info, setInfo } = useContext(InfoContext);

  const [validInfo, setValidInfo] = useState(() => {
    if (localStorage.getItem('Info')) {
      return {
        name: true,
        email: true,
        phone: true,
        birthdate: true,
      };
    } else {
      return {
        name: '',
        email: '',
        phone: '',
        birthdate: '',
      };
    }
  });

  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const birthdate = useRef(null);

  const handleFocus = (e) => setFocus(e);
  const handleDateClick = (e) => setDateClick(e, birthdate);
  const handleDateFocus = (e) => setDateFocus(e, birthdate);

  function handleChange(e) {
    if (e.target.name === 'name') {
      if (e.target.value) {
        returnTypingStyle(e);
      } else {
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      }
    }
    if (e.target.name === 'email') {
      if (e.target.value) {
        returnTypingStyle(e);
      } else {
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      }
    }
    if (e.target.name === 'phone') {
      if (e.target.value) {
        returnTypingStyle(e);
      } else {
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      }
    }
    if (e.target.name === 'birthdate') {
      returnTypingStyle(e);
    }

    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleBlur(e) {
    if (e.target.name === 'name') {
      if (info.name === '') {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
        return;
      }
      if (info.name.trim().length <= 1) {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      } else {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
    if (e.target.name === 'email') {
      if (info.email === '') {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
        return;
      }
      if (info.email.slice(-12) !== '@redberry.ge') {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      } else {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
    if (e.target.name === 'phone') {
      if (info.phone === '') {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
        return;
      }
      if (
        info.phone.trim().length === 9 &&
        info.phone
          .trim()
          .split('')
          .every((number) => !isNaN(Number(number)))
      ) {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      } else {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      }
    }
    if (e.target.name === 'birthdate') {
      if (!info.birthdate) {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      } else {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
  }

  function handleValidation() {
    if (!Object.values(validInfo).every((element) => element === true)) {
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
        <InfoDescription>
          <>Start creating your account</>
          <>Personal information</>
        </InfoDescription>
        <form className="personal-form container">
          <div className="input">
            <input
              type="text"
              name="name"
              value={info?.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="name"
              ref={name}
              onClick={handleFocus}
              className={info.name ? 'hidden' : 'visible'}
            >
              Name
            </label>
            {validInfo.name && <CheckCircle />}
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              value={info?.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="email"
              ref={email}
              onClick={handleFocus}
              className={info.email ? 'hidden' : 'visible'}
            >
              Email address
            </label>
            {validInfo.email && <CheckCircle />}
          </div>
          <div className="input">
            <input
              type="tel"
              name="phone"
              value={info?.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="phone"
              ref={phone}
              onClick={handleFocus}
              className={info.phone ? 'hidden' : 'visible'}
            >
              Phone number
            </label>
            {validInfo.phone && <CheckCircle />}
          </div>
          <div className="input">
            <input
              type="date"
              name="birthdate"
              value={info?.birthdate}
              onClick={handleDateClick}
              onChange={handleChange}
              onBlur={handleBlur}
              className={info.birthdate ? 'black' : null}
            />
            <label
              id="date-label"
              htmlFor="date"
              ref={birthdate}
              onClick={handleDateFocus}
              className={info.birthdate ? 'hidden' : 'visible'}
            >
              Date of birth
            </label>
            {validInfo.birthdate && <CheckCircle />}
          </div>
        </form>
        <Buttons
          back="/"
          next="/chess-experience"
          validateInfo={handleValidation}
        />
      </div>
    </Frame>
  );
}

export default Personalinfo;
