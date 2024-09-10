import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlashList } from "@shopify/flash-list";
const bannerImage = require("../../../../assets/schoolBanner.png");

import { styles } from "./PastPurchaseItemDetails.js";

const PastPurchaseDetails = ({
  id,
  price,
  date,
  totalAfterPurchase,
  orderDetails,
  closeModal,
}) => {
  const renderPurchasesList = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.leftContainer}>
          <MaterialCommunityIcons
            name="cash-multiple"
            size={24}
            color="#3e3e3e"
          />
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
        <Text style={styles.itemText}>R$ {item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.headerModalContainer}>
          <Text style={styles.headerText}>Resumo do Pedido</Text>
        </View>

        <View style={styles.modalContainer}>
          <View style={styles.itensContainer}>
            <FlashList
              data={orderDetails}
              renderItem={renderPurchasesList}
              keyExtractor={(item, index) => `${item.id}_${index}`}
              estimatedItemSize={10}
            />
          </View>

          <View style={styles.orderInfoContainer}>
            <Text style={styles.orderInfoText}>Total: R$ {price}</Text>
            <Text style={styles.orderInfoText}>Código do Pedido: {id}</Text>
            <Text style={styles.orderInfoText}>Dia: {date.slice(0, 10)}</Text>
            <Text style={styles.orderInfoText}>
              Saldo após a compra: R$ {totalAfterPurchase}
            </Text>
          </View>

          <Image
            source={bannerImage}
            style={styles.bannerImage}
            resizeMode="contain"
          />

          <View style={styles.orderRetiredContainer}>
            <Text style={styles.orderRetiredText}>
              Este produto já foi retirado e por isso não a possibilidade de
              cancelamento, para outras duvidas falar com a recepção da escola.
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.buttonClose} onPress={closeModal}>
              <Text style={styles.buttonCloseText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PastPurchaseDetails;
