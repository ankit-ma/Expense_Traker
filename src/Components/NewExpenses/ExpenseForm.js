import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");

  const amountChangedEventHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangedEventHandler = (event) => {
    setEnterDate(event.target.value);
    console.log(event.target.value);
  };
  const titleChangeEventListner = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  const submitEventhandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setEnterDate("");
    setEnteredAmount("");
    setEnteredTitle("");
    //console.log(expenseData);
    props.onSaveExpense(expenseData);
  };
  const [hideExpenseForm, setExpenseFormHide] = useState(true);
  const hideNewExpense = () => {
    setExpenseFormHide(false);
  };
  if (hideExpenseForm === true) {
    return (
      <form onSubmit={submitEventhandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeEventListner}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangedEventHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-01-01"
              value={enteredDate}
              onChange={dateChangedEventHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={hideNewExpense}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
  return (
    <div>
      <button
        onClick={() => {
          setExpenseFormHide(true);
        }}
      >
        New expense
      </button>
    </div>
  );
}

export default ExpenseForm;
