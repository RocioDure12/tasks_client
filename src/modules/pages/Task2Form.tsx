import { Form } from "../components/Form";
import Field from "../models/Field";
import Task from "../models/Task";
import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";

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
    required:true,
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
      setTask({});
    }
  }, [id]);

  const handleEditTask = async (data: Task, id: string) => {
    const result = await taskApi.updateTask(data, id);
  };

  const handleCreateTask = async (data: Task) => {
    const result = await taskApi.createTask(data as Task);
  };

  const getTaskById = async (id: string) => {
    const result = await taskApi.getTaskById(id);
    if (result.data) {
      setTask(result.data);
    } else {
      console.log("Error al obtener tarea");
    }
  };

  const handleSubmit = (data: Task) => {
    if (id !== undefined) {
      handleEditTask(data, id);
    } else {
      handleCreateTask(data as Task) // Crea una nueva tarea si taskId no está definido
    }
  };
  console.log(task);
  return (
    <MainLayout >
      <Form
        fields={taskFormFields}
        initialValues={task} // Pasa los valores actuales de la tarea al formulario
        onFormSubmit={handleSubmit}
        buttonText={id ? "Editar" : "Guardar"}
      />
    </MainLayout>
    );
};
