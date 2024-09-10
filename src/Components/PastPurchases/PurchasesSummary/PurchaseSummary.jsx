import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const footerImg = require("../../../../assets/schoolBanner.png");

const PurchaseSummary = ({
  total,
  idCode,
  date,
  time,
  device,
  cashAfter,
  onBack,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total: {total}</Text>
      <Text style={styles.text}>Codigo: {idCode}</Text>
      <Text style={styles.text}>
        Dia: {date} / {time}
      </Text>
      <Text style={styles.text}>Comprado em: {device}</Text>
      <Text style={styles.text}>Saldo após a compra: {cashAfter}</Text>
      <Image source={footerImg} style={styles.image} />
      <Text style={styles.infoText}>
        Este produto já foi retirado e por isso não há possibilidade de
        cancelamento, para outras dúvidas falar com a recepção da escola.
      </Text>
      {/* <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "100% !important",
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover", // Alterando para cover para garantir que a imagem ocupe toda a largura
    resizeMode: "contain",
    marginVertical: 10,
  },
  infoText: {
    fontSize: 12,
    textAlign: "center",
    marginVertical: 10,
    color: "#888",
  },
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default PurchaseSummary;
