import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const PixAndCardSchedule = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("00,00");
  const [selectedDay, setSelectedDay] = useState(1);

  const formatAmount = (value) => {
    // Remove todos os caracteres que não sejam números
    const onlyNumbers = value.replace(/[^0-9]/g, "");

    // Adiciona zeros à esquerda se necessário
    const numberValue = parseInt(onlyNumbers) || 0;

    // Formata o número para incluir uma vírgula
    const formattedValue = (numberValue / 100).toFixed(2).replace(".", ",");

    return formattedValue;
  };

  const handleAmountChange = (value) => {
    const formattedValue = formatAmount(value);
    setAmount(formattedValue);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View contentContainerStyle={styles.mainView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Payments</Text>
        </View>

        {/* Pergunta */}
        <View style={styles.section}>
          <Text style={styles.questionText}>
            Deseja adicionar depósito automático?
          </Text>
        </View>

        {/* Valor do Depósito */}
        <View style={styles.amountContainer}>
          <TextInput
            style={styles.amountTextInput}
            value={amount}
            onChangeText={handleAmountChange}
            keyboardType="numeric"
            caretHidden={true}
          />
        </View>

        {/* Nota Informativa */}
        <Text style={styles.infoText}>
          Caso não deseje, deixe o valor em zero (00,00).
        </Text>

        {/* Escolha do Dia */}
        <Text style={styles.chooseDayText}>Escolha o dia de depósito</Text>
        <View style={styles.daySelectionContainer}>
          {[1, 5, 10, 15].map((day) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayButton,
                selectedDay === day && styles.selectedDayButton,
              ]}
              onPress={() => setSelectedDay(day)}
            >
              <Text
                style={[
                  styles.dayButtonText,
                  selectedDay === day && styles.selectedDayButtonText,
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botão Concluir */}
        <TouchableOpacity
          style={styles.concludeButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.concludeButtonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainView: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  header: {
    backgroundColor: "#3E3E3E",
    paddingVertical: 10,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  section: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  questionText: {
    fontSize: 18,
    textAlign: "center",
  },
  amountContainer: {
    borderWidth: 2,
    borderColor: "#FF6900",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    marginTop: 30,
  },
  amountTextInput: {
    fontSize: 36,
    color: "#FF6900",
    textAlign: "center",
  },
  infoText: {
    fontSize: 14,
    textAlign: "center",
    color: "#8E8E8E",
    marginBottom: 10,
  },
  chooseDayText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
    marginTop: 30,
  },
  daySelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 18,
    marginBottom: 30,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: "#3E3E3E",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  selectedDayButton: {
    backgroundColor: "#3E3E3E",
  },
  dayButtonText: {
    fontSize: 16,
    color: "#3E3E3E",
  },
  selectedDayButtonText: {
    color: "#FFF",
  },
  concludeButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#3e3e3e",
  },
  concludeButtonText: {
    fontSize: 18,
    color: "#3e3e3e",
  },
});

export default PixAndCardSchedule;
