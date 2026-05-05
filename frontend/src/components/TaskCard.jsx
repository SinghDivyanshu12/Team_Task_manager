import API from "../api/axios";

export default function TaskCard({ task }) {
  const update = async (status) => {
    await API.put(`/tasks/${task.id}/status`, { status });
    window.location.reload();
  };

  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.status}</p>

      <button onClick={() => update("Pending")}>Pending</button>
      <button onClick={() => update("In Progress")}>Progress</button>
      <button onClick={() => update("Done")}>Done</button>
    </div>
  );
}