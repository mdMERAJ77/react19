import { useState } from "react";
function Counter(){
    const[count,setCount]=useState(0)
    return(
        <>
            <h2>Count is: {count}</h2>
            <button onClick={()=>setCount(count+1)} style={{padding:"5px 10px", margin:"10px"}}>+</button>
            <button onClick={()=>setCount(count-1)} style={{padding:"5px 12px", margin:"10px"}}>-</button>
        </>
    )
}
export default Counter;