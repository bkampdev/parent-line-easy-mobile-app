import React, { createContext, useState, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [username, setUsername] = useState(null);

  const login = (token) => {
    setUserToken(token);
  };

  const logout = async () => {
    setUserToken(null);
    setUsername(null);

    await SecureStore.deleteItemAsync("userPin");
    await SecureStore.deleteItemAsync("userInfo");
    await AsyncStorage.removeItem("biometricAuthEnabled");

    setTimeout(async () => await Updates.reloadAsync(), 10);

    console.log("[LOGOUT] User Logged out and Secure Store cleared");
  };

  const setUser = (username) => {
    setUsername(username);
  };

  return (
    <AuthContext.Provider
      value={{ userToken, username, login, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
