// import { useState } from "react";

// function Todo() {
//   const [newTodo, setNewTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newTodo) {
//       setTodos([...todos, { text: newTodo, completed: false }]);
//       setNewTodo("");
//     }
//   };

//   const inputHander = (e) => {
//     setNewTodo(e.target.value);
//   };

//   const taskCompletedOrNot = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   };

//   const handleDelete = (index) => {
//     const newTodos = todos.filter((curreElem,i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>TODO WORK</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="enter a work"
//           value={newTodo}
//           onChange={inputHander}
//         />
//         <button type="submit">ADD WORK</button>
//       </form>

//       <ol style={{ textAlign: "start" }}>
//         {todos.map((currTodo, index) => (
//           <li key={index}>
//             <h3
//               style={{
//                 textDecoration: currTodo.completed ? "line-through" : "none",
//                 marginBottom: "5px",
//               }}
//             >
//               {currTodo.text}
//             </h3>

//             <button style={{marginRight:"10px", padding:"4px"}} onClick={() => taskCompletedOrNot(index)}>
//               {currTodo.completed
//                 ? "Task Completed ✅"
//                 : "Task Not Completed ❌"}
//             </button>

//             <button style={{padding:"5px"}} onClick={() => handleDelete(index)}>
//               Delete List
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default Todo;
