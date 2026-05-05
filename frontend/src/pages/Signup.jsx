import { useState } from "react";
import API from "../api/axios";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Member",
  });

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", data);
      alert("Signup successful");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <select
        onChange={(e) => setData({ ...data, role: e.target.value })}
      >
        <option value="Member">Member</option>
        <option value="Admin">Admin</option>
      </select>

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}