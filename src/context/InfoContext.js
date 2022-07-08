import { useState, createContext, useEffect } from 'react';

let firstRender = true;

const InfoContext = createContext();

function InfoContextProvider({ children }) {
  const [info, setInfo] = useState(() => {
    const data = localStorage.getItem('Info');
    if (data) return { ...JSON.parse(data) };
    return {
      name: '',
      email: '',
      phone: '',
      date_of_birth: '',
      experience_level: '',
      already_participated: true,
      character_id: '',
    };
  });

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    localStorage.setItem('Info', JSON.stringify(info));
  }, [info]);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
}

export { InfoContext, InfoContextProvider };
