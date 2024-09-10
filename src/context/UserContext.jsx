import React, { createContext, useState, useContext } from "react";
import * as SecureStore from "expo-secure-store";

const UserContext = createContext();

export const useUserInfo = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserData] = useState(null);

  const setUserInfo = (userInfo) => {
    setUserData(userInfo);
  };

  const getLocalUserInfo = () => {
    const getInfo = async () => {
      const userInfoString = await SecureStore.getItemAsync("userInfo");

      return JSON.parse(userInfoString);
    };

    return getInfo;
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, getLocalUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
