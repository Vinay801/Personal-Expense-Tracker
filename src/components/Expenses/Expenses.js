import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(expenses) {
  const [yearSelected, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    console.log("Year Selected is " + year.target.value);
    setYear(year.target.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={yearSelected}
        onFilterChange={yearChangeHandler}
      />
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        id={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;