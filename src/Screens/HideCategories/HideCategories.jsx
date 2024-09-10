import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CategoriesContext } from "../../context/CategoriesContext";

const HideCategories = () => {
  const navigation = useNavigation();
  const { categories, loading, setCategories, hideCategories } =
    useContext(CategoriesContext);

  const toggleVisibility = (id) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? { ...category, hidden: !category.hidden }
          : category
      )
    );
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => toggleVisibility(item.id)}
      activeOpacity={1}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
        <View style={[styles.overlay, item.hidden && styles.hiddenOverlay]}>
          <MaterialCommunityIcons
            name={item.hidden ? "eye-off" : "eye"}
            size={24}
            color="white"
          />
        </View>
      </View>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3e3e3e" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Categorias</Text>
          </View>

          {loading ? (
            <View style={styles.centeredLoading}>
              <ActivityIndicator size="large" color="#FF6900" />
            </View>
          ) : (
            <>
              <FlashList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id.toString()}
                estimatedItemSize={100}
                numColumns={2}
                contentContainerStyle={styles.flashListContainer}
              />

              {/* Botão Concluir */}
              <TouchableOpacity
                style={styles.concludeButton}
                onPress={async () => {
                  await hideCategories();
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
  categoryItem: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  categoryImage: {
    width: 175,
    height: 130,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  hiddenOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  categoryInfo: {
    backgroundColor: "#3E3E3E",
    width: 175,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  categoryName: {
    fontSize: 16,
    color: "#FFF",
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
});

export default HideCategories;
