import { useState } from "react"
import Task from "../models/Task"
import useTaskApi from "../hooks/useTaskApi"
import axios, { AxiosError } from "axios";

const taskApi= useTaskApi()

export const TaskForm:React.FC=()=>{
    const [task, setTask]=useState<Partial<Task>>({status:false})

    const handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value, type, checked } = evt.target;
        const updatedTask = { ...task, [name]: type === 'checkbox' ? checked : value };
        
        setTask(updatedTask);
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const result=taskApi.createTask(task as Task)
        console.log(result)
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
            Tiempo
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

             <button>Enviar</button>
             

        </form>
    )
}