import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    height: 50,
    flexDirection: "row",
    width: "85%",
    borderRadius: 9999,
    alignItems: "center",
    paddingHorizontal: 32,
    borderColor: "#FF6900",
    borderWidth: 1,
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  textStyle: {
    color: "#FF6900",
  },
  confirmBttnStyle: {
    color: "white",
  },
  iconStyle: {
    marginRight: 27,
  },
  placeholderStyle: {
    color: "#FF6900",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: "80%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    marginTop: 20,
    backgroundColor: "#FF6900",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
