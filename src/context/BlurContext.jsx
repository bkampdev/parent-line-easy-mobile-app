import React, { createContext, useState } from "react";

export const BlurContext = createContext({
  isBlurActive: false,
  setBlurActive: () => {},
  isSearchBlurActive: false,
  setSearchBlurActive: () => {},
});

export const BlurProvider = ({ children }) => {
  const [isBlurActive, setBlurActive] = useState(false);
  const [isSearchBlurActive, setSearchBlurActive] = useState(false);

  return (
    <BlurContext.Provider
      value={{
        isBlurActive,
        setBlurActive,
        isSearchBlurActive,
        setSearchBlurActive,
      }}
    >
      {children}
    </BlurContext.Provider>
  );
};
