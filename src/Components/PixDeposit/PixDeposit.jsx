import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const QRCode = require("../../../assets/QrCode.png");

const PixDeposit = ({ navigation }) => {
  const route = useRoute();
  const { cpf, depositAmount } = route.params || {};
  const [qrCode, setQrCode] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQrCode = async () => {
      const userInfoString = await SecureStore.getItemAsync("userInfo");
      const userInfo = JSON.parse(userInfoString);

      try {
        const response = await axios.post(
          "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/generateQrCodeForPayment",
          { storeId: userInfo.storeId }
        );

        console.log(response.data.qrCode);

        setQrCode(response.data.qrCode);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar QR Code:", error);
        setLoading(false);
      }
    };

    fetchQrCode();
  }, []);

  if (loading) {
    return (
      <View style={styles.centeredLoading}>
        <ActivityIndicator size="large" color="#FF6900" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={24} color="#FF6900" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>PIX</Text>
      <Text style={styles.subtitle}>Pix</Text>

      <View style={styles.hr} />

      <Text style={styles.label}>CPF do pagante</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="#3e3e3e" />
        <TextInput
          value={`CPF: ${cpf || ""}`}
          style={styles.input}
          editable={false}
        />
      </View>

      <Text style={styles.label}>Valor de recarga</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="cash-outline" size={24} color="#3e3e3e" />
        <TextInput
          value={`R$ ${depositAmount || "0,00"}`}
          style={styles.input}
          editable={false}
        />
      </View>

      <Image source={{ uri: qrCode }} style={styles.qrCode} />

      <Text style={styles.infoText}>
        Pague com o Qr-code ou copie o código clicando no botão abaixo
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Copiar código</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backButtonText: {
    textAlign: "center",
    color: "#3e3e3e",
    marginLeft: 4,
  },
  title: {
    fontSize: 32,
    color: "#3e3e3e",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  hr: {
    borderBottomColor: "#d6d6d6",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 3,
    marginBottom: 15,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    color: "#3e3e3e",
    marginBottom: 5,
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3e3e3e",
    borderRadius: 100,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#3e3e3e",
  },
  qrCode: {
    width: 230,
    height: 230,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333333",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PixDeposit;
