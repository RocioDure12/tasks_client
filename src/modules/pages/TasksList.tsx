import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import Task from "../models/Task";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { Card } from "../components/Card";


export const TasksList = () => {
  const [list, setList] = useState<Task[]>([]);

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

  return (
    <MainLayout>
  
        <ul>
          {list.map((item) => (
            <Card>
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
