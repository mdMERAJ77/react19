import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedData = localStorage.getItem("expenses");
    return savedData ? JSON.parse(savedData) : [];
  });

  //function add to expense
  const addExpense = (expense) => {
    //add expense in **expenses** variable if new form data is coming then
    setExpenses((prev) => [...prev, expense]);
  };

  // DELETE BY ID (BEST PRACTICE)
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const totalExpenses = expenses.reduce(
    (sum, currItem) => sum + currItem.amount,
    0
  );

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseForm onAddExpense={addExpense} />
      <h3>Total Expense: ₹{totalExpenses}</h3>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
