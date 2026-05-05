import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  const createProject = async () => {
    await API.post("/projects", { name });
    setName("");

    // refresh list
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  return (
    <div>
      <Navbar />
      <h2>Projects</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project name"
      />
      <button onClick={createProject}>Create</button>

      {projects.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}