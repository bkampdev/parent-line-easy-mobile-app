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
    height: "65%",
    backgroundColor: "#3e3e3e",
    borderRadius: 25,
    justifyContent: "flex-end",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headerModalContainer: {
    display: "flex",
    height: 50,
    width: "100%",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  modalContainer: {
    display: "flex",
    backgroundColor: "white",
    height: "87%",
    width: "100%",
    borderRadius: 25,
  },

  orderInfoContainer: {
    display: "flex",
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },

  itensContainer: {
    height: 200,
    marginLeft: 15,
    marginRight: 15,
  },

  orderInfoText: {
    color: "#3e3e3e",
  },

  bannerImage: {
    width: "100%", // mesma largura do botão e do container do texto
    alignSelf: "center",
  },

  orderRetiredContainer: {
    display: "flex",
    width: "84%",
    alignSelf: "center",
  },
  orderRetiredText: {
    color: "#3e3e3e",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 10,
  },
  buttonCloseContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 13,
    width: "100%",
    backgroundColor: "white",
  },
  buttonCloseText: {
    color: "white",
    fontSize: 12,
    textTransform: "uppercase",
  },
  buttonClose: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3e3e3e",
    backgroundColor: "#3e3e3e",
    borderWidth: 1,
    width: "90%",
    marginTop: 5,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: "#3e3e3e",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginHorizontal: 8,
    color: "#3e3e3e",
  },
});
