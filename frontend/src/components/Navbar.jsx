import { Link } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{
      background: "#4f46e5",
      padding: "15px",
      color: "white",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>
        <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>Dashboard</Link>
        <Link to="/projects" style={{ color: "white", marginRight: "15px" }}>Projects</Link>
        <Link to="/tasks" style={{ color: "white" }}>Tasks</Link>
      </div>

      <button onClick={logout} style={{ background: "white", color: "#4f46e5" }}>
        Logout
      </button>
    </div>
  );
}
