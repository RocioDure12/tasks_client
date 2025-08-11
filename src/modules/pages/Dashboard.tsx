import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import useTaskApi from "../hooks/useTaskApi";
import Task from "../models/Task";
import { Button } from "../components/Button";
import '@mantine/core/styles.css';
import { TasksList } from "../components/TasksList";
import { toast } from 'react-hot-toast';
import { TaskCalendar } from "../components/TaskCalendar";
import { Modal } from "../components/Modal";
import Loading from "../components/Loading";

export default function Dashboard() {
  const [numberOfTasks, setNumberOfTasks] = useState<number>(0);
  const [tasksDates, setTasksDates] = useState<string[]>([]);
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Partial<Task>>({});
  const [loading, setLoading] = useState(true); // <-- inicializa en true

  const navigate = useNavigate();
  const taskApi = useTaskApi();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Inicio carga...");
      setLoading(true);


      await Promise.all([get_task_count(), get_tasks_dates(), get_upcoming_tasks()]);

      console.log("Carga finalizada");
      setLoading(false);
    };

    fetchData();
  }, []);

  const get_tasks_dates = async () => {
    const result = await taskApi.get_dates_for_calendar();
    if (result.data) {
      setTasksDates(result.data);
      // NO usar console.log(tasksDates) acá, porque el estado no cambia inmediatamente
    } else {
      console.log("Error al obtener las fechas");
    }
  };

  const get_task_count = async () => {
    const result = await taskApi.count_tasks();
    if (result.data) {
      setNumberOfTasks(result.data);
    } else {
      console.log("No existen tareas");
    }
  };

  const get_upcoming_tasks = async () => {
    const result = await taskApi.get_upcoming_tasks();
    if (result.data) {
      setUpcomingTasks(result.data);
    } else {
      console.log("Error al obtener tareas próximas");
    }
  };

  const handleAddTask = () => {
    navigate(`/taskform`);
  };

  const handleEditTask = (id: number) => {
    navigate(`/taskform/${id}`);
  };

  const handleDeleteTask = async (id: number) => {
    await taskApi.deleteTask(id);
    await get_upcoming_tasks();
  };

  const viewDetailTask = async (id: number) => {
    const result = await taskApi.getTaskById(id);
    if (result.data) {
      if (!result.data.description) {
        toast.error("No tiene descripción o nota");
        return;
      }
      setTask(result.data);
      setIsOpen(true);
    }
  };

  const formattedTime = (date: Date | string | undefined): string => {
    if (!date) return "";
    return new Date(date).toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleTaskStatus = async (id: number) => {
    try {
      const response = await taskApi.getTaskById(id);
      if (!response.data) throw new Error("No se encontró la tarea.");

      const task = response.data;
      const updatedTask = { ...task, status: !task.status };

      await taskApi.updateTask(id, updatedTask);
      await get_upcoming_tasks();
    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setTask({});
  };

  // Mostrar spinner si está cargando
  if (loading) {
    console.log("Renderizando Loading...");
    return <Loading />;
  }

  return (
    <>
      <MainLayout>
        {numberOfTasks > 0 ? (
          <>
            <TaskCalendar
              tasksDates={tasksDates}
              onDateSelected={(dateString) => navigate(`/list/${dateString}`)}
            />

            {upcomingTasks.length > 0 ? (
              <TasksList
                title="🕒 Próximas tareas..."
                list={upcomingTasks}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
                handleTaskStatus={handleTaskStatus}
                viewDetailTask={viewDetailTask}
                formattedTime={formattedTime}
              />
            ) : (
              <div className="text-center text-neutral-500 italic mb-4">
                No hay tareas próximas.
              </div>
            )}

            <Button className="bg-primary-500" onClick={handleAddTask}>
              Nueva tarea
            </Button>
          </>
        ) : (
          <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl shadow-md bg-primary-100 m-4">
            <h2 className="font-bold text-primary-800">¡Bienvenido/a!</h2>
            <h3 className="font-semibold italic text-primary-800">
              Comienza a crear tareas
            </h3>
            <Button onClick={handleAddTask}>Nueva tarea</Button>
          </div>
        )}
      </MainLayout>
    </>
  );
}

