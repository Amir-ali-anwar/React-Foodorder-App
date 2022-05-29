import Reat from 'react'
import CartContext from '../store/CartContext'
import React from 'react';
 const useCartContext=()=>{
    return React.useContext(CartContext)
}

export default useCartContext;
