import React from "react";
import reducer from '../reducers/Cart_reducer'
const initialState = {
  Items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};
const cartcontext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state,dispatch]=React.useReducer(reducer,initialState)
  return <cartcontext.Provider value={{}}>{children}</cartcontext.Provider>;
  return 
};

