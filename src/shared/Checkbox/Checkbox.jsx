// Checkbox.jsx in 'shared' directory
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Checkbox = ({ isSelected, onSelected, label }) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onSelected}>
      <Ionicons
        name={isSelected ? "checkbox" : "square-outline"}
        size={24}
        color="#FF6900"
      />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    color: "#3E3E3E",
  },
});

export default Checkbox;
