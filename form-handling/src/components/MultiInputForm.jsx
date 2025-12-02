import React, { useState } from 'react'

function MultiInputForm() {
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        city:""
    });
    
    const formhandler = (e)=>{ 
        e.preventDefault();
        console.log(formData);
    }
    const inputHandler=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <div>
        <h2>MultiInputForm</h2>
        <form onSubmit={formhandler}>
            <label>Name: </label>
            <input name='name' type='text' placeholder='enter a name' value={formData.name} onChange={inputHandler}/>
            
            <label>Age: </label>
            <input name='age' type="number" placeholder='enter a age' value={formData.age} onChange={inputHandler}/>

            <label>City: </label>
            <input name='city' type="text" placeholder='enter your city' value={formData.city} onChange={inputHandler}/>

            <button type='submit'>Submit From</button>
        </form>
    </div>
  )
}

export default MultiInputForm