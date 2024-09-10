import React, { useState, useContext, useEffect } from "react";
import { FlashList } from "@shopify/flash-list";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomePurchaseItem from "./HomePurchaseItem/HomePurchaseItem.jsx";
import { TransactionsContext } from "../../../context/TransactionsContext.jsx";

const HomeLastPurchases = () => {
  const [visibleDataCount, setVisibleDataCount] = useState(4);
  const [userInfo, setUserInfo] = useState(null);

  const { transactions, loading } = useContext(TransactionsContext);

  const navigation = useNavigation();

  const renderPurchasesList = ({ item }) => <HomePurchaseItem order={item} />;

  const handleViewMore = () => {
    navigation.navigate("Settings", { showPastPurchases: true });
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FF6900" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Ultimas compras:</Text>
      </View>

      <FlashList
        data={transactions.slice(0, visibleDataCount)}
        renderItem={renderPurchasesList}
        keyExtractor={(item) => item.transactionId.toString()}
        estimatedItemSize={50}
      />
      {visibleDataCount < transactions.length && (
        <TouchableOpacity
          style={styles.loadMoreButton}
          onPress={handleViewMore}
        >
          <Text style={styles.loadMoreButtonText}>Ver mais</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    paddingTop: 10,
    marginTop: 10,
  },
  headerContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 12,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadMoreButton: {
    backgroundColor: "#FF6900",
    paddingVertical: 7,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  loadMoreButtonText: {
    color: "white",
  },
});

export default HomeLastPurchases;
