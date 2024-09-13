import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import styles from "./BalanceContainer.styles";

import { ResponsibleContext } from "../../../context/ResponsibleContext";

const BalanceContainer = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isDepositModalVisible, setIsDepositModalVisible] = useState(false);
  const [depositAmount, setDepositAmount] = useState("135,52");
  const [paymentMethod, setPaymentMethod] = useState("PIX");
  const [adminCredits, setAdminCredits] = useState(0);
  const [adminLastMonthCredits, setAdminLastMonthCredits] = useState(0);
  const navigation = useNavigation();

  const { responsibleData, setSelectStudent } = useContext(ResponsibleContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await SecureStore.getItemAsync("userInfo");
      if (userInfo) {
        const { adminCredits, adminLastMonthCredits } = JSON.parse(userInfo);
        setAdminCredits(adminCredits);
        setAdminLastMonthCredits(adminLastMonthCredits);
      }
    };

    fetchUserInfo();
  }, []);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const toggleDepositModal = () => {
    setIsDepositModalVisible(!isDepositModalVisible);
  };

  const formatCurrency = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const integerPart = numericValue.slice(0, -2).replace(/^0+/, "") || "0";
    const decimalPart = numericValue.slice(-2).padEnd(2, "0");
    return `${integerPart},${decimalPart}`;
  };

  const handleDepositAmountChange = (value) => {
    setDepositAmount(formatCurrency(value));
  };

  const handleContinuePress = () => {
    if (paymentMethod === "PIX") {
      const cpf = "123.456.789-00"; // substitua pelo valor do CPF que você deseja passar, pode pegar do storage ou user context
      navigation.navigate("PixDeposit", { cpf, depositAmount });

      setIsDepositModalVisible(false);
    } else {
      // Lógica para o método Cartão
    }
  };

  return (
    <View style={styles.balanceSection}>
      <View style={styles.balanceHeader}>
        <Text style={styles.balanceLabel}>
          Saldo atual de {responsibleData.selectedStudent}:
        </Text>
        <Text style={styles.balanceSpentLabel}>Gasto no mês anterior:</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceAmount}>
          {isBalanceVisible ? `$${adminCredits}` : "*****"}
        </Text>
        <Text style={styles.spentAmount}>
          {isBalanceVisible ? `$${adminLastMonthCredits}` : "*****"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.hideBalanceButton}
        onPress={toggleBalanceVisibility}
      >
        <Text style={styles.hideBalanceButtonText}>
          {isBalanceVisible ? "Esconder dados" : "Mostrar dados"}
        </Text>
      </TouchableOpacity>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={toggleDepositModal}
        >
          <Feather name="arrow-down-circle" size={20} color="white" />
          <Text style={styles.actionButtonText}>Depositar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="arrow-up-circle" size={20} color="white" />
          <Text style={styles.actionButtonText}>Sacar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isDepositModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleDepositModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalAmountText}
              value={depositAmount}
              onChangeText={handleDepositAmountChange}
              keyboardType="numeric"
              maxLength={15}
            />

            <View style={styles.paymentOptions}>
              <TouchableOpacity
                style={[
                  styles.paymentOption,
                  paymentMethod === "PIX" && styles.selectedPaymentOption,
                ]}
                onPress={() => setPaymentMethod("PIX")}
              >
                <Text>PIX</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.paymentOption,
                  paymentMethod === "Cartão" && styles.selectedPaymentOption,
                ]}
                onPress={() => setPaymentMethod("Cartão")}
              >
                <Text>Cartão</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinuePress}
            >
              <Text style={styles.continueButtonText}>Continuar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={toggleDepositModal}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BalanceContainer;
