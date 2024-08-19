//import Form from "./Form"
import Field from "../models/Field";
import  Task  from "../models/Task";
import useTaskApi from "../hooks/useTaskApi"
import { useEffect, useState } from "react";

const taskApi= useTaskApi()
const initialValues:Partial<Task>=({status:false, due_date:undefined})

const taskFormFields:Field[]=[
    {
        type: "text",
        name: "task_name",
        label: "Tarea",
        required:true
    },
    {
        type: "text",
        name: "descripcion",
        label: "Descripcion",
    },
    {
        type:"date",
        name:"dueDate",
        label:"Fecha de vencimiento"

    }
]

const handleCreateTask=(data:Task)=>{
    const result=taskApi.createTask(data)

}

//const handleEditTask=(data:Task)=>{
//    const result=taskApi.editTask(data)
//
//}

const TaskForm=({taskId}: {taskId?:number})=>{
    const [task, setTask] = useState<Partial<Task>>(initialValues);

}