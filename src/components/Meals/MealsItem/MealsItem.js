import React from "react";
import MealItemForm from "./MealItemForm";
import Classes from "./MealsItem.module.css";
import CartContext from '../../../store/cartContext'
const MealsItem = ({id, name, description, price }) => {
const Cartctx= React.useContext(CartContext)
  const Price = `$${price.toFixed(2)}`;

  const addToCartHanlder=(amount)=>{
    Cartctx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    });
  }

  return (
    <li className={Classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={Classes.description}>{description}</div>
        <div className={Classes.price}>{Price}</div>
      </div>
      <div>
        <MealItemForm onaddTOCart={addToCartHanlder}/>
      </div>
    </li>
  );
};

export default MealsItem;
