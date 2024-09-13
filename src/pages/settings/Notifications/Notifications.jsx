import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Checkbox from "../../../shared/Checkbox/Checkbox";
import { ResponsibleContext } from "../../../context/ResponsibleContext";
import { NotificationsContext } from "../../../context/NotificationsContext";

const notifications = [
  {
    key: "shopping",
    icon: <FontAwesome5 name="shopping-bag" size={24} color="black" />,
    text: "Compras",
  },
  {
    key: "health",
    icon: <MaterialCommunityIcons name="medical-bag" size={24} color="black" />,
    text: "Avisos de saúde",
  },
  {
    key: "automaticOrders",
    icon: <MaterialCommunityIcons name="cogs" size={24} color="black" />,
    text: "Pedidos automáticos",
  },
  {
    key: "news",
    icon: <MaterialCommunityIcons name="new-box" size={24} color="black" />,
    text: "Novidades",
  },
  {
    key: "iceCream",
    icon: <MaterialIcons name="icecream" size={24} color="black" />,
    text: "Dia do sorvete",
  },
  {
    key: "montlhyResume",
    icon: <MaterialIcons name="event-note" size={24} color="black" />,
    text: "Resumo do mês",
  },
  {
    key: "rechargeAutomatic",
    icon: <MaterialIcons name="attach-money" size={24} color="black" />,
    text: "Recarga de saldo automática",
  },
];

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const { responsibleData, setResponsibleData } =
    useContext(ResponsibleContext);
  const { saveNotifications, loading } = useContext(NotificationsContext);

  const [selectedNotifications, setSelectedNotifications] = useState([
    ...responsibleData.notifications,
  ]);

  const toggleCheckbox = (key) => {
    setSelectedNotifications((prev) => {
      if (prev.includes(key)) {
        return prev.filter((notification) => notification !== key); // Remove a notificação
      } else {
        return [...prev, key]; // Adiciona a notificação
      }
    });
  };

  const handleBack = async () => {
    await saveNotifications(selectedNotifications);

    setResponsibleData((prevData) => ({
      ...prevData,
      notifications: selectedNotifications,
    }));

    navigation.navigate("Settings");
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3e3e3e" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Notificações</Text>
          </View>

          {loading ? (
            <View style={styles.centeredLoading}>
              <ActivityIndicator size="large" color="#FF6900" />
            </View>
          ) : (
            <>
              <View style={styles.notificationsList}>
                {notifications.map((notification, index) => (
                  <View key={index} style={styles.notificationItem}>
                    <View style={styles.iconTextContainer}>
                      {notification.icon}
                      <Text style={styles.notificationText}>
                        {notification.text}
                      </Text>
                    </View>
                    <Checkbox
                      isSelected={selectedNotifications.includes(
                        notification.key
                      )}
                      onSelected={() => toggleCheckbox(notification.key)} // Alterna seleção
                    />
                  </View>
                ))}
              </View>
              <View style={styles.footer}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={handleBack} // Ao voltar, salva e navega
                >
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={24}
                    color="black"
                  />
                  <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
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
  centeredLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
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
    fontSize: 20,
  },
  notificationsList: {
    padding: 20,
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationText: {
    marginLeft: 10,
    fontSize: 16,
  },
  footer: {
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 14,
    elevation: 21,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderColor: "#3E3E3E",
    borderWidth: 1,
    borderRadius: 25,
  },
  backButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default NotificationsScreen;
