import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  dateContainer: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 5,
    padding: 5,
  },
  dayText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  monthText: {
    color: "white",
    fontSize: 14,
    marginTop: -5,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productText: {
    fontSize: 14,
  },
  totalText: {
    fontSize: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    height: "40%",
    backgroundColor: "#FF6900",
    borderRadius: 20,
    padding: 13,
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
    height: "65%",
    width: "100%",
    borderRadius: 20,
  },
  orderInfoContainer: {
    display: "flex",
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 50,
  },
  itensContainer: {
    height: 60,
    backgroundColor: "red",
  },
  orderInfoText: {
    color: "#FF6900",
  },
  orderRetiredContainer: {
    display: "flex",
    width: "100%",
  },
  orderRetiredText: {
    color: "#FF6900",
    textAlign: "center",
    fontStyle: "italic",
  },
  buttonCloseContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 13,
    width: "100%",
    height: 60,
  },
  buttonCloseText: {
    color: "#FF6900",
    fontSize: 12,
    textTransform: "uppercase",
  },
  buttonClose: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF6900",
    backgroundColor: "white",
    borderWidth: 1,
    width: "100%",
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#FF6900",
    marginLeft: 13,
    marginRight: 13,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginHorizontal: 8,
    color: "#FF6900",
  },
});

export default styles;
