import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import Task from "../models/Task";
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';


export const TasksList = () => {
  const [list, setList] = useState<Task[]>([]);

  const taskApi = useTaskApi();
  const navigate=useNavigate()


  const getTasks = async () => {
    const result = await taskApi.readTasks();
    if (result.data) {
      setList(result.data);
    } else {
      console.error(result.errorMessage);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleEditTask=()=>{
    navigate("/formulario")
    

  }

  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task_name}
            <Button onClick={handleEditTask}>Editar</Button>
            <Button>Eliminar</Button>
         </li>
        
         
        ))}
      </ul>
     
    </>
  );
};