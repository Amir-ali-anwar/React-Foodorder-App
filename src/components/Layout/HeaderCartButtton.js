import React,{Fragment} from 'react'
import CartIcon from '../Cart/CartIcon'
import Classes from './HeaderCartButtton.module.css'
const HeaderCartButtton = (props) => {
  // const NumberofCartItems= cartconext.Items.reduce((total, item)=>{
  //   return total+=item.totalAmount
  // },0)
  return (
    <Fragment>
    <button className={Classes.button}  onClick={props.onCloseCart}>
    <span className={Classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={Classes.badge}>0</span>
  </button>
  </Fragment>
  )
}

export default HeaderCartButtton