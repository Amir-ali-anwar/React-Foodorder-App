import React from "react";
import CartContext from "../store/cartContext";
export const useCartContext = () => {
  return React.useContext(CartContext);
};
