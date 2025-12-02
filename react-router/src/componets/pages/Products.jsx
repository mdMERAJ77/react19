import { NavLink, Outlet } from "react-router-dom";
function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav
        style={{
          margin: "20px",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          width:"150px",
          fontSize:"20px"
        }}
      >
        <NavLink
          to="phone"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            marginRight: "20px",
          })}
        >
          Phone
        </NavLink>
        <NavLink to="laptop" style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            marginRight: "20px",
          })}>Laptop</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Products;
