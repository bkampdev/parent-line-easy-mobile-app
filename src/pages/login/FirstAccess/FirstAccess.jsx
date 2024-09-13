import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./FirstAccess.styles";

const FirstAccess = () => {
  const navigation = useNavigation();

  return (
    <>
      <View className="flex w-full h-full">
        <View className="h-full bg-[#3e3e3e] items-center justify-center pt-14">
          <View style={styles.imageContainer}>
            <Text style={styles.emojiText}>👋</Text>
          </View>
          <View style={styles.cretePasswordContainer}>
            <Text style={styles.welcomeText}>
              Vi que esse é seu primeiro acesso! Seja bem-vindo!
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("ChangePassword");
              }}
            >
              <Text style={styles.buttonText}>Crie sua senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default FirstAccess;
