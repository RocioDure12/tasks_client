import TaskForm, { Task } from "./TasksForm";
import "../styles/Card.css";

interface TasksListProps {
  tasks: Task[];
  onDelete: (index: number) => any;
}

function TasksList(props: TasksListProps) {
  return (
    <div className="card">
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}>
            {task.name} <button onClick={() => props.onDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
