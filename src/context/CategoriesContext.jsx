import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import Toast from "react-native-toast-message";
import { ResponsibleContext } from "./ResponsibleContext";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

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
    const fetchCategories = async () => {
      if (!userInfo || responsibleData?.selectedStudent === undefined) return;

      setLoading(true);

      console.log(
        `buscando categorias [${responsibleData?.selectedStudent}}]...`
      );

      try {
        const response = await axios.post(
          "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/listAllCategoriesAdmin",
          {
            storeId: userInfo.storeId,
            studentId: responsibleData.selectedStudent,
          }
        );

        if (response.data.body["message"] === "Error") {
          setLoading(false);
          setError("Erro ao buscar categorias!");
          return;
        }

        setCategories(response.data.body);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setError("Erro ao buscar categorias!");
        setLoading(false);
      }
    };

    fetchCategories();
  }, [userInfo, responsibleData?.selectedStudent]);

  const hideCategories = async () => {
    const hiddenCategoryIds = categories
      .filter((category) => category.hidden)
      .map((category) => category.id);

    if (hiddenCategoryIds.length > 0) {
      setLoading(true);

      try {
        const response = await axios.post(
          "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/saveHiddenCategories",
          {
            categories: hiddenCategoryIds,
            studentId: responsibleData.selectedStudent,
          }
        );

        if (response.status === 200) {
          setLoading(false);

          Toast.show({
            type: "success",
            text1: "Categorias ocultadas com sucesso.",
          });
        } else {
          setLoading(false);

          console.error("Erro ao ocultar categorias:", response.data);
        }
      } catch (error) {
        setLoading(false);

        console.error("Erro ao fazer a chamada à API:", error);
      }
    } else {
      console.log("Nenhuma categoria para ocultar.");
    }
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
    }
  }, [error]);

  return (
    <CategoriesContext.Provider
      value={{ categories, loading, setCategories, hideCategories }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
