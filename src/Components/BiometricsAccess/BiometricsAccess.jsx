import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

import { styles } from "./BiometricsAccess.styles.js";
import Spacing from "../Spacing.jsx";
import Checkbox from "../../shared/Checkbox/Checkbox.jsx";

const BiometricsAccess = ({ closeModal }) => {
  const [pin, setPin] = useState(new Array(6).fill(""));
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [modalHeight, setModalHeight] = useState("30%");
  const pinInputRefs = useRef([]);

  useEffect(() => {
    const loadSettings = async () => {
      const biometricAuthEnabled = await AsyncStorage.getItem(
        "biometricAuthEnabled"
      );
      setBiometricEnabled(biometricAuthEnabled === "true");

      const savedPin = await SecureStore.getItemAsync("userPin");
      if (savedPin) {
        setPin(
          savedPin.split("").concat(new Array(6 - savedPin.length).fill(""))
        );
      }
    };

    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        if (Platform.OS === "android") {
          setModalHeight("50%"); // Ajusta a altura para 50% apenas para Android quando o teclado é exibido
        }
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        if (Platform.OS === "android") {
          setModalHeight("30%"); // Retorna a altura para 30% apenas para Android quando o teclado é escondido
        }
      }
    );

    loadSettings();

    return () => {
      keyboardDidShowListener.remove(); // Limpa o ouvinte quando o componente é desmontado
      keyboardDidHideListener.remove(); // Limpa o ouvinte quando o componente é desmontado
    };
  }, []);

  const handlePinChange = (text, index) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (index < 5 && text) {
      this[`pinInput${index + 1}`].focus();
    } else if (index > 0 && !text) {
      this[`pinInput${index - 1}`].focus();
    }
  };

  async function savePin(pin) {
    await SecureStore.setItemAsync("userPin", pin);
  }

  handleSubmit = async () => {
    if (biometricEnabled) {
      await AsyncStorage.setItem("biometricAuthEnabled", "true");
    } else {
      await AsyncStorage.setItem("biometricAuthEnabled", "false");
    }

    const pinString = pin.join("");

    if (pinString.length === 6) {
      await savePin(pinString);
    } else {
      await SecureStore.deleteItemAsync("userPin");
    }

    closeModal();
  };

  return (
    <View style={styles.centeredView}>
      <View style={[styles.modalView, { height: modalHeight }]}>
        <Spacing />

        <View style={styles.line}>
          <Text style={styles.title}>Definir Pin</Text>
        </View>

        <View style={styles.pinInputContainer}>
          {pin.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.pinInput}
              onChangeText={(text) => handlePinChange(text, index)}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              ref={(input) => {
                this[`pinInput${index}`] = input;
              }}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace" && !digit && index > 0) {
                  pinInputRefs.current[index - 1].focus();
                }
              }}
              returnKeyType={index === 5 ? "done" : "next"}
            />
          ))}
        </View>

        <View style={styles.biometricsContainer}>
          <Checkbox
            label="Habilitar entrada por biometria?"
            isSelected={biometricEnabled}
            onSelected={() => setBiometricEnabled(!biometricEnabled)}
          />
        </View>

        <View className="w-10 mx-auto my-1" />

        <View style={styles.saveBttnLine}>
          <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonSaveText}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cancelBttnLine}>
          <TouchableOpacity style={styles.buttonCancel} onPress={closeModal}>
            <Text style={styles.buttonCancelText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BiometricsAccess;
