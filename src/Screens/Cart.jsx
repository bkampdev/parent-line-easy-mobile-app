import React from "react";
import { View } from "react-native";

import CartTopBar from "../Components/Cart/CartTopBar/CartTopBar.jsx";
import CartItems from "../Components/Cart/CartItems/CartItems.jsx";
import CartCheckout from "../Components/Cart/CartCheckout/CartCheckout";
import { useStore } from "../context/StoreContext.jsx";
import StoreClosedModal from "../Components/Cart/StoreClosedModal/StoreClosedModal.jsx";

const Cart = () => {
  const { storeOpen } = useStore();

  return (
    <>
      <CartTopBar />
      <View style={{ flex: 4 }}>
        <CartItems />
      </View>
      <View
        style={{
          display: "flex",
          backgroundColor: "white",
          flex: 2.5,
          justifyContent: "flex-end",
        }}
      >
        <CartCheckout />
      </View>

      {!storeOpen && <StoreClosedModal />}
    </>
  );
};

export default Cart;
