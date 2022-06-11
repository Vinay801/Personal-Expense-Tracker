import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [yearSelected, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    console.log("Year Selected is " + year.target.value);
    setYear(year.target.value);
  };

  let list = props.expenses.filter(
    (iterm) => iterm.date.getFullYear() == yearSelected
  );

  // console.log(props.expenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={yearSelected}
        onFilterChange={yearChangeHandler}
      />
      <ExpensesList list={list} />
    </Card>
  );
}

export default Expenses;
