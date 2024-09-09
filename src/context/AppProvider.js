import React, { createContext, useState, useContext, useRef } from "react";

export const AppContext = createContext();

export const Provider = ({ children }) => {
  const [value, setValue] = useState("Hello from Context");
  const [angles, setAngles] = useState({ cat: 0 });
  const [clonedMotions, setClonedMotions] = useState({
    "sprite-0": [],
  });
  const isResetClicked = useRef(false);
  const [totalSprites, setTotalSprites] = useState([
    {
      name: "Cat - 1",
      angle: 0,
      steps: 10,
      id: `sprite-${0}`,
      x: 34,
      y: 65,
      degree : 15
    },
  ]);
  const [currentSelectedSprite, setCurrentSelectedSprite] = useState(
    `sprite-${0}`
  );
  const [defaultPosition, setDefaultPosition] = useState({
    xPos : 0,
    yPos : 0
  })

  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        angles,
        setAngles,
        clonedMotions,
        setClonedMotions,
        isResetClicked,
        totalSprites,
        setTotalSprites,
        currentSelectedSprite,
        setCurrentSelectedSprite,
        defaultPosition,
        setDefaultPosition
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => {
  return useContext(AppContext);
};
