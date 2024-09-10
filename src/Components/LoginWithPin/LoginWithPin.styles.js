import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    justifyContent: "flex-start",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 50,
    color: "#3E3E3E",
  },
  container: {
    display: "flex",
    flex: 0.4,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  pinOuterCircle: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3E3E3E",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  pinInput: {
    width: 20.71,
    height: 20.71,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "transparent",
    color: "transparent",
    textAlign: "center",
  },
  pinInputFilled: {
    backgroundColor: "#3E3E3E",
    borderColor: "#3E3E3E",
  },
});
