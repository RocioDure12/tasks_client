import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { PickDate } from "../components/PickDate";
import { DatesProvider } from '@mantine/dates';
import useTaskApi from "../hooks/useTaskApi";
import Task from "../models/Task";
import { Button } from "../components/Button"


export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate=useNavigate()
  const taskApi=useTaskApi()

  useEffect(() => {
    getTasks();
  
  }, []);

  const getTasks= async() => {
    const result=await taskApi.readMyTasks()
    if(result.data){
      setTasks(result.data)
    }else{
      console.log("Error al obtener tareas")
    }
    }

  
  const handleAddTask=()=>{
    navigate(`/taskform`)
  }

  /*const handleSelect = (date: Date) => {
    // Si el día ya está seleccionado, lo deseleccionamos
    if (selectedDate && dayjs(date).isSame(selectedDate, 'date')) {
      setSelectedDate(null);
    } else {
      // De lo contrario, seleccionamos el nuevo día
      setSelectedDate(date);
    }
    if (date){
      navigate(`/list/${dayjs(date).format('DD-MM-YYYY')}`)
    }
  };*/

  return (
    <MainLayout>
      {tasks.length === 0 ? (
        <div>
          <div>¡Bienvenido/a! </div>
          <div>Comienza a crear tareas</div>
          <Button onClick={handleAddTask}>add Task</Button>
        </div>
      ) : (
        <div className="grid gap-10">
          <PickDate />
        </div>
      )}
    </MainLayout>
  );
}