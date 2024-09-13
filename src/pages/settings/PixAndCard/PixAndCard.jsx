import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Checkbox from "../../../shared/Checkbox/Checkbox";
import UserCard from "../../../Components/Cards/Card";
import CardBack from "../../../Components/Cards/CardBack";
import { CardContext } from "../../../context/CardContext";

const PixAndCard = () => {
  const navigation = useNavigation();
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isCvvFocused, setIsCvvFocused] = useState(false);
  const [isExpiryDateFocused, setIsExpiryDateFocused] = useState(false);
  const [isCreditSelected, setIsCreditSelected] = useState(true);
  const [isDebitSelected, setIsDebitSelected] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [userName, setUserName] = useState("");

  const { cardData, setCardData, loading, saveCardData } =
    useContext(CardContext);

  const flipAnimation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const flipCard = (toFlipped) => {
    if (toFlipped) {
      Animated.timing(flipAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(flipAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleFocus = (field) => {
    if (field === "cvv") {
      setIsCvvFocused(true);
    } else if (field === "expiryDate") {
      setIsExpiryDateFocused(true);
    }

    if (!isCvvFocused && !isExpiryDateFocused) {
      flipCard(true);
    }
  };

  const handleBlur = (field) => {
    if (field === "cvv") {
      setIsCvvFocused(false);
    } else if (field === "expiryDate") {
      setIsExpiryDateFocused(false);
    }

    if (!isCvvFocused && !isExpiryDateFocused) {
      flipCard(false);
    }
  };

  const handleCvvChange = (text) => {
    // Limita o CVV a 3 dígitos
    if (text.length <= 3) {
      setCvv(text);
    }
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3e3e3e" />

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Payments</Text>
          </View>

          {loading ? (
            <View style={styles.centeredLoading}>
              <ActivityIndicator size="large" color="#FF6900" />
            </View>
          ) : (
            <>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.tabContainer}>
                  <Text style={styles.tabText}>Pix</Text>
                </View>

                <View className="border border-solid border-gray-300 w-[90%] mx-auto" />

                <View style={styles.section}>
                  <Text style={styles.label}>CPF do pagante</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons name="person" size={20} color="#3E3E3E" />
                    <TextInput style={styles.textInput} placeholder="CPF..." />
                  </View>
                </View>

                <View style={styles.tabContainer}>
                  <Text style={styles.tabText}>Cartão</Text>
                </View>

                <View className="border border-solid border-gray-300 w-[90%] mx-auto mb-2" />

                <View style={styles.section}>
                  <Animated.View style={[styles.card, frontAnimatedStyle]}>
                    <UserCard
                      userName={userName}
                      cardNumber={cardNumber}
                      style={styles.cardImage}
                    />
                  </Animated.View>

                  <Animated.View
                    style={[styles.card, styles.cardBack, backAnimatedStyle]}
                  >
                    <CardBack cvvLength={cvv.length} />
                  </Animated.View>

                  <Text style={styles.label}>Nome no cartão</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons name="person" size={20} color="#3E3E3E" />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Nome..."
                      onChangeText={setUserName}
                      value={userName}
                      onFocus={() => handleBlur("name")}
                    />
                  </View>

                  <Text style={styles.label}>Numeração do cartão</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons name="card" size={20} color="#3E3E3E" />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Código..."
                      onChangeText={setCardNumber}
                      value={cardNumber}
                      onFocus={() => handleBlur("number")}
                    />
                  </View>

                  <View style={styles.row}>
                    <View style={[styles.section, styles.half]}>
                      <Text style={styles.label}>CVV</Text>
                      <View style={styles.inputContainer}>
                        <Ionicons name="key" size={20} color="#3E3E3E" />
                        <TextInput
                          style={styles.textInput}
                          placeholder="CVV..."
                          onFocus={() => handleFocus("cvv")}
                          onBlur={() => handleBlur("cvv")}
                          onChangeText={handleCvvChange}
                          value={cvv}
                          keyboardType="numeric"
                          maxLength={3} // Limita a 3 dígitos
                        />
                      </View>
                    </View>

                    <View style={[styles.section, styles.half]}>
                      <Text style={styles.label}>Data de vencimento</Text>
                      <View style={styles.inputContainer}>
                        <Ionicons name="calendar" size={20} color="#3E3E3E" />
                        <TextInput
                          style={styles.textInput}
                          placeholder="Data..."
                          onFocus={() => handleFocus("expiryDate")}
                          onBlur={() => handleBlur("expiryDate")}
                          onChangeText={(text) => setExpiryDate(text)}
                          value={expiryDate}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={[styles.section, styles.checkboxRow]}>
                    <View style={styles.checkboxContainer}>
                      <Checkbox
                        isSelected={isCreditSelected}
                        onSelected={() => handleCheckboxToggle("credit")}
                        label="Crédito"
                      />
                    </View>
                    <View style={styles.checkboxContainer}>
                      <Checkbox
                        isSelected={isDebitSelected}
                        onSelected={() => handleCheckboxToggle("debit")}
                        label="Débito"
                      />
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={async () => {
                    await saveCardData();

                    navigation.navigate("PixAndCardSchedule");
                  }}
                >
                  <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
              </ScrollView>
              {!keyboardVisible && (
                <View style={styles.backButtonContainer}>
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate("Settings")}
                  >
                    <MaterialIcons
                      name="keyboard-arrow-left"
                      size={24}
                      color="black"
                    />
                    <Text style={styles.backButtonText}>Voltar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          )}
        </KeyboardAvoidingView>
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
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingBottom: 100,
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
    fontSize: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "300",
  },
  section: {
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: "#3E3E3E",
    marginBottom: 5,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  card: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    backfaceVisibility: "hidden",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  cardBack: {
    position: "absolute",
    top: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  half: {
    width: "40%",
  },
  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#FF6900",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 0,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButtonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 15,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    padding: 10,
    borderColor: "#3E3E3E",
    borderWidth: 1,
    borderRadius: 25,
  },
  backButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default PixAndCard;
