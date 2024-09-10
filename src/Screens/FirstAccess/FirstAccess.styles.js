import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    backgroundColor: "white",
    height: 300,
    width: 300,
    marginBottom: 100,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  emojiText: {
    fontSize: 170,
  },
  cretePasswordContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  welcomeText: {
    fontSize: 27,
    color: "white",
    textAlign: "center",
  },
  button: {
    display: "flex",
    width: "85%",
    backgroundColor: "white",
    paddingVertical: 16,
    borderRadius: 9999,
    marginTop: 30,
  },
  buttonText: {
    color: "#3e3e3e",
    textAlign: "center",
    fontSize: 18,
  },
});
