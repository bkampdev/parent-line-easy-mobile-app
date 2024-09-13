import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Toast from "react-native-toast-message";

import { styles } from "./ChangePassword.styles";
const logo = require("../../../../assets/images/logo.png");
import { useAuth } from "../../../context/AuthContext";

const FirstAccess1 = () => {
  const { username } = useAuth();

  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChangePassword = async () => {
    setLoading(true);
    console.log(username);

    try {
      //TODO: Adicionar campos de Checkbox aqui
      const response = await axios.post(
        "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/updateAdminPassword",
        {
          adminEmail: username,
          password: newPassword,
        }
      );

      console.log(response.data);
      setLoading(false);

      if (response.data.statusCode === 200) {
        Toast.show({
          type: "success",
          text1: "Senha atualizada com sucesso!",
        });

        navigation.navigate("TabNavigator");
      } else {
        Toast.show({
          type: "error",
          text1: "Erro ao atualizar a senha!",
        });

        return 500;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#3e3e3e" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={logo}
          style={{
            width: 300,
            height: 300,
            justifyContent: "center",
            marginTop: 40,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ display: "flex", flex: 0.65 }}>
        <View style={styles.changePasswordContainer}>
          <Text style={styles.title}>Crie sua senha</Text>

          {/* Campo de trocar senha */}
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed"
              size={25}
              color="#FF6900"
              style={styles.iconStyle}
            />
            <TextInput
              style={styles.textInputStyle}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={true}
            />
          </View>

          {/* Componentes de Checkbox */}
          {/* <View style={styles.checkboxContainer}>
            <Checkbox
              label="Aceito receber mensagens de marketing e etc"
              isSelected={acceptMarketing}
              onSelected={() => setAcceptMarketing(!acceptMarketing)}
            />

            <Checkbox
              label="Aceito os termos e condições"
              isSelected={acceptTerms}
              onSelected={() => setAcceptTerms(!acceptTerms)}
            />
          </View> */}

          <TouchableOpacity
            style={styles.button}
            onPress={handleChangePassword}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Concluir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FirstAccess1;
