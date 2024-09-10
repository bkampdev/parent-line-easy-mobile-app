import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import styles from "./HomePurchaseItem.styles";

const MONTH_NAMES_PT = {
  "01": "Jan",
  "02": "Fev",
  "03": "Mar",
  "04": "Abr",
  "05": "Mai",
  "06": "Jun",
  "07": "Jul",
  "08": "Ago",
  "09": "Set",
  10: "Out",
  11: "Nov",
  12: "Dez",
};

const HomePurchaseItem = ({ order }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Dividindo a data em dia e mês
  const dateObject = new Date(order.date);

  // Extrair o dia e o mês
  const day = dateObject.getUTCDate().toString().padStart(2, "0");

  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0");
  const monthName = MONTH_NAMES_PT[month];

  return (
    <>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.dateContainer}>
          <Text style={styles.dayText}>{day}</Text>
          <Text style={styles.monthText}>{monthName}</Text>
        </View>
        <View style={styles.detailsContainer}>
          {order.orderDetails.map((product, index) => (
            <Text key={index} style={styles.productText}>
              {product.quantity}x {product.name}
            </Text>
          ))}
        </View>
        <Text style={styles.totalText}>R$ {order.totalTransactionPrice}</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomePurchaseItem;
