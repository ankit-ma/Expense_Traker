import Expense from "./Components/Expenses/Expense";
import NewExpenses from "./Components/NewExpenses/NewExpense";
import { useState } from "react";

const INITIAL_DATA = [
  // {
  //   id: "1",
  //   date: new Date(2022, 1, 12),
  //   title: "Television",
  //   amount: "20000",
  // },
];

function App() {
  const [expenses, setExpense] = useState(INITIAL_DATA);

  const addExpense = (expes) => {
    setExpense((prevExpense) => {
      return [expes, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpenses expenseArray={addExpense} />
      <Expense data={expenses} />
    </div>
  );
}

export default App;
