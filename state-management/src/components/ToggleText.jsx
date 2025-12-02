import { useState } from "react"
function ToggleText() {
    const [isVisible, setIsVisible]=useState(false);

    // function handleVisibility(){
    //     return setIsVisible(!isVisible)
    // }
  return (
    <div>
        <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?"Hide button":"Show button"}</button><br />
        {isVisible&&<h1>THIS IS THE SECRET MESSAGE</h1>}
        
    </div>
  )
}

export default ToggleText