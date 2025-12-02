import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <h1>No Expenses yet</h1>;
  }

  return (
    <div>
      {expenses.map((currExpenses) => (
        <ExpenseItem
          key={currExpenses.id}
          item={currExpenses}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
