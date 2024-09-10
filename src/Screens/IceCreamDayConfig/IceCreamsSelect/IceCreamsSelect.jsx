import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const mockIceCreams = [
  {
    id: 1,
    name: "Sorvete de Chocolate",
    image:
      "https://img.freepik.com/fotos-gratis/mao-segurando-deliciosos-sorvetes-ao-ar-livre_23-2150696546.jpg",
    price: "R$5,00",
  },
  {
    id: 2,
    name: "Sorvete de Baunilha",
    image:
      "https://img.freepik.com/fotos-gratis/mao-segurando-deliciosos-sorvetes-ao-ar-livre_23-2150696546.jpg",
    price: "R$4,50",
  },
  {
    id: 3,
    name: "Sorvete de Morango",
    image:
      "https://img.freepik.com/fotos-gratis/mao-segurando-deliciosos-sorvetes-ao-ar-livre_23-2150696546.jpg",
    price: "R$5,50",
  },
  {
    id: 4,
    name: "Sorvete de Pistache",
    image:
      "https://img.freepik.com/fotos-gratis/mao-segurando-deliciosos-sorvetes-ao-ar-livre_23-2150696546.jpg",
    price: "R$6,00",
  },
];

const IceCreamModal = ({ visible, onClose }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [rerender, setRerender] = useState(false); // Trigger for re-render

  const toggleSelection = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((itemId) => itemId !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
    setRerender(!rerender); // Trigger re-render
  };

  useEffect(() => {
    console.log("Selected items updated:", selectedItems);
  }, [selectedItems]);

  const renderIceCreamItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <View style={styles.listItemContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
        <TouchableOpacity
          key={item.id} // Ensure key is unique
          style={styles.selectButton}
          onPress={() => toggleSelection(item.id)}
        >
          <MaterialCommunityIcons
            name={isSelected ? "checkbox-marked" : "checkbox-blank-outline"}
            size={24}
            color={isSelected ? "#FF6900" : "#3E3E3E"}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerModalContainer}>
            <Text style={styles.headerText}>Escolher Sorvetes</Text>
            <View style={styles.separator} />
          </View>
          <View style={styles.modalContainer}>
            <FlashList
              data={mockIceCreams}
              extraData={rerender} // Force FlashList to re-render
              renderItem={renderIceCreamItem}
              keyExtractor={(item) => item.id.toString()}
              estimatedItemSize={50}
            />
            <View style={styles.buttonCloseContainer}>
              <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
                <Text style={styles.buttonCloseText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "90%",
    height: "70%",
    backgroundColor: "#3e3e3e",
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headerModalContainer: {
    height: 70,
    width: "100%",
    marginLeft: 30,
    marginTop: 20,
  },
  headerText: {
    color: "white",
    fontSize: 40,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "white",
    width: "90%",
    alignSelf: "center",
    marginBottom: 12,
    marginRight: 30,
  },
  modalContainer: {
    backgroundColor: "white",
    height: "90%",
    width: "100%",
    borderRadius: 25,
    padding: 15,
  },
  buttonCloseContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
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
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#E0E0E0",
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    color: "#3E3E3E",
  },
  productPrice: {
    fontSize: 16,
    color: "#3E3E3E",
  },
  selectButton: {
    paddingHorizontal: 10,
  },
});

export default IceCreamModal;
