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

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [numberOfTasks, setNumberOfTasks] = useState<number>(0);
  const [tasksDates, setTasksDates] = useState<string[]>([]);
  const [upcomingTasks, setUpcomingTasks]=useState<Task[]>([]);

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

  const get_upcoming_tasks=async()=>{
    const result=await taskApi.get_upcoming_tasks()
    if(result.data){
      console.log(result.data)
      setUpcomingTasks(result.data)
    }else{
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
    <MainLayout>
      {numberOfTasks > 0 ? (
        <div className="min-h-[70vh] flex flex-col justify-center items-center gap-6 px-4">
          <div className="max-w-md mx-auto mt-10 p-4 bg-primary-200 shadow-lg rounded-lg w-full">
            <DatePickerInput
              classNames={{ input: "w-full max-w-lg" }}
              placeholder="Filter by date"
              valueFormat="YYYY MMM DD"
              rightSection={<Calendar size={20}  style={{ color: theme.colors.primary[6] }}/>}
              onChange={(date) => {
                if (!date)return 

                  const dateString = dayjs(date).format("YYYY-MM-DD");
                  const hasTasksOnDate = tasksDates.includes(dateString);

                   if (!hasTasksOnDate) {
                    toast.error("No existen tareas creadas en esa fecha");
                    return; // No navegamos porque no hay tareas para esa fecha
                   }
                   navigate(`/list/${dateString}`)}

              }
              renderDay={(date) => {
                const day = date.getDate();
                const dateString = dayjs(date).format('YYYY-MM-DD');
                const hasTask = tasksDates.includes(dateString);
                

                return (
                  <div style={{ position: 'relative', width: 36, height: 36 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {day}
                    </div>
                    {hasTask && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: theme.colors.primary[6],
                        }}
                      />
                    )}
                  </div>
                );
              }}
            />
          </div>
          <>
          <div>Proximas tareas...</div>
          <TasksList 
          list={upcomingTasks}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
          handleTaskStatus={handleTaskStatus}
          viewDetailTask={viewDetailTask}
          formattedTime={formattedTime}
          ></TasksList>
          </>
       

       

          <Button className="w-full sm:w-auto" onClick={handleAddTask}>Añadir tarea</Button>

        </div>
      ) : (
        <div className="text-center space-y-2">
          <div>¡Bienvenido/a!</div>
          <div>Comienza a crear tareas</div>
          <Button onClick={handleAddTask}>Añadir tarea </Button>

        </div>
      )}
    </MainLayout>
  );
}
