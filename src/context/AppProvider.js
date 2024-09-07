import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const Provider = ({ children }) => {
  const [value, setValue] = useState("Hello from Context");
  const [angles, setAngles] = useState({ cat: 0 });
  const [clonedMotions, setClonedMotions] = useState([]);

  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        angles,
        setAngles,
        clonedMotions,
        setClonedMotions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => {
  return useContext(AppContext);
};
