import React from 'react';

const cartcontext=React.createContext({
    Items:[],
    totalAmount:(id)=>{},
    removeAmount:(id)=>{}
})
export default cartcontext