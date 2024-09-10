import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

import { ResponsibleContext } from "./ResponsibleContext";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const { responsibleData } = useContext(ResponsibleContext);

  // Pega as informações do usuário no Secure Storage
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfoString = await SecureStore.getItemAsync("userInfo");
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        setUserInfo(userInfo);
      } else {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!userInfo || responsibleData?.selectedStudent === undefined) return;

      setLoading(true);

      try {
        const response = await axios.post(
          "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/listResponsiblesForTransactions",
          { responsibleFor: userInfo.responsibleFor }
        );

        if (response.data.body["message"] === "Error") {
          setLoading(false);
          return;
        }

        console.log("Transactions: ", response.data.body);
        console.log(
          "Transactions Details: ",
          response.data.body[0]?.orderDetails
        );

        setTransactions(response.data.body);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar transações:", error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [userInfo, responsibleData?.selectedStudent]);

  return (
    <TransactionsContext.Provider value={{ transactions, loading }}>
      {children}
    </TransactionsContext.Provider>
  );
};
