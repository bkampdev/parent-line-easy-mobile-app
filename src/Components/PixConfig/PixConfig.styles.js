import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "#3E3E3E",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 3,
  },
  label: {
    fontSize: 14,
    color: "#3E3E3E",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3E3E3E",
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: "#3E3E3E",
  },
  buttonSave: {
    backgroundColor: "#3E3E3E",
    borderRadius: 20,
    padding: 7,
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    marginTop: 15,
  },
  buttonSaveText: {
    color: "white",
    fontSize: 16,
  },
  buttonCancel: {
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 7,
    alignItems: "center",
    borderColor: "#3E3E3E",
    borderWidth: 1,
    width: "100%",
  },
  buttonCancelText: {
    color: "#3E3E3E",
    fontSize: 16,
  },
});
