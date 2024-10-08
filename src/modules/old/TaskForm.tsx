import { useState } from "react"
import Task from "../models/Task"
import useTaskApi from "../hooks/useTaskApi"


const taskApi= useTaskApi()

export const TaskForm:React.FC=()=>{
    const [task, setTask]=useState<Partial<Task>>({status:false, due_date:undefined})

    const handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value, type, checked } = evt.target;
        const updatedTask = { ...task, [name]: type === 'checkbox' ? checked : value };
        
        setTask(updatedTask);
    }

    
    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const result=await taskApi.createTask(task as Task)
        console.log(result)
        setTask({due_date:undefined});
    }

    return(
        <form onSubmit={handleSubmit}>
            Nombre
            <input
            type="text"
            name="task_name"
            value={task.task_name || ""}
            onChange={handleChange}
            required
            />
            Fecha de vencimiento
            <input
            name="due_date"
            type="datetime-local"
            onChange={handleChange}
            required
      
            />
            Descripción
            <input
            type="text"
            name="description"
            value={task.description || ""}
            onChange={handleChange}
            required
            />
            <input
             name="status"
             type="checkbox"
             onChange={handleChange}
             checked={task.status || false}
             />
        
             <button>Guardar</button>
             
             

        </form>
    )
}