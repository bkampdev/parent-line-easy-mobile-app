import React, { useContext } from "react";
import { FlashList } from "@shopify/flash-list";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

import { TransactionsContext } from "../../context/TransactionsContext.jsx";

import PastPurchaseItem from "./PastPurchaseItem/PastPurchaseItem.jsx";
import PurchaseSummary from "./PurchasesSummary/PurchaseSummary.jsx";

const PastPurchasesList = () => {
  const { transactions, loading } = useContext(TransactionsContext);

  const renderPurchasesList = ({ item }) => <PastPurchaseItem order={item} />;

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FF6900" />
      </View>
    );
  }

  return (
    <FlashList
      data={transactions}
      renderItem={renderPurchasesList}
      keyExtractor={(item) => item.transactionId.toString()}
      estimatedItemSize={50}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default PastPurchasesList;
