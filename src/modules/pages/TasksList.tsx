import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import Task from "../models/Task";
import { Button } from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { Card } from "../components/Card";
import dayjs from 'dayjs';

export const TasksList = () => {
  const [list, setList] = useState<Task[]>([]);

  const {date}=useParams<{ date: string }>() 
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

  const viewDetailTask=async(id:number)=>{
  //esta funcion deberia conducir a un modal que muestra la informacion de la tarea seleccionada
  const result= await taskApi.getTaskById(id)
  }

  //FALTA LA LOGICA Y EL COMPONENTE QUE RENDERICE LA INFORMACION DEL DETALLE DE LA TAREA EN UN MODAL

  //funcion para filtrar las tareas por la fecha
  //const filteredList = list.filter(item => dayjs(item.due_date).format('DD/MM/YYYY') === date);
  const filteredList = list.filter(item => {
    const formattedDate = dayjs(item.due_date).format('YYYY-MM-dd');
    return formattedDate === date;
  });



  return (
    <MainLayout>
        <ul>
          {list.map((item) => (
   
            <Card key={item.id}>
            <li key={item.id}>
              {item.task_name}
              <Button
                onClick={() => {
                  handleEditTask(item.id);
                }}
              >
                Editar
              </Button>
              <Button
                onClick={() => {
                  handleDeleteTask(item.id);
                }}
              >
                Eliminar
              </Button>
              <Button onClick={()=>{viewDetailTask(item.id)}}>Visualizar</Button>
            </li>
            </Card>
          ))}
        </ul>
 
    
    </MainLayout>
  
  );
};
