import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { BlurContext } from "../../../context/BlurContext";
import Spacing from "../../Spacing";
import { styles } from "./SettingsTopbar.styles";
import { useAuth } from "../../../context/AuthContext";

const SettingsTopBar = () => {
  const { setBlurActive } = useContext(BlurContext);
  const { logout } = useAuth();
  const [isExtended, setIsExtended] = useState(false);

  const toggleExtension = () => {
    const newIsExtended = !isExtended;
    setIsExtended(newIsExtended);
    setBlurActive(newIsExtended);
  };

  const handleLogout = () => {
    toggleExtension();

    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={{
            uri: `https://robohash.org/${
              Math.floor(Math.random() * (100 - 20 + 1)) + 20
            }`,
          }}
          style={styles.profileImage}
        />
        <View style={styles.alunoData}>
          <Text style={styles.topBarText}>Nicolas de Barros</Text>
          <Spacing />
          <Spacing />
          <Text style={styles.topBarText2}>24/05/2002 - 32070837</Text>
        </View>
      </View>

      {/* {!isExtended && (
        <TouchableOpacity
          onPress={toggleExtension}
          style={styles.collapseButton}
        >
          <Text style={styles.buttonText}>
            <Text style={{ color: "#3E3E3E" }}>Ver mais</Text>
          </Text>
        </TouchableOpacity>
      )}

      {isExtended && (
        <View style={styles.extendedSection}>
          <Text style={styles.extendedSectionText}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Matricula:{" "}
            </Text>
            00.00000.000
          </Text>
          <Text style={styles.extendedSectionText}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>E-mail: </Text>
            email@lineeasy.com
          </Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutButtonText}>SAIR DA CONTA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleExtension}
              style={styles.collapseCloseButton}
            >
              <Text style={styles.buttonCloseText}>
                <Text style={{ color: "#3E3E3E" }}>Voltar</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )} */}
    </View>
  );
};

export default SettingsTopBar;
