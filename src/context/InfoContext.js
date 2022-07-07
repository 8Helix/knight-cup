import { useState, useEffect, createContext } from 'react';

const InfoContext = createContext();

function InfoContextProvider({ children }) {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    level: '',
    character: '',
    haveParticipated: '',
  });

  useEffect(() => {
    const data = localStorage.getItem('Info');
    if (data) {
      setInfo((prev) => ({ ...prev, ...JSON.parse(data) }));
    }
  }, []);

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
}

export { InfoContext, InfoContextProvider };
