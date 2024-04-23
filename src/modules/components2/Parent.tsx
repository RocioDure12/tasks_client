import { useState } from "react";
import TaskForm, { Task } from "./TasksForm";
import TasksList from "./TasksList";
//import TasksList from "./TasksList";
//import Task from "../models/Task";
//import TasksList from "../components2/TasksList";

function Parent() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  function onDelete(index: number) {
    const filteredTasks = tasks.filter((task, idx) => idx !== index); // Filter out the task with the given index
    setTasks(filteredTasks);
  }
  
  


  return (
    <>
      <TaskForm onTaskSubmit={addTask} />

      <TasksList tasks={tasks} onDelete={onDelete} />
    </>
  );
}

export default Parent;
