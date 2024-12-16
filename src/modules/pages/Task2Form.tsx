import { Form } from "../components/Form";
import Field from "../models/Field";
import Task from "../models/Task";
import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { OtroForm } from "../components/otroForm";

const taskFormFields: Field[] = [
  {
    type: "text",
    name: "task_name",
    label: "Titulo",
    required: true,
  },
  {
    type: "date",
    name: "due_date",
    label: "Fecha de vencimiento",
    required:true,
  },
  {
    type:"time",
    name:"start_time",
    label:"Horario",
    required:false,
  },
  {
    type:"time",
    name:"end_time",
    label:"",
    required:false,

  },
  {
    type: "textarea",
    name: "description",
    label: "Descripcion o nota (opcional)",
  },

];

export const Task2Form = () => {
  const [task, setTask] = useState<Partial<Task>>({});

  const taskApi = useTaskApi();
  const { id } = useParams<{ id: string }>();

  const parseId = (id: string): number => {
    const numericId = parseInt(id, 10);
    return numericId
  };
  

  useEffect(() => {
    if (id !== undefined) {
      getTaskById(id);
    } else {
      setTask({});
    }
  }, [id]);

  const handleEditTask = async (data: Task, id: string) => {
    const numericId=parseId(id)
    const result = await taskApi.updateTask(numericId, data);
  };

  const handleCreateTask = async (data: Task) => {
    const result = await taskApi.createTask(data as Task);
  };

  const getTaskById = async (id: string) => {
    const numericId=parseId(id)
    const result = await taskApi.getTaskById(numericId);
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
      <OtroForm
        fields={taskFormFields}
        initialValues={task} // Pasa los valores actuales de la tarea al formulario
        onFormSubmit={handleSubmit}
        buttonText={id ? "Editar" : "Guardar"}
      />
    </MainLayout>
    );
};
