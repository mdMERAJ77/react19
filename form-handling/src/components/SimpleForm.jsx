import { useState } from "react";
function SimpleForm(){
    const [name,setName]=useState("");
    const handleForm = (e)=>{
        e.preventDefault();
        console.log(name);
        console.log(e);
    }
    return(
        <>
            <form onSubmit={handleForm}>
                <label>Name: </label>
                <input name="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default SimpleForm;