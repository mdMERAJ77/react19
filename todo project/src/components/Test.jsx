import { useState } from "react";

function Test() {
    const [newTodo,setNewTodo] = useState("");
    const [todos,setTodos] =useState([]);
    const formHandler = (e)=>{
        e.preventDefault();
        if(newTodo){
            setTodos([...todos,{text:newTodo,completed:false}])
        }
        setNewTodo("")
    }
    const inputHander =(e)=>{
        setNewTodo(e.target.value)
    }   
    const taskCompletedOrNot =(index)=>{
        const newTodos=[...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos)
    }    
    const taskdelete=(index)=>{
        const newTodos =todos.filter((curreElem,i)=>i!==index)
        setTodos(newTodos)
    }
  return (
    <div>
        <h1>TODO WORK</h1>
        <form onSubmit={formHandler}>
            <input onChange={inputHander} type="text" value={newTodo} placeholder="enter task"/>
            <button type="submit">Submit</button>
        </form>
        <ol>
            {todos.map((curreElem,index)=>(
                <li key={index}><h2 style={{textDecoration: curreElem.completed?"line-through":"none"}}>{curreElem.text}</h2> <button onClick={()=>taskCompletedOrNot(index)}>{curreElem.completed?"task done✅":"not done yet❌"}</button> <button onClick={()=>taskdelete(index)}>task delete</button></li>
                
            ))}
            
        </ol>
    </div>
  )
}

export default Test