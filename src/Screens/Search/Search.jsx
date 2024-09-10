import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { BlurContext } from "../../context/BlurContext";

const Search = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setSearchBlurActive } = useContext(BlurContext);

  const handleSearchSubmit = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();

    if (
      lowercasedSearchTerm === "config" ||
      lowercasedSearchTerm === "compras anteriores"
    ) {
      setSearchBlurActive(false);
      navigation.navigate("Settings");
    } else if (
      lowercasedSearchTerm === "notificações" ||
      lowercasedSearchTerm === "notificacoes"
    ) {
      setSearchBlurActive(false);
      navigation.navigate("Notifications");
    } else if (
      lowercasedSearchTerm === "cartão" ||
      lowercasedSearchTerm === "cartao"
    ) {
      setSearchBlurActive(false);
      navigation.navigate("PixAndCard");
    }
  };

  return (
    <View style={styles.overlayContainer}>
      {/* Campo de busca */}
      <View style={styles.searchInputContainer}>
        <AntDesign
          name="search1"
          size={24}
          color="#000"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Buscar"
          returnKeyType="search"
          onSubmitEditing={handleSearchSubmit}
        />
        <TouchableOpacity onPress={() => setSearchTerm("")}>
          <AntDesign
            name="close"
            size={23}
            color="#000"
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>

      {searchResults.length > 0 && (
        <View style={styles.searchResultsContainer}>
          {searchResults.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "stretch",
                overflow: "hidden",
                borderRadius: 20,
                backgroundColor: "white",
                margin: 8,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
              }}
            >
              <Image
                source={{ uri: item.PhotoPath }}
                style={{ width: 96, borderRadius: 20 }}
                resizeMode="cover"
              />
              <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "black" }}
                >{`R$ ${item.price}`}</Text>
                <Text style={{ fontSize: 14, color: "black" }}>
                  {item.name}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Botão de fechar */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setSearchBlurActive(false)}
      >
        <AntDesign name="close" size={24} color="#FF6900" />
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 75,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  searchInputContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  closeIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchResultsContainer: {
    marginTop: 20,
    width: "100%",
  },
  closeButton: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "#FF6900",
  },
  closeButtonText: {
    color: "black",
    fontSize: 18,
    marginLeft: 105,
  },
});

export default Search;
