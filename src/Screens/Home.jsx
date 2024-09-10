import React from "react";
import { View, StyleSheet } from "react-native";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import Welcome from "../Components/Welcome";
import Spacing from "../Components/Spacing";
import { ProductsProvider } from "../context/ProductsContext";
import BalanceContainer from "../Components/Home/BalanceContainer/BalanceContainer.jsx";
import HomeLastPurchases from "../Components/Home/HomeLastPurchases/HomeLastPurchases.jsx";

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
