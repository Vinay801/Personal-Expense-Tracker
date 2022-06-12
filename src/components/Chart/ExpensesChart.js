import React from "react";
import Chart from "./Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  console.log("Expenses");
  for (const expense of props.expenses) {
    let month = expense.date.getMonth();
    chartDataPoints[month].value += expense.amount;
    console.log(month);
  }
  const dataPointsValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  let max_value = Math.max(...dataPointsValues);
  return <Chart dataPoints={chartDataPoints} maxValue={max_value} />;
};

export default ExpensesChart;
