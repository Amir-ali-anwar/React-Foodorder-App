import React, { Fragment } from "react";
import MealsImage from "../../assests/meals.jpg";
import Classes from './Header.module.css'
const header = () => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>React meals</h1>
        <button>Cart</button>
      </header>
      <div className={Classes['main-image']}>
        <img src={MealsImage} alt=" burger pictures" />
      </div>
    </Fragment>
  );
};

export default header;
