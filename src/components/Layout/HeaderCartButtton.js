import React,{Fragment} from 'react'
import CartIcon from '../Cart/CartIcon'
import Classes from './HeaderCartButtton.module.css'
const HeaderCartButtton = () => {
  return (
    <Fragment>
    <button className={Classes.button} >
    <span className={Classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={Classes.badge}>212</span>
  </button>
  </Fragment>
  )
}

export default HeaderCartButtton