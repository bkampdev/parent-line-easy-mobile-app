import React, { createContext, useState, useContext } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [storeOpen, setStoreOpen] = useState(true);
  const [storeInfo, setStoreInfo] = useState("");

  const setStoreStatus = (opened) => {
    setStoreOpen(opened);
  };

  const updateStoreInfo = (info) => {
    setStoreInfo(info);
  };

  return (
    <StoreContext.Provider
      value={{ storeOpen, storeInfo, setStoreStatus, updateStoreInfo }}
    >
      {children}
    </StoreContext.Provider>
  );
};
