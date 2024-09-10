import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./PixConfig.styles.js";
import CpfDocument from "../../../assets/icons/CpfDocument.jsx";

const PixConfig = ({ closeModal }) => {
  const [pixKey, setPixKey] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.title}>Definir Pix (exclusivo saque)</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Chave Pix</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="key" size={20} color="#3E3E3E" />
            <TextInput
              style={styles.textInput}
              placeholder="Insira sua chave..."
              value={pixKey}
              onChangeText={setPixKey}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>CPF do titular</Text>
          <View style={styles.inputContainer}>
            {/* <Ionicons name="document" size={20} color="#3E3E3E" /> */}
            <CpfDocument width={20} height={20} fill="#3E3E3E" />
            <TextInput
              style={styles.textInput}
              placeholder="Insira seu CPF..."
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.buttonSave} onPress={closeModal}>
          <Text style={styles.buttonSaveText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCancel} onPress={closeModal}>
          <Text style={styles.buttonCancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PixConfig;
