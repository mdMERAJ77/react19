import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "15px",
        fontSize: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
      }}
    >
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            marginRight: "20px",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            marginRight: "20px",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            marginRight: "20px",
          })}
        >
          Contact
        </NavLink>
        <NavLink
          to="/user/10"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" , marginRight: "20px"})}
        >
          User
        </NavLink>
        <NavLink to="/products" style={({ isActive }) => ({ color: isActive ? "red" : "black"})}>Products</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
