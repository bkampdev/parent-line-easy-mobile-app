import React, { useState } from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomModal = ({ items, placeholder, selectedItem, setSelectedItem }) => {
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
        <Text style={styles.switchStudentButtonText}>
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
            {items.map((item, index) => (
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

export default CustomModal;

const styles = StyleSheet.create({
  switchStudentButton: {
    borderColor: "#FF6900",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  switchStudentButtonText: {
    color: "white",
  },
  modalContainerStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalInnerContainerStyle: {
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
  },
  studentName: {
    color: "#333",
    fontSize: 16,
  },
  buttonClose: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3e3e3e",
    borderWidth: 1,
    width: "100%",
  },
  buttonCloseText: {
    color: "#3e3e3e",
    fontSize: 12,
    textTransform: "uppercase",
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
