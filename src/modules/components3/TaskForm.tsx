import { useState } from "react"
import Task from "../models/Task"


export const TaskForm:React.FC=()=>{
    const [task, setTask]=useState<Partial<Task>>({})

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e)
    }

    return(
        <form>
            Nombre
            <input
            type="text"
            name="name"
            //value={}
            onChange={handleChange}
            required
            />
            <input
            type="time"
            />

        </form>
    )
}