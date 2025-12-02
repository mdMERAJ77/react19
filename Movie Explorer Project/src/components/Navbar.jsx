import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h2>🎬 Movie Explorer</h2>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/movielinks">Movies Links</Link>
      </nav>
    </>
  );
}
export default Navbar;
