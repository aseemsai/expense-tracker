import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formToggle, setFormToggle] = useState(false);
  const newExpenseHandler = (enteredNewExpense) => {
    const expenseData = {
      ...enteredNewExpense,
      id: Math.random().toString(),
    };

    props.newExpenseAddHandler(expenseData);
  };

  const formToggleHandler = () => {
    setFormToggle((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="new-expense">
      {!formToggle && <button onClick={formToggleHandler}>Add Expense</button>}
      {formToggle && (
        <ExpenseForm
          onSaveNewExpense={newExpenseHandler}
          onCancel={formToggleHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
