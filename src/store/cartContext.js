import React from "react";
import reducer from '../reducers/Cart_reducer'
const initialState = {
  Items: [],
  totalAmount: 0,
};
const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state,dispatch]=React.useReducer(reducer,initialState)
  const addItemToCart=(item)=>{
    dispatch({type:'add',payload:item})
  }
  const RemoveItemFromCart=(id)=>{
    dispatch({type:'remove',payload:id})
  }
  return <CartContext.Provider value={{addItemToCart,RemoveItemFromCart}}>{children}</CartContext.Provider>;
};


export default CartContext