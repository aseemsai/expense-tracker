/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const expenseDateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(expenseDate),
    };

    props.onSaveNewExpense(expenseData);
    setTitle("");
    setAmount("");
    setExpenseDate("");
    props.onCancel();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="expense-title"
            value={title}
            required
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Amount</label>
          <input
            type="number"
            name="amount"
            id="expense-amount"
            min="0.01"
            step="0.01"
            value={amount}
            required
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Date</label>
          <input
            type="date"
            name="date"
            id="expense-date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseDate}
            required
            onChange={expenseDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
