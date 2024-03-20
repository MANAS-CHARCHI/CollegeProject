// OpenContext.js
import React, { createContext, useState, useContext } from 'react';


const OpenContext = createContext();

export const OpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <OpenContext.Provider value={{ open, toggleOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

export const useOpen = () => useContext(OpenContext);
