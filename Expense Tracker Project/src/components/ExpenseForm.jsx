import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("Please fill all fields!");

    //new expense object created when user fill the form
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount), // FLOAT VALUE
    };

    //onAddExpense is a props function
    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={title}
          placeholder="Expense Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          step="0.01" // ALLOW FLOAT
          value={amount}
          placeholder="Amount ₹"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
