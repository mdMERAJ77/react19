import { useParams } from "react-router-dom"
function User() {
    const {id} = useParams();
  return (
    <div>
        <h1>USER DATA: {id}</h1>
    </div>
  )
}

export default User