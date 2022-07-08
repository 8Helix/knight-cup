import { useContext, useRef } from 'react';
import { InfoContext } from '../context/InfoContext';
import CheckCircle from './svgs/CheckCircle';
import {
  setFocus,
  displayError,
  returnOriginalStyle,
  returnTypingStyle,
  setDateClick,
  setDateFocus,
} from '../helpers/functions';

function PersonalForm({ validInfo, setValidInfo }) {
  const { info, setInfo } = useContext(InfoContext);

  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const date_of_birth = useRef(null);

  const handleFocus = (e) => setFocus(e);
  const handleDateClick = (e) => setDateClick(e, date_of_birth);
  const handleDateFocus = (e) => setDateFocus(e, date_of_birth);

  function handleChange(e) {
    if (e.target.name === 'name') {
      if (e.target.value) {
        returnTypingStyle(e);
      } else {
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
      }
    }
    if (e.target.name === 'email') {
      if (e.target.value) {
        returnTypingStyle(e);
      } else {
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
      }
    }
    if (e.target.name === 'phone') {
      if (e.target.value) {
        returnTypingStyle(e);
      } else {
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
      }
    }
    if (e.target.name === 'date_of_birth') {
      returnTypingStyle(e);
    }

    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleBlur(e) {
    if (e.target.name === 'name') {
      if (info.name === '') {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
        return;
      }
      if (info.name.trim().length <= 1) {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
      } else {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
    if (e.target.name === 'email') {
      if (info.email === '') {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
        return;
      }
      if (info.email.slice(-12) !== '@redberry.ge') {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
      } else {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
    if (e.target.name === 'phone') {
      if (info.phone === '') {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
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
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
      }
    }
    if (e.target.name === 'date_of_birth') {
      if (!info.date_of_birth) {
        displayError(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: '' }));
      } else {
        returnOriginalStyle(e);
        setValidInfo((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
  }

  return (
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
          name="date_of_birth"
          value={info?.date_of_birth}
          onClick={handleDateClick}
          onChange={handleChange}
          onBlur={handleBlur}
          className={info.date_of_birth ? 'black' : null}
        />
        <label
          id="date-label"
          htmlFor="date"
          ref={date_of_birth}
          onClick={handleDateFocus}
          className={info.date_of_birth ? 'hidden' : 'visible'}
        >
          Date of birth
        </label>
        {validInfo.date_of_birth && <CheckCircle />}
      </div>
    </form>
  );
}

export default PersonalForm;
