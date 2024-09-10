import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  Platform,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProductsContext } from "../../context/ProductsContext";

const HideProducts = () => {
  const navigation = useNavigation();
  const { products, setProducts, loading, hideProducts } =
    useContext(ProductsContext);

  const toggleVisibility = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, hidden: !product.hidden } : product
      )
    );
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>

      <Image
        source={{ uri: item.imageUrl }}
        style={[
          styles.productImage,
          item.hidden && styles.hiddenItem, // Aplica a opacidade se 'hidden' for true
        ]}
      />

      <Text
        style={[
          styles.productName,
          item.hidden && styles.hiddenItem, // Aplica a opacidade se 'hidden' for true
        ]}
      >
        {item.productName}
      </Text>

      <Text
        style={[
          styles.productPrice,
          item.hidden && styles.hiddenItem, // Aplica a opacidade reduzida se não estiver visível
        ]}
      >
        {item.price}
      </Text>

      <TouchableOpacity
        onPress={() => toggleVisibility(item.id)}
        style={styles.visibilityButton}
      >
        <MaterialCommunityIcons
          name={!item.hidden ? "eye" : "eye-off"}
          size={24}
          color={!item.hidden ? "#3E3E3E" : "#A9A9A9"} // Muda a cor do ícone quando escondido
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3e3e3e" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Produtos</Text>
          </View>

          {loading ? (
            <View style={styles.centeredLoading}>
              <ActivityIndicator size="large" color="#FF6900" />
            </View>
          ) : (
            <>
              {/* Lista de Produtos */}
              <FlashList
                data={products}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                estimatedItemSize={100}
                contentContainerStyle={styles.flashListContainer}
              />

              {/* Botão Concluir */}
              <TouchableOpacity
                style={styles.concludeButton}
                onPress={async () => {
                  await hideProducts();

                  navigation.navigate("Settings");
                }}
              >
                <Text style={styles.concludeButtonText}>Concluir</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#3e3e3e",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: Platform.OS === "ios" ? 160 : 115,
  },
  centeredLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#3E3E3E",
    paddingVertical: 15,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerText: {
    color: "white",
    fontSize: 22,
  },
  flashListContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#E0E0E0",
  },
  productName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#3E3E3E",
  },
  productPrice: {
    fontSize: 16,
    color: "#3E3E3E",
  },
  visibilityButton: {
    paddingHorizontal: 10,
  },
  concludeButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "#3E3E3E",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // Sombra para Android
    elevation: 12,
  },
  concludeButtonText: {
    fontSize: 18,
    color: "#FFF",
  },
  hiddenItem: {
    opacity: 0.3, // Opacidade reduzida para elementos escondidos
  },
});

export default HideProducts;
