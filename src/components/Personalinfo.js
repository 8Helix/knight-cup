/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import Frame from './Frame';
import PersonalinfoImage from '../imgs/Personalinfo-image.png';
import InfoDescription from './InfoDescription';
import Buttons from './Buttons';
import CheckCircle from './svgs/CheckCircle';
import { useRef, useState } from 'react';

function Personalinfo() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
  });

  const [validInfo, setValidInfo] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
  });

  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const birthdate = useRef(null);

  function handleChange(e) {
    if (e.target.name === 'name') {
      if (e.target.value) {
        name.current.style.visibility = 'hidden';
        returnStyle(e);
      } else {
        name.current.style.visibility = 'visible';
      }
    }
    if (e.target.name === 'email') {
      if (e.target.value) {
        email.current.style.visibility = 'hidden';
        returnStyle(e);
      } else {
        email.current.style.visibility = 'visible';
      }
    }
    if (e.target.name === 'phone') {
      if (e.target.value) {
        phone.current.style.visibility = 'hidden';
        returnStyle(e);
      } else {
        phone.current.style.visibility = 'visible';
      }
    }
    if (e.target.name === 'birthdate') {
      birthdate.current.style.visibility = 'hidden';
      returnStyle(e);
    }

    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFocus(e) {
    e.target.previousElementSibling.focus();
  }

  function handleDateClick(e) {
    birthdate.current.style.visibility = 'hidden';
    e.target.style.color = 'black';
  }

  function handleDateFocus(e) {
    birthdate.current.style.visibility = 'hidden';
    e.target.previousElementSibling.style.color = 'black';
    e.target.previousElementSibling.focus();
  }

  function handleValidation() {
    if (!Object.values(validInfo).every((element) => element === true)) {
      return false;
    }
    // gaushvi localhostshi
    return true;
  }

  function handleBlur(e) {
    if (e.target.name === 'name') {
      if (info.name.trim().length === 1) {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      } else {
        returnStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
    if (e.target.name === 'email') {
      if (info.email.slice(-12) !== '@redberry.ge') {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: false }));
      } else {
        returnStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
    if (e.target.name === 'phone') {
      if (
        info.phone.trim().length === 9 &&
        info.phone
          .trim()
          .split('')
          .every((number) => !isNaN(Number(number)))
      ) {
        returnStyle(e);
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
        returnStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
  }

  function displayError(e) {
    e.target.style.backgroundColor = 'var(--color-error-backgroud)';
    e.target.style.color = 'var(--color-error-text)';
  }

  function returnStyle(e) {
    e.target.style.backgroundColor = '#fff';
    e.target.style.color = 'var(--color-black)';
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
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="name" ref={name} onClick={handleFocus}>
              Name
            </label>
            {validInfo.name && <CheckCircle />}
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="email" ref={email} onClick={handleFocus}>
              Email address
            </label>
            {validInfo.email && <CheckCircle />}
          </div>
          <div className="input">
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="phone" ref={phone} onClick={handleFocus}>
              Phone number
            </label>
            {validInfo.phone && <CheckCircle />}
          </div>
          <div className="input">
            <input
              type="date"
              name="birthdate"
              onClick={handleDateClick}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              id="date-label"
              htmlFor="date"
              ref={birthdate}
              onClick={handleDateFocus}
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
