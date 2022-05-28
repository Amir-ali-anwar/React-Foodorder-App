import React from 'react';
import { CartContext } from "../store/cartContext";

export default useCartContext=()=>{
    return React.useContext(CartContext)
}