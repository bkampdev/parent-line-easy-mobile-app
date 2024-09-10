import React, { createContext, useState, useEffect, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import Toast from "react-native-toast-message";
import { ResponsibleContext } from "./ResponsibleContext";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
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
    const fetchProducts = async () => {
      if (!userInfo || responsibleData?.selectedStudent === undefined) return;

      setLoading(true);

      console.log(
        `buscando produtos [${responsibleData?.selectedStudent}}]...`
      );

      try {
        const response = await axios.post(
          "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/listAllProductsAdmin",
          {
            storeId: userInfo.storeId,
            studentId: responsibleData.selectedStudent,
          }
        );

        if (response.data.body["message"] === "Error") {
          setLoading(false);
          setError("Erro ao buscar produtos!");
          return;
        }

        setProducts(response.data.body);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setError("Erro ao buscar produtos!");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [userInfo, responsibleData?.selectedStudent]);

  const hideProducts = async () => {
    const hiddenProductsIds = products
      .filter((product) => product.hidden)
      .map((product) => product.id);

    if (hiddenProductsIds.length > 0) {
      setLoading(true);

      try {
        const response = await axios.post(
          "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/saveHiddenProducts",
          {
            products: hiddenProductsIds,
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

          console.error("Erro ao ocultar produtos:", response.data);
        }
      } catch (error) {
        setLoading(false);

        console.error("Erro ao fazer a chamada à API:", error);
      }
    } else {
      console.log("Nenhum produto para ocultar.");
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
    <ProductsContext.Provider
      value={{ products, setProducts, loading, hideProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
