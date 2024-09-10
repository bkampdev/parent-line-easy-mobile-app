import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    height: 300,
    width: 300,
    marginBottom: 100,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  changePasswordContainer: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  title: {
    display: "flex",
    fontSize: 31,
    color: "#3e3e3e",
    textAlign: "center",
    width: "100%",
  },
  label: {
    fontSize: 13,
    color: "#3e3e3e",
    alignSelf: "flex-start",
    marginLeft: "13%",
    marginBottom: 4,
    marginTop: 15,
  },
  inputContainer: {
    height: 50,
    flexDirection: "row",
    width: "85%",
    borderRadius: 9999,
    alignItems: "center",
    paddingHorizontal: 32,
    borderColor: "#3e3e3e",
    borderWidth: 1,
  },
  iconStyle: {
    marginRight: 27,
  },
  textInputStyle: {
    flex: 1,
    paddingLeft: 13,
  },
  button: {
    display: "flex",
    width: "85%",
    backgroundColor: "#3e3e3e",
    paddingVertical: 16,
    borderRadius: 9999,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  checkboxContainer: {
    display: "flex",
    marginTop: 15,
  },
});
