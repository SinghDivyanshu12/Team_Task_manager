import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const res = await API.get("/dashboard");
      setData(res.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Dashboard</h2>

      <p>Total: {data.total}</p>
      <p>Done: {data.completed}</p>
      <p>Pending: {data.pending}</p>
      <p>Overdue: {data.overdue}</p>
    </div>
  );
}
