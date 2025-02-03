import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { PickDate } from "../components/PickDate";
import { DatesProvider } from '@mantine/dates';
import useTaskApi from "../hooks/useTaskApi";
import Task from "../models/Task";
import { Button } from "../components/Button"
import ProgressBar from "../components/ProgressBar";
import CardCategory from "../components/CardCategory";
import ProgressRing from "../components/RingProgress";


export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [progress, setProgress] = useState(0);
  const navigate=useNavigate()
  const taskApi=useTaskApi()

  useEffect(() => {
    getTasks() 
  }, []);


  const getTasks= async() => {
    const result=await taskApi.readMyTasks()
    if(result.data){
      setTasks(result.data)
      console.log(result.data)
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

//funcion para calcular porcentaje de tareas realizadas (bar progress)
const getCompletionPercentage = () => {
  const totalTasks = tasks.length;
  if (totalTasks === 0) return 0;
  const completedTasks = tasks.filter(task => task.status === true).length;
  return Math.round((completedTasks / totalTasks) * 100)

};


  return (
    <MainLayout>
      {tasks.length === 0 ? (
        <div>
          <div>¡Bienvenido/a! </div>
          <div>Comienza a crear tareas</div>
          <Button onClick={handleAddTask}>add Task</Button>
        </div>
      ) 
      
      :
      
      (
        <div className="grid gap-10">
          <span>Hey ¡Tienes trabajo que hacer! 💪🏼 </span>
          <PickDate />
          <ProgressBar 
          progress={60}
          color="#2d1c59"
          ></ProgressBar>
         
          <CardCategory></CardCategory>

      
          <Button>Add Category</Button>
  
        </div>
      )}
    </MainLayout>
  );
}