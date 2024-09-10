import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 3.5,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    marginTop: 30,
    display: "flex",
    fontSize: 28,
    color: "#3e3e3e",
    textAlign: "center",
    width: "100%",
  },
  inputContainer: {
    display: "flex",
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
    paddingLeft: 2,
  },
  label: {
    fontSize: 13,
    color: "#3e3e3e",
    alignSelf: "flex-start",
    marginLeft: "13%",
    marginBottom: 4,
    marginTop: 20,
  },
});
