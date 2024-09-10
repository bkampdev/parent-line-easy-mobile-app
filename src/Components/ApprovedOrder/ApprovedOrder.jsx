import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const QRCode = require("../../../assets/QrCode.png");

const ApprovedOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={24} color="#FF6900" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Compra aprovada!</Text>

      <Text style={styles.baseText}>
        Dirija-se a um <Text style={styles.boldText}>balcão</Text> de retirada!
      </Text>

      <Image source={QRCode} style={styles.qrCode} />
      <Text style={styles.baseText}>
        Ou aguarde que enviaremos uma{" "}
        <Text style={styles.boldText}>notificação</Text> quando seu pedido
        estiver pronto!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>VER CUPOM FISCAL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    paddingTop: 100,
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
    color: "#FF6900",
    marginLeft: 4,
  },
  title: {
    fontSize: 32,
    color: "#FF6900",
    marginVertical: 35,
  },
  baseText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 30,
  },
  boldText: {
    fontWeight: "bold",
  },
  qrCode: {
    width: 230,
    height: 230,
    marginBottom: 50,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#FF6900",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "95%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ApprovedOrder;
