import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  balanceSection: {
    backgroundColor: "#f3f3f3",
    padding: 20,
    borderRadius: 20,
    margin: 20,
    marginBottom: 0,
  },
  balanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  balanceLabel: {
    fontSize: 12,
    color: "#333",
  },
  balanceSpentLabel: {
    fontSize: 12,
    color: "#333",
    textAlign: "right",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 45,
    color: "#333",
  },
  spentAmount: {
    fontSize: 30,
    color: "#333",
  },
  hideBalanceButton: {
    backgroundColor: "#FF6900",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  hideBalanceButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: "#333333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
  modalContainer: {
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
  },
  modalAmountText: {
    fontSize: 40,
    color: "#FF6900",
    marginBottom: 20,
    textAlign: "center",
  },
  paymentOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  paymentOption: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedPaymentOption: {
    borderColor: "#FF6900",
    backgroundColor: "#f0f0f0",
  },
  continueButton: {
    backgroundColor: "#333333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "#3e3e3e",
    borderWidth: 1,
    alignItems: "center",
    width: "100%",
  },
  cancelButtonText: {
    color: "#3e3e3e",
    fontWeight: "bold",
  },
});

export default styles;
