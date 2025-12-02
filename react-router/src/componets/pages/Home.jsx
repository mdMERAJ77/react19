import { useNavigate } from "react-router-dom";

function Home() {
    const navigate =useNavigate();
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <button onClick={()=>navigate("/about")} style={{padding:"10px", fontSize:"17px", backgroundColor:"red", color:"white"}}>Go to About</button>
      </div>
    </>
  );
}

export default Home;
