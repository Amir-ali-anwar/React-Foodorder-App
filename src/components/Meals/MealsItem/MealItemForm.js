import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = React.useState(true);
  const amountRef = React.useRef();
  const SubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onaddTOCart(enteredAmountNumber)
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
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
