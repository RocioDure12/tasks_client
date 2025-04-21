import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { DatePicker, DatesProvider,DatePickerInput } from '@mantine/dates';
import useTaskApi from "../hooks/useTaskApi";
import Task from "../models/Task";
import { Button } from "../components/Button"
import ProgressBar from "../components/ProgressBar";
import CardCategory from "../components/CardCategory";
import ProgressRing from "../components/RingProgress";
import CategoryCarousel from "../components/CategoryCarousel";
import Category from "../models/Category";
import useCategoryApi from "../hooks/useCategoriesApi";
import { Modal } from "../components/Modal"
import '@mantine/core/styles.css';




export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const navigate=useNavigate()
  const taskApi=useTaskApi()
  const categoriesApi=useCategoryApi()

  useEffect(() => {

    getCategories()

  }, []);


  
  const getCategories=async()=>{
    const result=await categoriesApi.readMyCategories()
    if (result.data){
      setCategories(result.data)
    }else{
      console.log("Error al obtener categorias")
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
//esta logica deberia ir en la api, es decir hacer un endpoint que maneje esta logica
//es algo a tener en cuenta para CAMBIAR 
const getCompletionPercentage = () => {
  const totalTasks = tasks.length;
  if (totalTasks === 0) return 0;
  const completedTasks = tasks.filter(task => task.status === true).length;
  return Math.round((completedTasks / totalTasks) * 100)
};
  return (
    <MainLayout>
  
        <div>
          <div>¡Bienvenido/a! </div>
          <div>Comienza a crear tareas</div>
          <Button onClick={handleAddTask}>add Task</Button>
        </div>
      
      
      
        <div className="grid gap-10">
          <div>
          <span>Hey ¡Tienes trabajo que hacer! 💪🏼 </span>
        
          <ProgressBar
          progress={getCompletionPercentage()}
          ></ProgressBar>
          <Button className="rounded-xs">Add Task</Button>
          </div>

          <DatePickerInput placeholder="Pick date to see tasks" valueFormat="YYYY MMM DD "/>

        </div>
      
    </MainLayout>
  );
}