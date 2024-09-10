import React, { createContext, useState } from "react";
import axios from "axios";
import Toast from "react-native-toast-message";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    userName: "",
    cvv: "",
    expiryDate: "",
    isCreditSelected: true,
    isDebitSelected: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCardData = async () => {
    setLoading(true);
    try {
      console.log("Buscando dados do cartão...");

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Erro ao buscar os dados do cartão:", err);
      setError("Erro ao buscar os dados do cartão!");
      setLoading(false);
    }
  };

  const saveCardData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/saveCreditCardAdmin",
        cardData
      );

      if (response.status === 200) {
        setLoading(false);

        Toast.show({
          type: "success",
          text1: "Dados do cartão salvos com sucesso!",
        });
      } else {
        setLoading(false);
        Toast.show({
          type: "error",
          text1: "Erro ao salvar os dados do cartão!",
        });
        console.error("Erro ao salvar os dados do cartão:", response.data);
      }
    } catch (err) {
      console.error("Erro ao fazer a chamada à API:", err);
      setError("Erro ao salvar os dados do cartão!");
      setLoading(false);
    }
  };

  return (
    <CardContext.Provider
      value={{ cardData, setCardData, loading, fetchCardData, saveCardData }}
    >
      {children}
    </CardContext.Provider>
  );
};
