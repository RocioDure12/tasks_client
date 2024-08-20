import {Form} from "./Form"
import Field from "../models/Field";
import  Task  from "../models/Task";
import useTaskApi from "../hooks/useTaskApi"
import { useEffect, useState } from "react";


const taskApi= useTaskApi()
const initialValues:Partial<Task>=({})

const taskFormFields:Field[]=[
    {
        type: "text",
        name: "task_name",
        label: "Tarea",
        required:true
    },
    {
        type: "text",
        name: "description",
        label: "Descripcion",
    },
    {
        type:"date",
        name:"due_date",
        label:"Fecha de vencimiento"

    }
]

const handleCreateTask=(data:Task)=>{
    const result=taskApi.createTask(data)
    console.log(result)

}

//const handleEditTask=(data:Task)=>{
//    const result=taskApi.editTask(data)
//
//}

export const TaskForm=()=>{
    const [task,setTask]=useState<Partial<Task>>({status:false, due_date:undefined})

    return(
        <Form
        fields={taskFormFields}
        initialValues={initialValues}
        onFormSubmit={handleCreateTask}

        />
    )
}