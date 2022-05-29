import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import {useCartContext} from '../../Hooks/CartHook'

const Cart = (props) => {
  const Cartctx = useCartContext();
  const totalAmount = `$${Cartctx.state.totalAmount.toFixed(2)}`;
  const hasItems = Cartctx.state.Items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {Cartctx.state.Items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.setCartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.order}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
