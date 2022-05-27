import React from 'react'
import Classes from './MealsItem.module.css'
const MealsItem = (props) => {
    const Price= `$${props.price.toFixed(2)}`
  return (
   <li className={Classes.meal}>
       <div>
        <h3>{props.name}</h3>
        <div className={Classes.description}>{props.description}</div>
        <div className={Classes.price}>{Price}</div>
       </div>
       <div>

       </div>
   </li>
  )
}

export default MealsItem