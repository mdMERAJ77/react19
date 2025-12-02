import { useEffect, useState } from 'react'

function First() {
    const [count, setCount] = useState(0);
   

    useEffect(()=>{
        console.log("Component re-render");
        document.title=`Count: ${count}`
    },[count])
  return (
    <div>
        <h2>count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default First