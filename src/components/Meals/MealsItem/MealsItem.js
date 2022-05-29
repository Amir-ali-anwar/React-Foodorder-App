import React from "react";
import MealItemForm from "./MealItemForm";
import Classes from "./MealsItem.module.css";
import {CartContext} from '../../../Hooks/index'
const MealsItem = ({ name, description, price }) => {
// console.log(useCartContext())
  const Price = `$${price.toFixed(2)}`;

  return (
    <li className={Classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={Classes.description}>{description}</div>
        <div className={Classes.price}>{Price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
