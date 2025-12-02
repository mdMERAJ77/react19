import { useState } from "react"

function Student() {
    const [student, setStudent] = useState({
        name:"meraj",
        age:20,
        city:"rajsthan"
    })
    function changeCity(){
        setStudent({...student,city:"BIHAR"})
    }
  return (
    <div>
        <h1>Name: {student.name}</h1>
        <h1>Age: {student.age}</h1>
        <h1>City: {student.city}</h1>
        <button onClick={changeCity}>change city</button>
    </div>
  )
}

export default Student