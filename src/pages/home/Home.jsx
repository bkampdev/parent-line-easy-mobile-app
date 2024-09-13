import React from "react";
import { View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Welcome from "./Welcome.jsx";
import { ProductsProvider } from "../../context/ProductsContext";
import BalanceContainer from "./BalanceContainer/BalanceContainer.jsx";
import HomeLastPurchases from "./HomeLastPurchases/HomeLastPurchases.jsx";

const Home = () => {
  return (
    <>
      <ProductsProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Welcome />
            <BalanceContainer />

            <HomeLastPurchases />
          </View>
        </GestureHandlerRootView>
      </ProductsProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: "white",
  },
});

export default Home;
