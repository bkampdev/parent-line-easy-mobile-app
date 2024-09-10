import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { styles } from "./LoginWithPin.styles";

const logo = require("../../../assets/images/logo.png");

const PinInput = ({ digit, onDigitChange, index, inputs }) => {
  return (
    <View style={styles.pinOuterCircle}>
      <TextInput
        key={index}
        style={[styles.pinInput, digit.length > 0 && styles.pinInputFilled]}
        onChangeText={(text) => onDigitChange(text, index)}
        value={digit}
        keyboardType="number-pad"
        maxLength={1}
        ref={(el) => (inputs.current[index] = el)}
        caretHidden={true}
      />
    </View>
  );
};

const LoginWithPin = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState(new Array(6).fill(""));
  const [invalidAttempt, setInvalidAttempt] = useState(false);
  const inputs = useRef([]);

  useEffect(() => {
    if (invalidAttempt) {
      setPin(new Array(6).fill(""));
      inputs.current[0].focus();
      setInvalidAttempt(false);
    }
  }, [invalidAttempt]);

  useEffect(() => {
    if (pin.every((digit) => digit.length === 1)) {
      handleSubmit();
    }
  }, [pin]);

  const handleSubmit = async () => {
    const pinString = pin.join("");

    console.log("PIN inserido:", pinString);

    const savedPin = await SecureStore.getItemAsync("userPin");

    console.log("PIN salvo:", savedPin);

    if (pinString === savedPin) {
      Toast.show({
        type: "success",
        text1: "Login realizado com sucesso!",
      });

      navigation.navigate("TabNavigator");
    } else {
      Toast.show({
        type: "error",
        text1: "Pin Inválido",
      });

      setInvalidAttempt(true);
    }
  };

  const handlePinChange = (text, index) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
    } else if (text.length === 0 && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#3E3E3E" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={logo}
          style={{ width: 350, height: 350 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Insira seu pin</Text>
        <View style={styles.pinContainer}>
          {pin.map((digit, index) => (
            <PinInput
              key={index}
              digit={digit}
              onDigitChange={handlePinChange}
              index={index}
              inputs={inputs}
            />
          ))}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginWithPin;
