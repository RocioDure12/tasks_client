import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';
import { Calendar } from "lucide-react";

import useTaskApi from "../hooks/useTaskApi";
import Task from "../models/Task";
import { Button } from "../components/Button";
import Category from "../models/Category";
import useCategoryApi from "../hooks/useCategoriesApi";
import '@mantine/core/styles.css';
import { Paper, Title, Text, useMantineTheme, } from '@mantine/core';
import { Pagination } from "../components/Pagination"
import { TasksList } from "../components/TasksList"
import { toast } from 'react-hot-toast';
import { TaskCalendar } from "../components/TaskCalendar";

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [numberOfTasks, setNumberOfTasks] = useState<number>(0);
  const [tasksDates, setTasksDates] = useState<string[]>([]);
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);

  const navigate = useNavigate();
  const taskApi = useTaskApi();
  const theme = useMantineTheme();

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

  };

  const viewDetailTask = async (id: number) => {
    const result = await taskApi.getTaskById(id);
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

    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);
    }
  };





  return (

    <>
      {numberOfTasks > 0 ? (

        <MainLayout>
          
          <TaskCalendar   
          tasksDates={tasksDates}
          onDateSelected={(dateString) => navigate(`/list/${dateString}`)}>
          </TaskCalendar>



             <div>Tareas proximas...</div>    
              <TasksList
                list={upcomingTasks}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
                handleTaskStatus={handleTaskStatus}
                viewDetailTask={viewDetailTask}
                formattedTime={formattedTime}
              ></TasksList>
              <Button onClick={handleAddTask}>Añadir tarea</Button>
          

        </MainLayout>


      ) : (
        <MainLayout>
          <div className="text-center space-y-2">
            <div>¡Bienvenido/a!</div>
            <div>Comienza a crear tareas</div>
            <Button onClick={handleAddTask}>Añadir tarea </Button>

          </div>
        </MainLayout>
      )}
    </>

  )
}
