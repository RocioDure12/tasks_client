import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import useTaskApi from "../hooks/useTaskApi";
import Task from "../models/Task";
import { Button } from "../components/Button";
import '@mantine/core/styles.css';
import { Paper, Title, Text, useMantineTheme, } from '@mantine/core';
import { TasksList } from "../components/TasksList"
import { toast } from 'react-hot-toast';
import { TaskCalendar } from "../components/TaskCalendar";
import { Modal } from "../components/Modal"


export default function Dashboard() {
  
  const [numberOfTasks, setNumberOfTasks] = useState<number>(0);
  const [tasksDates, setTasksDates] = useState<string[]>([]);
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Partial<Task>>({});

  const navigate = useNavigate();
  const taskApi = useTaskApi();


  useEffect(() => {
    get_task_count();
    get_tasks_dates();
    get_upcoming_tasks();
  }, []);




  const get_tasks_dates = async () => {
    const result = await taskApi.get_dates_for_calendar();
    if (result.data) {
      setTasksDates(result.data);
      console.log(tasksDates)
    } else {
      console.log("Error al obtener las fechas");
    }
  };

  const get_task_count = async () => {
    const result = await taskApi.count_tasks();
    if (result.data) {
      setNumberOfTasks(result.data);
      console.log("contador de", result.data);
    } else {
      console.log("No existen tareas");
    }
  };

  const get_upcoming_tasks = async () => {
    const result = await taskApi.get_upcoming_tasks()
    if (result.data) {
      console.log(result.data)
      setUpcomingTasks(result.data)
    } else {
      console.log("no funko")
    }
  }


  const handleAddTask = () => {
    navigate(`/taskform`);
  };

  const handleEditTask = (id: number) => {
    navigate(`/taskform/${id}`);
  };

  const handleDeleteTask = async (id: number) => {
    const result = await taskApi.deleteTask(id);
    await get_upcoming_tasks()
    

  };

  const viewDetailTask = async (id: number) => {
    const result = await taskApi.getTaskById(id);
    if (result.data){
      if (!result.data.description){
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

      if (!response.data) {
        throw new Error("No se encontró la tarea.");
      }

      const task = response.data;
      const updatedTask = { ...task, status: !task.status };

      await taskApi.updateTask(id, updatedTask);
      await get_upcoming_tasks();

    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);
    }
  };

    const closeModal = () => {
    setIsOpen(false)
    setTask({})
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

          <TasksList
            title="🕒 Próximas tareas..."
            list={upcomingTasks}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleTaskStatus={handleTaskStatus}
            viewDetailTask={viewDetailTask}
            formattedTime={formattedTime}
          />

          <Button onClick={handleAddTask}>Nueva tarea</Button>
        </>
      ) : (
        <div className="text-center space-y-2">
          <div>¡Bienvenido/a!</div>
          <div>Comienza a crear tareas</div>
          <Button onClick={handleAddTask}>Nueva tarea</Button>
        </div>
      )}

      {/* ✅ Modal fuera del condicional */}
      {isOpen && task.description && (
        <Modal
          title={task.task_name}
          description={task.description}
          hour={formattedTime(task.due_date)}
          onClose={closeModal}
        />
      )}
    </MainLayout>
  </>
);


}