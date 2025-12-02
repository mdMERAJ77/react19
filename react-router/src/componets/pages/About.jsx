import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px",
          fontSize: "17px",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default About;
