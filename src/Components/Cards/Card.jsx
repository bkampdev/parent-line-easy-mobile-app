import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Chip from "../../../assets/icons/Chip";
import Mastercard from "../../../assets/icons/Mastercard";
import Visa from "../../../assets/icons/Visa";
import Logo from "../../../assets/images/logo.png";

const getCardType = (cardNumber) => {
  if (!cardNumber || cardNumber.length === 0) {
    return "Mastercard";
  }

  const firstDigit = cardNumber[0];

  if (firstDigit === "4") {
    return "Visa";
  } else if (firstDigit === "5") {
    return "Mastercard";
  } else {
    return "Mastercard";
  }
};

const UserCard = ({ userName, cardNumber }) => {
  const cardType = getCardType(cardNumber);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.chipContainer}>
        <Chip width={40} height={40} />
      </View>
      <View style={styles.logoContainer}>
        {cardType === "Visa" && <Visa width={70} height={60} />}
        {cardType === "Mastercard" && <Mastercard width={80} height={70} />}
      </View>
      <Text style={styles.userName}>{userName}</Text>
      <Image source={Logo} style={styles.logo2} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 351,
    height: 220,
    borderRadius: 20,
    backgroundColor: "#3E3E3E",
    padding: 20,
    justifyContent: "space-between",
  },
  chipContainer: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 180,
    color: "white",
    fontSize: 24,
    maxWidth: 180,
    flexWrap: "wrap",
  },
  logo: {
    position: "absolute",
    bottom: 40,
    right: 20,
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  logo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 210,
    width: 160,
    height: 90,
    resizeMode: "contain",
  },
});

export default UserCard;
