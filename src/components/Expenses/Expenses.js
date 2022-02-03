/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card.js";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  let outputRender = (
    <h2 className="expenses-list__fallback">No Expenses Found.</h2>
  );

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  if (filteredExpenses.length > 0) {
    outputRender = (
      <ul className="expenses-list">
        {filteredExpenses.map((item) => (
          <li key={item.id} className="list-item">
            <ExpenseItem
              date={item.date}
              title={item.title}
              price={item.amount}
            />
          </li>
        ))}
      </ul>
    );
  }

  const setDropdownValueInView = (year) => {
    setFilterYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterYearChange={setDropdownValueInView}
      />
      {outputRender}
    </Card>
  );
}

export default Expenses;
