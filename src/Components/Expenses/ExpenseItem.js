import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const clickhandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
      {/* <button onClick={clickhandler}>Click me</button> */}
    </Card>
  );
}
export default ExpenseItem;
