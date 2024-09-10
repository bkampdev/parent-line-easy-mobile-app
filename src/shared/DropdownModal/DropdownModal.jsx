import React, { useState } from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";

const DropdownWithModal = ({
  items,
  placeholder,
  selectedItem,
  setSelectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelection = (itemValue) => {
    setSelectedItem(itemValue);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.switchStudentButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.switchStudentButtonText}>{placeholder}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {items?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.selectionButton}
                onPress={() => handleSelection(item.value)}
              >
                <Text
                  style={[
                    styles.selectionText,
                    item.value === selectedItem && styles.selectedItemText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.confirmBttnStyle}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownWithModal;

const styles = StyleSheet.create({
  switchStudentButton: {
    height: 29,
    display: "flex",
    width: 232,
    backgroundColor: "#FF6900",
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  switchStudentButtonText: {
    color: "white",
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: "80%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectionButton: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  selectionText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  selectedItemText: {
    color: "#FF6900",
  },
  buttonClose: {
    marginTop: 20,
    backgroundColor: "#FF6900",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  confirmBttnStyle: {
    color: "white",
  },
});
