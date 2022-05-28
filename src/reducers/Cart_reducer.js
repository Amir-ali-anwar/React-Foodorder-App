const cart_reducer=(state,action)=>{
    if(action.type==='add'){
        const updatedCart=state.Items.concat(action.payload)
        const totalamount= state.totalAmount + action.payload.price * action.payload.amount;
        return {
            Items:updatedCart,
            totalAmount:totalamount
        }
    }
    return state
}
export default cart_reducer
