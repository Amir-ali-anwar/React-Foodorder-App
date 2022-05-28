import React,{Fragment} from 'react'
import CartIcon from '../Cart/CartIcon'
import Classes from './HeaderCartButtton.module.css'
import CartContext from '../../store/cartContext'
const HeaderCartButtton = (props) => {
  const cartconext= React.useContext(CartContext);
  const NumberofCartItems= cartconext.Items.reduce((total, item)=>{
    return total+=item.totalAmount
  },0)
  return (
    <Fragment>
    <button className={Classes.button}  onClick={props.onCloseCart}>
    <span className={Classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={Classes.badge}>{NumberofCartItems}</span>
  </button>
  </Fragment>
  )
}

export default HeaderCartButtton