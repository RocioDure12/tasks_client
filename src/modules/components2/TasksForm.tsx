import React, { useState, ChangeEvent } from "react";

export interface Task {
  //id:number;
  name: string;
  description: string;
  //isChecked?: boolean;
}

export interface TaskFormProps {
  onTaskSubmit: (task: Task) => any;
}

function TaskForm(props: TaskFormProps) {
  const [task, setTask] = useState<Partial<Task>>({});

  //Función para manejar el envío del formulario
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onTaskSubmit(task as Task);
    setTask({});
  }

  //Función para manejar cambios en los campos del formulario
  function handleNameChange(evt: ChangeEvent<HTMLInputElement>) {
    setTask({ ...task, ...{ name: evt.target.value } });
  }

  function handleDescritionChange(evt: ChangeEvent<HTMLInputElement>) {
    setTask({ ...task, ...{ description: evt.target.value } });
  }

  return (
    <>
      <form className="card" onSubmit={handleSubmit}>
        <label>
          Tarea:
          <input
            type="text"
            name="name"
            value={task.name ?? ""}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Descripcion:
          <input
            type="text"
            name="description"
            value={task.description ?? ""}
            onChange={handleDescritionChange}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default TaskForm;
