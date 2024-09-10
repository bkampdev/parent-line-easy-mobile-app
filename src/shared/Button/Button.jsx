import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { styles } from "./Button.styles";

const Button = ({ title, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
