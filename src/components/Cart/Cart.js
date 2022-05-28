import React from 'react'
import Modal from '../UI/Modal'
import classes from  './Cart.module.css'
const Cart = (props) => {
const cartItem=[{id:"c1",name:'amir',ammount:2,price:12}].map((item)=><li key={item.id}>{item.name}</li>)
  return (
    <Modal onClose={props.setCartClose}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.6</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.setCartClose}>Close</button>
            <button className={classes.order}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart