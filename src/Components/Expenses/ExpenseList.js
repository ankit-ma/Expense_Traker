import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
function ExpenseList(props) {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Nothing found</h2>;
  }

  return (
    <ul classname="expenses-list">
      {props.item.map((expese) => (
        <ExpenseItem
          key={expese.id}
          title={expese.title}
          amount={expese.amount}
          date={expese.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
