import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const amountRef = React.useRef();
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
