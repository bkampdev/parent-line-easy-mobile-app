import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import IceCreamSelect from "./IceCreamsSelect/IceCreamsSelect";

const IceCreamDayConfig = () => {
  const navigation = useNavigation();

  const [selectedDays, setSelectedDays] = useState([]);
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const scrollViewRef = useRef(null);

  const daysOfWeek = [
    { id: 1, label: "S" }, // Sunday
    { id: 2, label: "T" }, // Monday (T for "segunda-feira")
    { id: 3, label: "Q" }, // Tuesday (Q for "terça-feira")
    { id: 4, label: "Q" }, // Wednesday (Q for "quarta-feira")
    { id: 5, label: "S" }, // Thursday (S for "quinta-feira")
  ];

  const toggleDaySelection = (dayId) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter((id) => id !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };

  const handleFocus = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3e3e3e" />

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <StatusBar barStyle="light-content" backgroundColor="#3e3e3e" />

          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            ref={scrollViewRef}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerText}>Dia do Sorvete</Text>
            </View>

            {/* Informações do Dia do Sorvete */}
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>
                O que é o <Text style={styles.italicText}>dia do sorvete?</Text>{" "}
                🍦
              </Text>
              <Text style={styles.infoText}>
                Esta é uma forma de prevenir alto consumo de açúcar, definindo
                apenas um dia do sorvete, podendo ser na dobra ou não, é uma
                forma de recompensa a quem você tanto ama.
              </Text>
              <Text style={styles.infoText}>
                Assim, permitindo que nesse dia da semana seu filho possa
                comprar esse sorvete.
              </Text>
              <Text style={styles.infoText}>
                Sabemos também que alguns possam ser bem caro, então você pode
                escolher alguns do cardápio da escola.
              </Text>
              <Text style={styles.infoText}>
                Lembre-se de colocar um recado para a pessoa que você tanto ama
                ❤️
              </Text>
            </View>

            {/* Seleção de dias da semana */}
            <View style={styles.daysContainer}>
              {daysOfWeek.map((day) => (
                <TouchableOpacity
                  key={day.id}
                  style={[
                    styles.dayCircle,
                    selectedDays.includes(day.id) && styles.selectedDayCircle,
                  ]}
                  onPress={() => toggleDaySelection(day.id)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      selectedDays.includes(day.id) && styles.selectedDayText,
                    ]}
                  >
                    {day.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Info Text 2 */}
            <Text style={styles.infoText2}>
              Para desativar, não deixe nenhum dia marcado. Ao desativar ele
              poderá comprar sorvete a qualquer dia da semana, caso queira
              bloquear, vá em esconder categoria e tranque-a.
            </Text>

            {/* Select Ice Cream Modal Button */}
            <TouchableOpacity
              style={styles.iceCreamsButton}
              onPress={() => setIsModalVisible(true)}
            >
              <Text style={styles.iceCreamsButtonText}>Escolher sorvetes</Text>
            </TouchableOpacity>

            <IceCreamSelect
              visible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
            />

            {/* Recado Especial */}
            <View style={styles.specialMessageContainer}>
              <Text style={styles.specialMessageTitle}>
                Colocar um recado especial:
              </Text>
              <TextInput
                style={styles.specialMessageInput}
                placeholder="Escreva aqui..."
                placeholderTextColor="#999"
                value={message}
                onChangeText={setMessage}
                multiline={true}
                onFocus={handleFocus} // Rola a tela ao focar
              />
              <Text style={styles.specialMessageHint}>
                Caso ativado, lembraremos você de escrever um recado novo 1 dia
                antes!
              </Text>
            </View>

            {/* Botão Concluir */}
            <TouchableOpacity
              style={styles.concludeButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Text style={styles.concludeButtonText}>Voltar</Text>
            </TouchableOpacity>
          </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContainer: {
    flexGrow: 1,
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
  infoContainer: {
    backgroundColor: "#3E3E3E",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 17,
    color: "white",
    marginBottom: 10,
    fontWeight: "bold",
  },
  italicText: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 14,
    color: "white",
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  dayCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#3E3E3E",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDayCircle: {
    backgroundColor: "#3E3E3E",
  },
  dayText: {
    fontSize: 24,
    color: "#3E3E3E",
  },
  selectedDayText: {
    color: "white",
  },
  infoText2: {
    fontSize: 12,
    color: "#3E3E3E",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 5,
  },
  iceCreamsButton: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "#FF6900",
    paddingVertical: 7,
    alignItems: "center",
    borderRadius: 25,
  },
  iceCreamsButtonText: {
    fontSize: 18,
    color: "#FFF",
  },
  specialMessageContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  specialMessageTitle: {
    fontSize: 18,
    color: "#3E3E3E",
    marginBottom: 10,
  },
  specialMessageInput: {
    height: 100,
    borderColor: "#3E3E3E",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: "#3E3E3E",
    textAlignVertical: "top",
  },
  specialMessageHint: {
    marginTop: 10,
    fontSize: 12,
    color: "#3E3E3E",
    textAlign: "center",
  },
  concludeButton: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#3E3E3E",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 12,
  },
  concludeButtonText: {
    fontSize: 18,
    color: "#FFF",
  },
});

export default IceCreamDayConfig;
