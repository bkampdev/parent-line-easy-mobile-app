import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import SettingsTopBar from "../../Components/Settings/SettingsTopBar/SettingsTopBar";
import Separator from "../../Components/Separator";
import PastPurchasesList from "../../Components/PastPurchases/PastPurchasesList";
import BiometricsAccess from "../../Components/BiometricsAccess/BiometricsAccess";
import { styles } from "./Settings.styles";
import PixConfig from "../../Components/PixConfig/PixConfig";
import CustomModal from "../../shared/CustomDropdownModalSettings/CustomDropdownModalSettings";
import { ResponsibleContext } from "../../context/ResponsibleContext";

const CartTopBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [askForModalVisible, setAskForModalVisible] = useState(false);
  const [biometricsModalVisible, setBiometricsModalVisible] = useState(false);
  const [pixConfigModalVisible, setPixConfigModalVisible] = useState(false);

  const { responsibleData, setSelectStudent } = useContext(ResponsibleContext);
  const studentOptions = responsibleData?.responsibleFor?.map(
    (studentName) => ({
      label: studentName,
      value: studentName,
    })
  );

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.showPastPurchases) {
      setModalVisible(true);
    }
  }, [route.params]);

  const toggleAskForModal = () => {
    setAskForModalVisible(!askForModalVisible);
  };

  const togglePastPurchases = () => {
    setModalVisible(true);
  };

  const toggleTheme = () => {
    console.log("Toggle Theme");
  };

  const toggleBiometry = () => {
    setBiometricsModalVisible(!biometricsModalVisible);
  };

  const togglePixConfig = () => {
    setPixConfigModalVisible(!biometricsModalVisible);
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <SafeAreaView style={styles.safeArea}>
        <SettingsTopBar />
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Wrap the content in ScrollView */}
        <View style={styles.settingsConfig}>
          <View style={styles.lineContainer}>
            <View style={styles.iconTextContainer}>
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={30}
                color="#3E3E3E"
              />
              <Text style={styles.text}>Tema do Aplicativo</Text>
            </View>
            <TouchableOpacity onPress={toggleTheme} style={styles.actionButton}>
              <Text style={styles.buttonText}>Claro</Text>
            </TouchableOpacity>
          </View>

          <Separator />

          <View style={styles.lineContainer}>
            <View style={styles.iconTextContainer}>
              <FontAwesome5 name="shopping-bag" size={30} color="#3E3E3E" />
              <Text style={styles.text}>Compras anteriores</Text>
            </View>
            <TouchableOpacity
              onPress={togglePastPurchases}
              style={styles.actionButton}
            >
              <Text style={styles.buttonText}>Visualizar</Text>
            </TouchableOpacity>
          </View>

          <Separator />

          <TouchableOpacity
            style={styles.lineContainer}
            onPress={toggleBiometry}
          >
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="security" size={30} color="#3E3E3E" />
              <Text style={styles.text}>Acesso e Biometria</Text>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3E3E3E"
            />
          </TouchableOpacity>

          <Separator />

          <TouchableOpacity
            style={styles.lineContainer}
            onPress={() => navigation.navigate("Notifications")}
          >
            <View style={styles.iconTextContainer}>
              <MaterialIcons
                name="notifications-on"
                size={30}
                color="#3E3E3E"
              />
              <Text style={styles.text}>Notificações</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3E3E3E"
            />
          </TouchableOpacity>

          <Separator />

          <TouchableOpacity
            style={styles.lineContainer}
            onPress={() => navigation.navigate("PixAndCard")}
          >
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="credit-card" size={30} color="#3E3E3E" />
              <Text style={styles.text}>Cartão e Pix</Text>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3E3E3E"
            />
          </TouchableOpacity>

          <Separator />

          <TouchableOpacity
            style={styles.lineContainer}
            onPress={togglePixConfig}
          >
            <View style={styles.iconTextContainer}>
              <MaterialIcons
                name="account-balance-wallet"
                size={30}
                color="#3E3E3E"
              />
              <Text style={styles.text}>Chave Pix de saque</Text>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3E3E3E"
            />
          </TouchableOpacity>

          {/* DIVISOR */}
          <View className="w-[90%] mx-auto my-1.5" />

          <View style={styles.studentConfigContainer}>
            <Text style={styles.studentConfigHeader}>
              Configurações do Aluno
            </Text>
            <View style={styles.studentInfoContainer}>
              <Text style={styles.switchStudentButtonText}>
                Nicolas de Barros
              </Text>

              <CustomModal
                items={studentOptions}
                placeholder="Trocar de aluno"
                selectedItem={responsibleData?.selectedStudent}
                setSelectedItem={(value) => setSelectStudent(value)}
              />
            </View>
          </View>

          <View className="w-[90%] mx-auto my-1.5" />

          <TouchableOpacity
            style={styles.lineContainer}
            onPress={() => navigation.navigate("IceCreamDayConfig")}
          >
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="icecream" size={30} color="#3E3E3E" />
              <Text style={styles.text}>Dia do sorvete</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3E3E3E"
            />
          </TouchableOpacity>

          <Separator />

          <TouchableOpacity
            style={styles.lineContainer}
            onPress={() => navigation.navigate("HideCategories")}
          >
            <View style={styles.iconTextContainer}>
              <MaterialCommunityIcons
                name="eye-off"
                size={30}
                color="#3E3E3E"
              />
              <Text style={styles.text}>Esconder categoria</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3E3E3E"
            />
          </TouchableOpacity>

          <Separator />

          <TouchableOpacity
            style={styles.lineContainer}
            onPress={() => navigation.navigate("HideProducts")}
          >
            <View style={styles.iconTextContainer}>
              <MaterialCommunityIcons
                name="eye-off"
                size={30}
                color="#3E3E3E"
              />
              <Text style={styles.text}>Esconder produto</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3E3E3E"
            />
          </TouchableOpacity>

          <Separator />

          <TouchableOpacity
            style={styles.lineContainer}
            onPress={toggleBiometry}
          >
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="restaurant-menu" size={30} color="#3E3E3E" />
              <Text style={styles.text}>Definir restrição alimentar</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3E3E3E"
            />
          </TouchableOpacity>

          <Separator />
        </View>
      </ScrollView>

      {/* MODAL DE COMPRAS ANTERIORES */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerModalContainer}>
              <Text style={styles.headerText}>Compras</Text>
              <View style={styles.separator} />
            </View>
            <View style={styles.modalContainer}>
              <PastPurchasesList />

              <View style={styles.buttonCloseContainer}>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.buttonCloseText}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL DE CONFIGS ACESSO */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={biometricsModalVisible}
        onRequestClose={() => {
          setBiometricsModalVisible(!biometricsModalVisible);
        }}
      >
        <BiometricsAccess closeModal={() => setBiometricsModalVisible(false)} />
      </Modal>

      {/* MODAL DE CONFIGS DO PIX */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={pixConfigModalVisible}
        onRequestClose={() => {
          setPixConfigModalVisible(!pixConfigModalVisible);
        }}
      >
        <PixConfig closeModal={() => setPixConfigModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default CartTopBar;
