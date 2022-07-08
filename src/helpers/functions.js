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

export async function sendData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
}
