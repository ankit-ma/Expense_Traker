import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(props) {
  const saveExpenseForm = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    //props.expenseArray = { ...props.expenseArray, expense };
    // console.log(props.expenseArray);

    props.expenseArray(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseForm} />
    </div>
  );
}

export default NewExpenses;
