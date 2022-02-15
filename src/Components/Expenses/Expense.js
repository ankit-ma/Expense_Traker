import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
function Expense(props) {
  const [filteredYear, setFilteredyear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li className="expense_list">
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expense;
