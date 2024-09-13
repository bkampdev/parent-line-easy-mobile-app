import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import DropdownWithModal from "../../shared/DropdownModal/DropdownModal.jsx";
import * as SecureStore from "expo-secure-store";

import { ResponsibleContext } from "../../context/ResponsibleContext.jsx";

const Welcome = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const { responsibleData, setSelectStudent } = useContext(ResponsibleContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfoString = await SecureStore.getItemAsync("userInfo");

      if (userInfoString) {
        const userInfoRes = JSON.parse(userInfoString);
        setUserInfo(userInfoRes);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3e3e3e" />
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Olá, {userInfo?.name}!</Text>

          <View style={styles.responsibleContainer}>
            <Text style={styles.responsibleText}>
              Responsável por{" "}
              {responsibleData.selectedStudent
                ? responsibleData.selectedStudent
                : "[Aluno]"}
            </Text>

            <DropdownWithModal
              items={responsibleData?.responsibleFor?.map((studentName) => ({
                label: studentName,
                value: studentName,
              }))}
              placeholder="Trocar de aluno"
              selectedItem={responsibleData?.selectedStudent}
              setSelectedItem={(value) => setSelectStudent(value)}
            />
          </View>

          <Image
            source={{
              uri: `https://robohash.org/${
                Math.floor(Math.random() * (100 - 20 + 1)) + 20
              }`,
            }}
            style={styles.profileImage}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3e3e3e",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: Platform.OS === "ios" ? 160 : 115,
  },
  welcomeContainer: {
    alignItems: "flex-start",
    marginLeft: 10,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 20,
    color: "white",
  },
  responsibleContainer: {
    marginVertical: 8,
  },
  responsibleText: {
    fontSize: 14,
    color: "white",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: "white",
    borderWidth: 3,
    position: "absolute",
    right: 20,
    top: 20,
  },
});

export default Welcome;
