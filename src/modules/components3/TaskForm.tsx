import { useState } from "react"
import Task from "../models/Task"


export const TaskForm:React.FC=()=>{
    const [task, setTask]=useState<Partial<Task>>({})

    const handleChangeName=(evt:React.ChangeEvent<HTMLInputElement>)=>{
        setTask({...task,...{name:evt.target.value},})
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            Nombre
            <input
            type="text"
            name="name"
            value={task.task_name}
            onChange={handleChangeName}
            required
            />
            Tiempo
            <input
            type="datetime-local"
            name="due-time"
            value={task.due_date?.toLocaleDateString()}
            onChange={handleChangeName}
            required
            />
            Descripción
            <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChangeName}
            required
            />
            <input
             type="checkbox"
             onChange={handleChangeName}
             value={task.status?.toString()}
             />

             <button>Enviar</button>
             

        </form>
    )
}