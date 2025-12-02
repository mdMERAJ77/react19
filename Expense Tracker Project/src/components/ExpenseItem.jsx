function ExpenseItem({ item, onDelete }) {
  return (
    <div>
      <span style={{ fontSize: "20px" }}>{item.title}: </span>
      <span style={{ fontSize: "20px" }}>₹{item.amount} </span>

      {/* Pass item.id to delete */}
      <button onClick={() => onDelete(item.id)}>❌</button>
    </div>
  );
}

export default ExpenseItem;
