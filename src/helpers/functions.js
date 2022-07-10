export function displayError(e) {
  e.target.style.backgroundColor = 'var(--color-error-backgroud)';
  e.target.style.color = 'var(--color-error-text)';
}

export function returnTypingStyle(e) {
  e.target.style.backgroundColor = 'var(--color-light-grey-1)';
  e.target.style.color = 'var(--color-black)';
}

export function returnOriginalStyle(e) {
  e.target.style.backgroundColor = '#fff';
  e.target.style.color = 'var(--color-black)';
}

export function setFocus(e) {
  e.target.previousElementSibling.focus();
}

export function setDateClick(e, birthdate) {
  birthdate.current.style.visibility = 'hidden';
  e.target.style.color = 'black';
}

export function setDateFocus(e, birthdate) {
  birthdate.current.style.visibility = 'hidden';
  e.target.previousElementSibling.style.color = 'black';
  e.target.previousElementSibling.focus();
}

export async function goFetch(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Couldn't fetch Users");
}

export function validChecker(info, key) {
  if (key === 'name') {
    if (info.name === '') {
      return '';
    }
    if (info.name.trim().length <= 1) {
      return false;
    } else {
      return true;
    }
  }

  if (key === 'email') {
    if (info.email === '') {
      return '';
    }
    if (info.email.slice(-12) !== '@redberry.ge') {
      return false;
    } else {
      return true;
    }
  }
  if (key === 'phone') {
    if (info.phone === '') {
      return '';
    }
    if (
      info.phone.trim().length === 9 &&
      info.phone
        .trim()
        .split('')
        .every((number) => !isNaN(Number(number)))
    ) {
      return true;
    } else {
      return false;
    }
  }
  if (key === 'date_of_birth') {
    if (!info.date_of_birth) {
      return false;
    } else {
      return true;
    }
  }

  if (key === 'experience_level') {
    if (!info.experience_level) {
      return false;
    } else {
      return true;
    }
  }
  if (key === 'character_id') {
    if (!info.character_id) {
      return false;
    } else {
      return true;
    }
  }
}
