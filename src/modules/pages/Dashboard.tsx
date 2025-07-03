import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { DatePicker, DatesProvider,DatePickerInput } from '@mantine/dates';
import useTaskApi from "../hooks/useTaskApi";
import Task from "../models/Task";
import { Button } from "../components/Button"
import ProgressBar from "../components/ProgressBar";
import CardCategory from "../components/CategoryCard";
import ProgressRing from "../components/RingProgress";
import CategoryCarousel from "../components/CategoryCarousel";
import Category from "../models/Category";
import useCategoryApi from "../hooks/useCategoriesApi";
import { Modal } from "../components/Modal"
import '@mantine/core/styles.css';
import { Paper, Title, Text } from '@mantine/core';




export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numberOfTasks, setNumberOfTasks]=useState<number>(0);
  const [taskProgressValue, setTaskProgressValue] = useState<number>(0);
  const [tasksDates, setTasksDates]=useState<string[]>([]);
  


  const navigate=useNavigate()
  const taskApi=useTaskApi()
  const categoriesApi=useCategoryApi()


  useEffect(() => {

    getCategories()
    get_task_count()
    get_tasks_dates()
  }, []);


  const get_tasks_dates=async()=>{
    const result=await taskApi.get_dates_for_calendar()
    if(result.data){
      setTasksDates(result.data)
    }else{
      console.log("Error al obtener las fechas")

    }

  }
  const getCategories=async()=>{
    const result=await categoriesApi.readMyCategories()
    if (result.data){
      setCategories(result.data)
    }else{
      console.log("Error al obtener categorias")
    }

  }

  const get_task_count=async()=>{
    const result=await taskApi.count_tasks()
    if (result.data){
      setNumberOfTasks(result.data)
      console.log("contador de",result.data)

    }else {
      console.log("No existen tareas")
    }
  }

  const getCompletionPercentage=async()=>{
    const result=await taskApi.calculate_percentage_tasks_completed()
    if (result.data){
      setTaskProgressValue(result.data)
      console.log(result.data)
    }else{
      console.log("Error al calcular porcentaje de tareas completadas")
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
      {numberOfTasks > 0  ?
  
        <div className="grid gap-10">
          <div>
          <DatePickerInput placeholder="Filter by date" valueFormat="YYYY MMM DD "/>
 
          </div>

          

          <Button onClick={handleAddTask}>Add Task</Button>

        </div>
        
        :

        <div>
          <div>¡Bienvenido/a! </div>
          <div>Comienza a crear tareas</div>
          <Button onClick={handleAddTask}>add Task</Button>
        </div>
      }
    </MainLayout>
  );
}