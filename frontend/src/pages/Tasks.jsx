import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [users, setUsers] = useState([]);
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const t = await API.get("/tasks");
      setTasks(t.data);

      const u = await API.get("/users"); // add this route if needed
      setUsers(u.data);
    };
    fetch();
  }, []);

  const createTask = async () => {
    await API.post("/tasks", { title, assignedTo });
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  return (
    <div>
      <Navbar />
      <h2>Tasks</h2>

      <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" />

      <select onChange={(e) => setAssignedTo(e.target.value)}>
        <option>Select user</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>{u.name}</option>
        ))}
      </select>

      <button onClick={createTask}>Add</button>

      {tasks.map((t) => (
        <TaskCard key={t.id} task={t} />
      ))}
    </div>
  );
}