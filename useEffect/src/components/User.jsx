import { useEffect, useState } from "react"

function User() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
    },[])
  return (
    <>
        <h1>USER LIST:</h1>
        {
            users.map((currElem,index)=>(
                <li key={index}>
                    <strong>{currElem.name}</strong>
                    <br />
                    <small>{currElem.email}</small>
                </li>
            ))
        }
    </>
  )
}

export default User