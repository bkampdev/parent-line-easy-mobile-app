import React, { useState } from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./Dropdown.styles";

const DropdownWithModal = ({
  items,
  placeholder,
  selectedItem,
  setSelectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempSelectedItem, setTempSelectedItem] = useState("");

  const confirmSelection = () => {
    setSelectedItem(tempSelectedItem);
    setModalVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons
          name="school"
          size={25}
          color="#FF6900"
          style={styles.iconStyle}
        />
        <Text style={selectedItem ? styles.textStyle : styles.placeholderStyle}>
          {selectedItem
            ? items.find((item) => item.value === selectedItem).label
            : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Picker
              selectedValue={tempSelectedItem}
              onValueChange={(itemValue) => setTempSelectedItem(itemValue)}
              style={{ width: "100%" }}
            >
              {items.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={confirmSelection}
            >
              <Text style={styles.confirmBttnStyle}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownWithModal;
