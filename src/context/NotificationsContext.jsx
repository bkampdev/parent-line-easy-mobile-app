import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import Toast from "react-native-toast-message";
import { ResponsibleContext } from "./ResponsibleContext"; // Caso necessário

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const { responsibleData } = useContext(ResponsibleContext);

  const saveNotifications = async (selectedNotifications) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/saveNotification",
        {
          notifications: selectedNotifications,
          adminEmail: responsibleData.email,
        }
      );

      if (response.status === 200) {
        Toast.show({
          type: "success",
          text1: "Notificações salvas com sucesso!",
        });
      } else {
        console.error("Erro ao salvar notificações:", response.data);
      }
    } catch (error) {
      console.error("Erro ao salvar notificações:", error);
      Toast.show({
        type: "error",
        text1: "Erro ao salvar notificações!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <NotificationsContext.Provider
      value={{ notifications, loading, setNotifications, saveNotifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
