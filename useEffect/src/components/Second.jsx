import { useEffect, useState } from "react"

function Second() {
    const [seconds,setSeconds] =useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds((prev)=>prev+1);
        },1000);
        //cleaup function
        return()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        <h1>seconds: {seconds}</h1>
    </div>
  )
}

export default Second