import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import Task from "../models/Task";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Pencil, Trash2, Eye, Edit } from "lucide-react";
import { Modal } from "../components/Modal";
import { Checkbox } from "@mantine/core";
import theme from "../../theme";
import {Pagination} from "../components/Pagination"

export const TasksList = () => {
  const [TaskList, setTaskList] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<Partial<Task>>({});
  const [currentPage, setCurrentPage]=useState(1)
  const[totalPages, setTotalPages]=useState<number>(0);
  


  const { date } = useParams<{ date: string }>();
  const taskApi = useTaskApi();
  const navigate = useNavigate();
  const limit=5

  useEffect(() => {
    getTasks();
  }, [currentPage]);

  const getTasks = async () => {
    if (!date) return;
    const offset = (currentPage - 1) * limit;    
    const result = await taskApi.get_tasks_paginated(limit, offset, date);
    if (result.data){
      const [fetchedTasks, total]=result.data
      setTaskList(fetchedTasks)
      calculateTotalPages(total)

    }
  };

  const handleEditTask = (id: number) => {
    navigate(`/taskform/${id}`);
  };

  const handleDeleteTask = async (id: number) => {
    const result = await taskApi.deleteTask(id);
    await getTasks();
  };

  //esta funcion deberia conducir a un modal que muestra la informacion de la tarea seleccionada
  const viewDetailTask = async (id: number) => {
    const result = await taskApi.getTaskById(id);
    if (result.data) {
      setTask(result.data);
      setIsOpen(true)
    }
  };


  const calculateTotalPages=(totalItems:number)=>{
    const result=Math.ceil(totalItems / limit)
    setTotalPages(result)
  }

  const handlePageChange = (page: number) => {
  setCurrentPage(page);
};


  const formattedTime = (date: Date | string | undefined): string => {
    if (!date) return "";
    return new Date(date).toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const closeModal=()=>{
    setIsOpen(false)
    setTask({})
  }


  const handleTaskStatus = async (id: number) => {
    try {
      const response = await taskApi.getTaskById(id);
  
      if (!response.data) {
        throw new Error("No se encontró la tarea.");
      }
  
      const task = response.data;
      const updatedTask = { ...task, status: !task.status };
  
      await taskApi.updateTask(id, updatedTask);
      await getTasks();
    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);
    }
  };
  

  return (
    <div>
      {isOpen ? (
        <Modal
          title={task.task_name}
          description={task.description}
          hour={formattedTime(task.due_date)}
          onClose={closeModal}
        ></Modal>
      ) : (
        <>
        <ul className="max-w-md mx-auto mt-10 p-4 bg-primary-300 shadow-lg rounded-lg ">
          {TaskList.map((item) => (
            <div key={item.id}>
              <li
                key={item.id}
                className="flex justify-between items-center p-6 bg-primary-100 rounded-lg shadow hover:shadow-md transition m-2 text-primary-500 border-l-4 border-primary-500"
              >
                <div className="flex-1">
                  <span className="block">{item.task_name}</span>
                  <span className="block font-bold text-sm">
                    {formattedTime(item.due_date)}
                  </span>
                </div>
                <div className="flex space-x-3">

                <Checkbox
                checked={item.status}
                onChange={()=>{handleTaskStatus(item.id)}}
             
                styles={(theme, params) => ({
                  input: {
                    borderColor: theme.colors.primary[5],
                    backgroundColor: params.checked ? theme.colors.primary[5] : undefined,
                  },
                 })}
                />

                  <Pencil
                    onClick={() => {
                      handleEditTask(item.id);
                    }}
                  >
                    Editar
                  </Pencil>
                  <Trash2
                    onClick={() => {
                      handleDeleteTask(item.id);
                    }}
                  >
                    Eliminar
                  </Trash2>
                  <Eye
                    onClick={() => {
                      viewDetailTask(item.id);
                    }}
                  >
                    Visualizar
                  </Eye>
                </div>
              </li>
            </div>
            
          ))}
        </ul>
        
        
        </>
      )}
      <Pagination 
      currentPage={currentPage} 
      totalPages={totalPages}
      onPageChange={handlePageChange}      
      >
      </Pagination>
    </div>
  );
};
