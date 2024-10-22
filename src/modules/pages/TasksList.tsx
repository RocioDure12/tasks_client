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

  const {date}=useParams<{ date: string }>() //a confirmar

  const taskApi = useTaskApi();
  const navigate = useNavigate();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const result = await taskApi.readTasks();
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

  //funcion para filtrar las tareas por la fecha

  //const filteredList = list.filter(item => dayjs(item.due_date).format('DD/MM/YYYY') === date);
  const filteredList = list.filter(item => {
    const formattedDate = dayjs(item.due_date).format('DD-MM-YYYY');
    return formattedDate === date;
  });



  return (
    <MainLayout>
  
        <ul>
          {filteredList.map((item) => (
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
            </li>
            </Card>
          ))}
        </ul>
 
    
    </MainLayout>
  
  );
};
