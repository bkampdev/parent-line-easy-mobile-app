import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    display: "flex",
    backgroundColor: "#3e3e3e",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  container: {
    paddingHorizontal: 20,
    display: "flex",
    paddingBottom: 10,
  },
  alunoData: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    marginTop: 5,
  },
  topBar: {
    height: 90,
    marginLeft: 10,
    marginTop: 20,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  topBarText: {
    color: "white",
    fontSize: 25,
  },

  buttonContainer: {
    alignItems: "flex-start",
  },

  collapseButton: {
    height: 35,
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },

  collapseCloseButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    display: "flex",
    width: "60%",
    backgroundColor: "white",
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  logoutButton: {
    display: "flex",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E3E3E",
    width: "93%",
    marginTop: 10,
  },

  logoutButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
  },

  buttonCloseText: {
    textAlign: "center",
    color: "#3E3E3E",
    fontSize: 14,
  },

  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 19,
    textTransform: "uppercase",
  },

  topBarText2: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  extendedSection: {
    backgroundColor: "#3e3e3e",
    paddingLeft: 20,
  },
  extendedSectionText: {
    color: "#FFFFFF",
    fontSize: 19,
    marginBottom: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: "white",
    borderWidth: 3, //TODO: Remover quando tiver a foto real
  },

  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
