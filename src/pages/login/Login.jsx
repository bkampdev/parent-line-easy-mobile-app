import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";

const logo = require("../../../assets/images/logo.png");
import Button from "../../shared/Button/Button";
import { useAuth } from "../../context/AuthContext";
import { styles } from "./Login.styles";
import LoginWithPin from "../../Components/LoginWithPin/LoginWithPin";
import { ResponsibleContext } from "../../context/ResponsibleContext";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { login, setUser } = useAuth();
  const { setResponsibleData, setSelectStudent } =
    useContext(ResponsibleContext);

  const [school, setSchool] = useState("");
  const [registration, setRegistration] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasPin, setHasPin] = useState(false);

  useEffect(() => {
    checkPinAvailability();
    checkBiometricAuth();
  }, []);

  const checkBiometricAuth = async () => {
    try {
      const biometricAuthEnabled = await AsyncStorage.getItem(
        "biometricAuthEnabled"
      );
      if (biometricAuthEnabled === "true") {
        const biometricAuth = await LocalAuthentication.authenticateAsync({
          promptMessage: "Autentique para continuar",
          fallbackLabel: "Usar senha",
          cancelLabel: "Cancelar",
        });

        if (biometricAuth.success) {
          Toast.show({
            type: "success",
            text1: "Login realizado com sucesso!",
          });

          return navigation.navigate("TabNavigator");
        }
      }
    } catch (error) {
      console.error("Erro ao verificar a autenticação biométrica", error);
    }
  };

  const checkPinAvailability = async () => {
    const pin = await SecureStore.getItemAsync("userPin");

    if (pin) {
      setHasPin(true);
    } else {
      setHasPin(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setUser(registration);

    try {
      const response = await axios.post(
        "https://vxldusjdt6.execute-api.sa-east-1.amazonaws.com/Line-Easy/adminAppLogin",
        {
          adminEmail: registration,
          password: password,
        }
      );

      console.log(response.data.body);

      if (response.data.statusCode === 200) {
        Toast.show({
          type: "success",
          text1: "Login realizado com sucesso!",
        });

        const userToken = response.data.body;

        login(userToken);

        await SecureStore.setItemAsync(
          "userInfo",
          JSON.stringify(response.data.body)
        );

        console.log(response.data.body.responsibleFor[0]);

        // Set the default selected student
        setResponsibleData(response.data.body);
        setSelectStudent(response.data.body.responsibleFor[0]);

        if (response.data.body.adminFirstAcess === true) {
          console.log("FIRST ACCESS");
          navigation.navigate("FirstAccess");

          const userToken = response.data.body.token;
          login(userToken);
        } else {
          navigation.navigate("TabNavigator");

          const userToken = response.data.body.token;
          login(userToken);
        }

        return 200;
      } else {
        Toast.show({
          type: "error",
          text1: "Senha ou usuário inválido!",
        });

        return 401;
      }
    } catch (error) {
      console.error("Erro no Login", error);

      Toast.show({
        type: "error",
        text1: "Erro na autenticação",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {hasPin ? (
        <LoginWithPin />
      ) : (
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "#3e3e3e" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              flex: 1.3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={logo}
              style={{
                width: 150,
                height: 150,
                justifyContent: "center",
                marginTop: 40,
                marginBottom: 10,
              }}
              resizeMode="contain"
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Insira seus dados fornecidos pela escola
            </Text>

            <View className="w-10 mx-auto my-4" />

            {/* Campo de escolher a escola */}
            {/* <Dropdown
              items={[
                { label: "Escola 1", value: "school1" },
                { label: "Escola 2", value: "school2" },
                { label: "Escola 3", value: "school3" },
                { label: "Escola 4", value: "school4" },
                { label: "TESTE", value: "TESTE" },
              ]}
              placeholder="Escolha sua escola"
              selectedItem={school}
              setSelectedItem={setSchool}
            /> */}

            {/* Campo de matrícula */}
            <Text style={styles.label}>Matrícula</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="person-sharp"
                size={25}
                color="#FF6900"
                style={styles.iconStyle}
              />
              <TextInput
                style={styles.textInputStyle}
                value={registration}
                onChangeText={setRegistration}
              />
            </View>

            {/* Campo de senha */}
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
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>

            <Button
              title="Fazer Login"
              onPress={handleLogin}
              isLoading={loading}
            />
          </View>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

export default LoginScreen;
