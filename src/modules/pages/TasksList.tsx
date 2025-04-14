import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import Task from "../models/Task";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Pencil, Trash2, Eye, Edit } from "lucide-react";
import { Modal } from "../components/Modal";

export const TasksList = () => {
  const [list, setList] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Partial<Task>>({});

  const { date } = useParams<{ date: string }>();
  const taskApi = useTaskApi();
  const navigate = useNavigate();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const result = await taskApi.readMyTasks();
    if (result.data) {
      setList(result.data);
    } else {
      console.log("error al obtener tareas");
    }
  };

  const handleEditTask = (id: number) => {
    navigate(`/formulario/${id}`);
  };

  const handleDeleteTask = async (id: number) => {
    const result = await taskApi.deleteTask(id);
    await getTasks();
  };

  //esta funcion deberia conducir a un modal que muestra la informacion de la tarea seleccionada
  const viewDetailTask = async (id: number) => {
    const result = await taskApi.getTaskById(id);
    if (result.data) {
      setTask(result.data);
      setIsOpen(true)
    }
  };

  //TAMBIEN FALTA AGREGAR COMPONENTE CHECKBOX EL CUAL NECESITO PARA SACAR EL PORCENTAJE DE TAREAS COMPLETADAS

  //funcion para filtrar las tareas por la fecha
  //const filteredList = list.filter(item => dayjs(item.due_date).format('DD/MM/YYYY') === date);
  const filteredList = list.filter((item) => {
    const formattedDate = dayjs(item.due_date).format("YYYY-MM-dd");
    return formattedDate === date;
  });


  const formattedTime = (date: Date | string | undefined): string => {
    if (!date) return "";
    return new Date(date).toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const closeModal=()=>{
    setIsOpen(false)
    setTask({})
  }

  return (
    <div>
      {isOpen ? (
        <Modal
          title={task.task_name}
          description={task.description}
          hour={formattedTime(task.due_date)}
          onClose={closeModal}
        ></Modal>
      ) : (
        <ul className="max-w-md mx-auto mt-10 p-4 bg-primary-300 shadow-lg rounded-lg ">
          {list.map((item) => (
            <div key={item.id}>
              <li
                key={item.id}
                className="flex justify-between items-center p-6 bg-primary-100 rounded-lg shadow hover:shadow-md transition m-2 text-primary-500 border-l-4 border-primary-500"
              >
                <div className="flex-1">
                  <span className="block">{item.task_name}</span>
                  <span className="block font-bold text-sm">
                    {formattedTime(item.due_date)}
                  </span>
                </div>
                <div className="flex space-x-3">
                  <Pencil
                    onClick={() => {
                      handleEditTask(item.id);
                    }}
                  >
                    Editar
                  </Pencil>
                  <Trash2
                    onClick={() => {
                      handleDeleteTask(item.id);
                    }}
                  >
                    Eliminar
                  </Trash2>
                  <Eye
                    onClick={() => {
                      viewDetailTask(item.id);
                    }}
                  >
                    Visualizar
                  </Eye>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
