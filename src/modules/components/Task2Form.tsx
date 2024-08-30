import { Form } from "./Form";
import Field from "../models/Field";
import Task from "../models/Task";
import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const taskFormFields: Field[] = [
  {
    type: "text",
    name: "task_name",
    label: "Tarea",
    required: true,
  },
  {
    type: "text",
    name: "description",
    label: "Descripcion",
  },
  {
    type: "datetime-local",
    name: "due_date",
    label: "Fecha de vencimiento",
  },
];

export const Task2Form = () => {
  const [task, setTask] = useState<Partial<Task>>({});

  const taskApi = useTaskApi();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      getTaskById(id);
    } else {
      setTask({ /*due_date: undefined*/ });
    }
  }, [id]);

  const handleEditTask = async (data: Task, id: string) => {
    console.log("edit",data)
    const result = await taskApi.updateTask(data, id);
  };

  const handleCreateTask = async (data: Task) => {
    console.log("create",data)
    const result = await taskApi.createTask(data);
  };

  const getTaskById = async (id: string) => {
    const result = await taskApi.getTaskById(id);
    if (result.data) {
      setTask(result.data);
    } else {
      console.log("Error al obtener popo");
    }
  };

  const handleSubmit = (data: Task) => {
    if (id !== undefined) {
      handleEditTask(data, id);
    } else {
      handleCreateTask(data); // Crea una nueva tarea si taskId no está definido
    }
  };
  console.log(task);
  return (
    <Form
      fields={taskFormFields}
      initialValues={task} // Pasa los valores actuales de la tarea al formulario
      onFormSubmit={handleSubmit}
      buttonText={id ? "Editar" : "Guardar"}
    />
  );
};
