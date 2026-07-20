import type Task from "../types/task";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow p-3 mb-5 text-center">
      <p>{task.name}</p>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
    </div>
  );
}
